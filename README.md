## SvelteKit app using MapLibre GL JS

A web map application with SvelteKit using MapLibre GL JS.

### API KEY

Create a `.env` file or simply copy and/or rename the `.env.example` file.

Open the `.env` file, you will need to add/replace **MAPTILER_API_KEY** with your own MapTiler API key.

Your MapTiler account access key is on your MapTiler [Cloud](https://cloud.maptiler.com/account/keys/) account page.

:information_source: If you don't have an API KEY, you can create it for free at https://www.maptiler.com/cloud/

## Developing

Once you've copied the project and installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of the app:

```bash
npm run build
```

You can preview the production build with `npm run preview` or run it with `node -r dotenv/config build`.

> .env files are not automatically loaded in production, hence the use of dotenv.

## Build and Deploy using Docker

To create and deploy a production version of the app using Docker:

```bash
# build the image
docker compose build

# and start the app running in the background
docker compose up -d
```

## Using the app as a PWA

The app can be installed to your computer or phone from the browser.

When run in a secure context, the service worker will intercept requests and either serve the cached version or fetch the resource from the network if possible.

Prerendered pages and static assets can always be served from the cache. In addition, any pages visited will be cached and can be served later even if there is no internet connection.
