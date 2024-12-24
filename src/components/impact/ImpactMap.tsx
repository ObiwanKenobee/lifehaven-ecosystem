import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ImpactMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState("");
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  const initializeMap = (accessToken: string) => {
    if (!mapContainer.current || isMapInitialized) return;

    try {
      // Initialize map
      mapboxgl.accessToken = accessToken;
      
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/dark-v11",
        center: [0, 20],
        zoom: 2,
        projection: "globe",
      });

      // Add navigation controls
      map.addControl(new mapboxgl.NavigationControl(), "top-right");

      mapInstance.current = map;
      setIsMapInitialized(true);

      // Cleanup function will be handled by the useEffect cleanup
    } catch (error) {
      console.error("Error initializing map:", error);
    }
  };

  useEffect(() => {
    // Cleanup function
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
        setIsMapInitialized(false);
      }
    };
  }, []);

  if (!isMapInitialized) {
    return (
      <div className="p-4 space-y-4">
        <div className="text-sm text-muted-foreground">
          Please enter your Mapbox public token to initialize the map:
        </div>
        <div className="flex gap-2">
          <Input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Enter Mapbox public token"
            className="flex-1"
          />
          <Button onClick={() => initializeMap(token)}>Initialize Map</Button>
        </div>
        <div className="text-xs text-muted-foreground">
          You can get your public token from{" "}
          <a
            href="https://mapbox.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sage-500 hover:underline"
          >
            Mapbox.com
          </a>
        </div>
      </div>
    );
  }

  return <div ref={mapContainer} className="w-full h-full" />;
}