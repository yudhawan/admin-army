import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken='pk.eyJ1IjoieXVkaGF3YW4iLCJhIjoiY2wxa2cxZ3h2MDBnNDNqangzaHFuNXpwNyJ9.-NB1Dw2GlDb11fnUD3ZQng'
function MapZone({long,lat}) {
  const [longitude, setLongitude] = useState(112.6108442);
  const [latitude, setLatitude] = useState(-7.9730079);
  const mapRef = useRef(null)
  useEffect(()=>{
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 10
    });
    // add marker
    const marker = new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
  },[])
  return (
    <div>
      <div className='w-96 h-96 rounded-lg' ref={mapRef} />
    </div>
  )
}
// mapbox://styles/mapbox/streets-v11
// mapbox://styles/yudhawan/cl1kgyiqz001914qktkm84tb8
export default MapZone