import './App.css'

function App() {
 const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D',
  params: {
    units: 'auto',
    lang: 'en'
  },
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

  return (
    <>
      
    </>
  )
}

export default App
