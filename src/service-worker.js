/// <reference types="@sveltejs/kit" />
import { build, files, version } from '$service-worker';

// Note: The global `caches` property returns a CacheStorage object.
// It is only available in secure contexts (HTTPS or localhost).

// Create a unique cache name for this deployment
// (The `version` string is a unique identifier provided by the service-worker module)
const CACHE = `cache-${version}`;

// Declare resources, this includes all static assets, build files and prerendered pages (also provided by the service-worker module)
const ASSETS = [
	...build, // the app itself
	...files // everything in `static`
];

// The install event happens when an user installs the PWA och visits the website for the first time
// or when a new version of the service worker is detected by the browser.
self.addEventListener('install', (event) => {
	// Create a new cache and add all files to it
	async function addFilesToCache() {
		const cache = await caches.open(CACHE); // the `open` method returns a promise that resolves to a Cache object matching the cache name
		await cache.addAll(ASSETS); // the `addAll` method essentially looks at the URLs, retrieves them, then adds the responses to the cache
	}

	// Tell the browser that work is ongoing until the promise settles and that the service worker should not be terminated
	event.waitUntil(addFilesToCache());
});

// Until the new service worker has been activated, the old service worker remains in control.
// Here we listen for the `activate` event and delete the old caches. This will remove the stored data from disk.
self.addEventListener('activate', (event) => {
	// Iterate all named Cache objects and remove all but the current one
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}
	}

	event.waitUntil(deleteOldCaches());
});

// Intercept requests and either serve the cached version or fetch the resource from the network
self.addEventListener('fetch', (event) => {
	// ignore POST requests etc
	if (event.request.method !== 'GET') return;

	async function respond() {
		const url = new URL(event.request.url);
		const cache = await caches.open(CACHE);

		// `build`/`files` can always be served from the cache
		if (ASSETS.includes(url.pathname)) {
			return cache.match(url.pathname);
		}

		// for everything else, try the network first, but
		// fall back to the cache if the user is offline
		try {
			const response = await fetch(event.request);

			if (response.status === 200) {
				cache.put(event.request, response.clone());
			}

			return response;
		} catch {
			return cache.match(event.request);
		}
	}

	event.respondWith(respond());
});
