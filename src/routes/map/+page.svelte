<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import type { Map as MaplibreMap } from 'maplibre-gl';
	import { map } from '$lib/stores/map';
	import type { PageData } from './$types';
	import type { ParkingStation } from '$lib/types/ParkingStation';
	import polylabel from 'polylabel';

	export let data: PageData;

	let _map: MaplibreMap;
	map.subscribe((value) => (_map = value));

	$: if (_map) {
		_map.on('load', () => {
			const polyFeatures = data.data.map((station: ParkingStation) => {
				return {
					type: 'Feature',
					geometry: {
						type: station.geometry.type,
						coordinates: station.geometry.coordinates
					},
					properties: {}
				};
			});

			_map.addSource('stations', {
				type: 'geojson',
				data: {
					type: 'FeatureCollection',
					features: polyFeatures
				}
			});
			_map.addLayer({
				id: 'stations',
				type: 'fill',
				source: 'stations',
				layout: {},
				paint: {
					'fill-color': '#088',
					'fill-opacity': 0.8
				}
			});

			const pointFeatures = data.data.map((station: ParkingStation) => {
				return {
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: polylabel(station.geometry.coordinates, 1.0)
					},
					properties: { name: station.name }
				};
			});

			_map.addSource('stationNames', {
				type: 'geojson',
				data: {
					type: 'FeatureCollection',
					features: pointFeatures
				}
			});
			_map.addLayer({
				id: 'stationNames',
				type: 'symbol',
				source: 'stationNames',
				layout: {
					// get the name from the source's "name" property
					'text-field': ['get', 'name'],
					'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
					'text-offset': [0, 1.25],
					'text-anchor': 'top'
				}
			});
		});
	}
</script>

<Map />
