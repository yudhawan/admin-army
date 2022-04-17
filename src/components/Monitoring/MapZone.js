import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
let MAPBOX_TOKEN = "pk.eyJ1IjoieXVkaGF3YW4iLCJhIjoiY2wxa2cxZ3h2MDBnNDNqangzaHFuNXpwNyJ9.-NB1Dw2GlDb11fnUD3ZQng"
mapboxgl.accessToken=MAPBOX_TOKEN
function MapZone({long,lat,fullmap}) {
  const [maps,setmaps]=useState(null)
  const [latitude, setLatitude] = useState(lat);
  const [longitude, setLongitude] = useState(long);
  const mapRef = useRef(null)
  useEffect(()=>{
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/yudhawan/cl1lswt4t005614o985bzh2ug',
      center: [longitude, latitude],
      zoom: 12
    });
    map.on('load', () => {
      map.resize()
      setmaps(map)
    })
    // add marker
    const marker = new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
    // fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?types=locality&types=place&access_token=${MAPBOX_TOKEN}`)
    // .then(res=>res.json())
    // .then(data=> console.log(data))
  },[])
  return <div className={`${fullmap?'w-[70vw] h-[80vh]':'w-96 h-96'} rounded-lg`} ref={mapRef} />
    
  
}
// mapbox://styles/mapbox/streets-v11
// mapbox://styles/yudhawan/cl1kgyiqz001914qktkm84tb8
export default MapZone