declare namespace google.maps {
  class Map {
    constructor(element: HTMLElement, options?: MapOptions);
  }

  interface MapOptions {
    center?: LatLngLiteral;
    zoom?: number;
    mapTypeControl?: boolean;
    streetViewControl?: boolean;
    fullscreenControl?: boolean;
    zoomControl?: boolean;
    styles?: MapTypeStyle[];
  }

  interface MapTypeStyle {
    featureType?: string;
    elementType?: string;
    stylers?: { [key: string]: string | boolean }[];
  }

  class Marker {
    constructor(options?: MarkerOptions);
    addListener(eventName: string, callback: () => void): void;
    setMap(map: Map | null): void;
  }

  interface MarkerOptions {
    position?: LatLngLiteral;
    map?: Map;
    title?: string;
    animation?: number;
  }

  class InfoWindow {
    constructor(options?: InfoWindowOptions);
    open(map?: Map, anchor?: Marker): void;
    close(): void;
  }

  interface InfoWindowOptions {
    content?: string;
  }

  interface LatLngLiteral {
    lat: number;
    lng: number;
  }

  namespace Animation {
    const DROP: number;
  }

  namespace event {
    function clearInstanceListeners(instance: Marker | InfoWindow): void;
  }
}

declare global {
  interface Window {
    google: {
      maps: typeof google.maps;
    };
  }
}
