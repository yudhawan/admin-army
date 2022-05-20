import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

let MAPBOX_TOKEN = "pk.eyJ1IjoieXVkaGF3YW4iLCJhIjoiY2wxa2cxZ3h2MDBnNDNqangzaHFuNXpwNyJ9.-NB1Dw2GlDb11fnUD3ZQng"
mapboxgl.workerClass=MapboxWorker
mapboxgl.accessToken=MAPBOX_TOKEN
function MapZone({long,lat,fullmap}) {
  const [maps,setmaps]=useState(null)
  const mapRef = useRef(null)
  const[viewport, setViewport] = useState({
    width: "100%",
    height: "400px",
    latitude: lat,
    longitude: long,
    zoom: 5
  });
  useEffect(()=>{
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [long, lat],
      zoom: 12
    })
    if(!mapboxgl.supported()){
      console.log('Your browser does not support Mapbox GL')
    }
    map.on('load', () => {
      map.resize()
      setmaps(map)
    })
    // add marker
    const marker = new mapboxgl.Marker().setLngLat([long, lat]).addTo(map);
  },[long,lat])
  return <div className={`w-[35vw] h-[80vh] rounded-lg`} ref={mapRef} />
  
  
}
// mapbox://styles/mapbox/streets-v11
// mapbox://styles/yudhawan/cl1kgyiqz001914qktkm84tb8
export default MapZone