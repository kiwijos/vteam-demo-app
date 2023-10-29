<script lang="ts">
    import { Map, NavigationControl, AttributionControl } from 'maplibre-gl';
    import { PUBLIC_MAPTILER_API_KEY } from '$env/static/public'

    let mapContainer: HTMLDivElement;

const init = () => {
    const initialState = { lat: 57.26445638065038, lng: 16.450846005270446, zoom: 14 };

    return new Promise<boolean>(() => {
        const map = new Map({
            container: mapContainer,
            style: `https://api.maptiler.com/maps/streets/style.json?key=${PUBLIC_MAPTILER_API_KEY}`,
            center: [initialState.lng, initialState.lat],
            zoom: initialState.zoom,
            attributionControl: false
        });
        map.addControl(new NavigationControl({}), 'top-right');
        map.addControl(new AttributionControl({ compact: true }), 'bottom-right');
    });
};

$: if (mapContainer) {
    init();
}
</script>

<div class="map-wrap">
    <a href="https://www.maptiler.com" class="watermark"
        ><img
            src="https://api.maptiler.com/resources/logo.svg"
            alt="MapTiler logo"
        /></a
    >
    <div class="map" bind:this={mapContainer} />
</div>

<style>
@import 'maplibre-gl/dist/maplibre-gl.css';

.map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 1;
}

.watermark {
    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 999;
}
</style>