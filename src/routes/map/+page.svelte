<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import type { Map as MaplibreMap } from 'maplibre-gl';
	import maplibregl from 'maplibre-gl';
	import { map } from '$lib/stores/map';
	import type { PageData } from './$types';
	import type { ParkingStation } from '$lib/types/ParkingStation';
	import polylabel from 'polylabel';

	export let data: PageData;

	let _map: MaplibreMap;
	map.subscribe((value) => (_map = value));

	$: if (_map && data?.data.length > 0) {
		_map.on('load', () => {
			const polyFeatures = data.data.map((station: ParkingStation) => {
				return {
					type: 'Feature',
					geometry: {
						type: station.location.type,
						coordinates: station.location.coordinates
					},
					properties: { name: station.name }
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
				id: 'stations-layer',
				type: 'fill',
				source: 'stations',
				layout: {},
				paint: {
					'fill-color': 'rgba(200, 100, 240, 0.4)',
					'fill-outline-color': 'rgba(200, 100, 240, 1)'
				}
			});

			const customMarkers = {
				type: 'FeatureCollection',
				features: data.data.map((station: ParkingStation) => {
					return {
						type: 'Feature',
						geometry: {
							type: 'Point',
							coordinates: polylabel(station.location.coordinates, 1.0)
						},
						properties: { name: station.name, iconSize: [25, 25] }
					};
				})
			};

			// add markers to map
			customMarkers.features.forEach((marker: any) => {
				// create a DOM element for the marker
				const el = document.createElement('div');
				el.className = 'marker';
				el.style.backgroundImage = `url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="24" height="24" viewBox="0 0 24 24"%3E%3Cpath fill="currentColor" d="M6 21V3h7q2.5 0 4.25 1.75T19 9q0 2.5-1.75 4.25T13 15h-3v6H6Zm4-10h3.2q.825 0 1.413-.588T15.2 9q0-.825-.587-1.413T13.2 7H10v4Z"%2F%3E%3C%2Fsvg%3E')`;
				el.style.width = `${marker.properties.iconSize[0]}px`;
				el.style.height = `${marker.properties.iconSize[1]}px`;

				el.addEventListener('click', () => {
					window.alert(marker.properties.name);
				});

				// add marker to map
				new maplibregl.Marker({ element: el }).setLngLat(marker.geometry.coordinates).addTo(_map);
			});

			// When a click event occurs on a feature in the stations layer, open popup
			_map.on('click', 'stations-layer', (e) => {
				new maplibregl.Popup()
					.setLngLat(e.lngLat)
					.setText(e.features ? e.features[0].properties.name : '<missing>')
					.addTo(_map);
			});

			// Change the cursor to a pointer when the mouse is over the layer.
			_map.on('mouseenter', 'stations-layer', () => {
				_map.getCanvas().style.cursor = 'pointer';
			});

			// Change it back to a pointer when it leaves.
			_map.on('mouseleave', 'stations-layer', () => {
				_map.getCanvas().style.cursor = '';
			});
		});
	}
</script>

<Map />
