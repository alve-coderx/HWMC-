import { Loader } from "@googlemaps/js-api-loader";

const initializeMap = async (mapRef, mapConfig) => {
  await new Loader({
    apiKey: mapConfig.apiKey,
  }).load();

  const google = window.google;
  const map = new google.maps.Map(mapRef, mapConfig.config(google));

  return {
    map: map,
    google: google,
  };
};

export { initializeMap };
