import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { isEmpty } from 'lodash';

mapboxgl.accessToken = 'pk.eyJ1IjoieW91bmVzYmVsaGl0IiwiYSI6ImNtMWdydW5hMDA2aGgybnNpaGQ4d2F6MHoifQ.QGddhNUPNa1HgXRnLsPlsg';

export const Map = ({ points }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);

    const startIcon = 'https://img.lovepik.com/element/45012/5318.png_860.png';
    const endIcon = 'https://lakewylieboatrental.com/wp-content/uploads/sites/6194/2023/01/Navionics.png?auto=compress%2Cformat&amp';

    const drawAllPoints = (coordinates) => {
        if (!map.current) return;

        // Remove existing line and source
        if (map.current.getLayer('line')) {
            map.current.removeLayer('line');
        }
        if (map.current.getSource('line')) {
            map.current.removeSource('line');
        }

        // Add new source and line layer
        map.current.addSource('line', {
            type: 'geojson',
            data: {
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    coordinates: coordinates,
                },
            },
        });

        map.current.addLayer({
            id: 'line',
            type: 'line',
            source: 'line',
            layout: {
                'line-join': 'round',
                'line-cap': 'round',
            },
            paint: {
                'line-color': '#888',
                'line-width': 6,
            },
        });

        // Add start and end markers
        new mapboxgl.Marker({ element: createCustomMarker(startIcon) })
            .setLngLat(coordinates[0])
            .addTo(map.current);

        new mapboxgl.Marker({ element: createCustomMarker(endIcon) })
            .setLngLat(coordinates[coordinates.length - 1])
            .addTo(map.current);

        // Add intermediate markers
        for (let i = 1; i < coordinates.length - 1; i++) {
            new mapboxgl.Marker()
                .setLngLat(coordinates[i])
                .addTo(map.current);
        }

        // Adjust map bounds to fit all points
        const bounds = new mapboxgl.LngLatBounds();
        coordinates.forEach(([lng, lat]) => {
            bounds.extend([lng, lat]);
        });
        map.current.fitBounds(bounds, {
            padding: 50,
            maxZoom: 15,
        });
    };

    const createCustomMarker = (iconUrl) => {
        const img = document.createElement('img');
        img.src = iconUrl;
        img.style.width = '30px';
        img.style.height = '30px';
        return img;
    };

    useEffect(() => {
        if (map.current) return; // Initialize map once

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-7.5324, 33.6169],
            zoom: 9,
        });

        // Wait for the style to fully load before adding layers
        map.current.on('styledata', () => {
            if (!isEmpty(points)) {
                drawAllPoints(points);
            }
        });
    }, []); // Empty dependency array to run only once

    useEffect(() => {
        if (!isEmpty(points) && map.current.isStyleLoaded()) {
            drawAllPoints(points);
        }
    }, [points]); // Trigger when points prop changes

    return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
};
