'use client';

import React, { useRef, useEffect, useState } from 'react';

const NIDO_LOCATION = { lat: -12.0953743, lng: -77.0624951 };

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const GoogleMapsComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadGoogleMapsScript = async () => {
      if (typeof window === 'undefined') return;

      if (!GOOGLE_MAPS_API_KEY) {
        console.error('Google Maps API key no configurada');
        return;
      }

      if (window.google && window.google.maps) {
        setIsLoaded(true);
        return;
      }

      const existing = document.querySelector<HTMLScriptElement>('script[data-google-maps]');
      if (existing) {
        const windowWithGoogle = window as Window & { google?: { maps: typeof google.maps } };
        if (windowWithGoogle.google && windowWithGoogle.google.maps) {
          setIsLoaded(true);
        } else {
          existing.addEventListener('load', () => setIsLoaded(true));
          existing.addEventListener('error', () => {
            console.error('Error cargando Google Maps');
          });
        }
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.setAttribute('data-google-maps', 'true');
      script.onload = () => setIsLoaded(true);
      script.onerror = () => {
        console.error('Error cargando Google Maps');
      };
      document.head.appendChild(script);
    };

    loadGoogleMapsScript();
  }, []);

  useEffect(() => {
    if (!isLoaded || !mapRef.current || mapInstanceRef.current) return;

    try {
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: NIDO_LOCATION,
        zoom: 16,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: true,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
        ],
      });

      const marker = new window.google.maps.Marker({
        position: NIDO_LOCATION,
        map: mapInstance,
        title: 'Nido El Mundo de GRU',
        animation: window.google.maps.Animation.DROP,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 8px; max-width: 200px;">
            <h3 style="margin: 0 0 5px 0; color: #333; font-size: 16px;">Nido El Mundo de GRU</h3>
            <p style="margin: 0; color: #666; font-size: 14px;">Jirón Trujillo 370, Magdalena del Mar</p>
          </div>
        `,
      });

      marker.addListener('click', () => {
        infoWindow.open(mapInstance, marker);
      });

      mapInstanceRef.current = mapInstance;
      markerRef.current = marker;
      infoWindowRef.current = infoWindow;

    } catch (err) {
      console.error('Error inicializando mapa:', err);
    }

    return () => {
      if (markerRef.current) {
        try {
          window.google.maps.event.clearInstanceListeners(markerRef.current);
          markerRef.current.setMap(null);
        } catch (e) {
          console.error('Error limpiando marcador:', e);
        }
        markerRef.current = null;
      }

      if (infoWindowRef.current) {
        infoWindowRef.current.close();
        infoWindowRef.current = null;
      }

      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
    };
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <div className="w-full h-80 bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500 mx-auto mb-2"></div>
          <p className="text-gray-600 text-sm">Cargando mapa...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export default GoogleMapsComponent;