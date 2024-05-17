import "../../css/map.css";

const CONFIGURATION = {
  locations: [
    {
      title: "9710 De Soto Ave",
      address1: "9710 De Soto Ave",
      address2: "Chatsworth, CA 91311, USA",
      coords: { lat: 34.24669444441973, lng: -118.58714787287751 },
      placeId: "ChIJyeo_l5icwoAROHRSUbxoZaM",
    },
    {
      title: "Kawasaki of Simi Valley",
      address1: "4821 E Los Angeles Ave",
      address2: "Simi Valley, CA 93063, USA",
      coords: { lat: 34.27264187632843, lng: -118.69972641165674 },
      placeId: "ChIJR0NaAUko6IARH0gnRu262q8",
    },
  ],
  mapOptions: {
    center: { lat: 38.0, lng: -100.0 },
    fullscreenControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    zoom: 4,
    zoomControl: true,
    maxZoom: 17,
    mapId: "",
  },
  mapsApiKey: "AIzaSyDphfdOKsm46dwC-27-kII6Qdvf8IMYOHw",
  capabilities: {
    input: true,
    autocomplete: true,
    directions: true,
    distanceMatrix: true,
    details: true,
    actions: false,
  },
};
document.addEventListener("DOMContentLoaded", async () => {
  await customElements.whenDefined("gmpx-store-locator");
  const locator = document.querySelector("gmpx-store-locator");
  locator.configureFromQuickBuilder(CONFIGURATION);
});

const maps = () => {
  return (
    <div className="mp-container">
      <script type="module"> 
        document.addEventListener("DOMContentLoaded", async ()=> {
        await customElements.whenDefined("gmpx-store-locator")
        const locator = document.querySelector("gmpx-store-locator");
        locator.configureFromQuickBuilder(CONFIGURATION);
        });
      </script>
      <script
        type="module"
        src="https://unpkg.com/@googlemaps/extended-component-library@0.6"
      ></script>
      <gmpx-api-loader
        key="AIzaSyDphfdOKsm46dwC-27-kII6Qdvf8IMYOHw"
        solution-channel="GMP_QB_locatorplus_v10_cABCDE"
      ></gmpx-api-loader>
      <gmpx-store-locator map-id="DEMO_MAP_ID"></gmpx-store-locator>
    </div>
  );
};
