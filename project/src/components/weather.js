import useState from 'react'

const [lat, setLat] = useState([]);
const [long, setLong] = useState([]);
export default async function Weather() {
  await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
}