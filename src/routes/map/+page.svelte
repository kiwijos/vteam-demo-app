<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import type { Map as MaplibreMap } from 'maplibre-gl';
	import { map } from '$lib/stores/map';
	import type { PageData } from './$types';
	import type { ChargingStation } from '$lib/types/ChargingStation';

	export let data: PageData;

	let _map: MaplibreMap;
	map.subscribe((value) => (_map = value));

	$: if (_map ) {
		_map.on('load', () => {
			const polyFeatures = data.data.map((station: ChargingStation) => {
				return {
					type: "Feature",
					geometry: {
						type: station.geometry.type,
						coordinates: station.geometry.coordinates
					},
					properties: {}
				}
			});

			_map.addSource("stations", {
				type: "geojson",
				data: {
					type: "FeatureCollection",
					features: polyFeatures
				}
			});
			_map.addLayer({
				id: "stations",
				type: "fill",
				source: "stations",
				layout: {},
				'paint': {
					'fill-color': '#088',
					'fill-opacity': 0.8
				}
			});
	})};
</script>

<Map />
