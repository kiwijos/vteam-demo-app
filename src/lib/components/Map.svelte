<script lang="ts">
	import { Map, NavigationControl, AttributionControl } from 'maplibre-gl';
	import { PUBLIC_MAPTILER_API_KEY } from '$env/static/public';

	let mapContainer: HTMLDivElement;

	const setupMap = () => {
		const initialState = { lat: 57.26445638065038, lng: 16.450846005270446, zoom: 14 };

		const map = new Map({
			container: mapContainer,
			style: `https://api.maptiler.com/maps/streets/style.json?key=${PUBLIC_MAPTILER_API_KEY}`,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom,
			attributionControl: false
		});
		map.addControl(new NavigationControl({}), 'top-right');
		map.addControl(new AttributionControl({ compact: true }), 'bottom-right');
	};

	$: if (mapContainer) {
		setupMap();
	}
</script>

<div class="map-wrap">
	<a href="https://www.maptiler.com" class="watermark"
		><img src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo" /></a
	>
	<div class="map" bind:this={mapContainer} />
</div>

<style>
	@import 'maplibre-gl/dist/maplibre-gl.css';

	.map-wrap {
		position: relative;
		width: 100%;
		height: calc(100vh - 60px); /* calculate height of the screen minus the heading */
	}

	.map {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.watermark {
		position: absolute;
		left: 10px;
		bottom: 10px;
		z-index: 1;
	}
</style>
