import React from "react";
import MapView, { Marker } from "react-native-maps";

const MapComponent = ({ items }) => {
  return (
    <MapView
      initialRegion={{
        latitude: items[0].lat,
        longitude: items[0].long,
        latitudeDelta: 0.005, // zoom scale
        longitudeDelta: 0.005, // zoom scale
      }}
      className="flex-1 -mt-10 z-0"
      mapType="mutedStandard"
    >
      <Marker
        coordinate={{
          latitude: items[0].lat,
          longitude: items[0].long,
        }}
        title={items[0].restaurantName}
        description={`${items[0].restaurantName} is a best restaurant!`}
        identifier="origin"
        pinColor="#00CCBB"
      />
    </MapView>
  );
};

export default MapComponent;
