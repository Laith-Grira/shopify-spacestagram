import { useEffect, useState } from 'react';
import NasaPicture from './components/NasaPicture';
import './App.css';
import axios from 'axios';


function App() {

  //Varaible for the number of pictures to see
  let [picturesCount, setPicturesCount] = useState(5);

  // URL from the nasa api
  let [nasaUrl, setNasaUrl] = useState(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&count=${picturesCount}`);

  // Grouping the API data insude of an array of objects.
  let [nasaPicturesData, setNasaPicturesData] = useState([]);

  useEffect(() => {
    axios.get(nasaUrl)
         .then(res => setNasaPicturesData(res.data))
         .catch(err => console.error(err));
  }, [nasaUrl]);


  return (
    <div className="App">
      <h1>Starting project</h1>
      <div className="pictures-array">
            {
                
                nasaPicturesData.map((data,key) => (
                    <NasaPicture
                        key={key}
                        title={data.title}
                        date={data.date}
                        description={data.explanation}
                        image={data.url}
                    />
                ))
            }
        </div>
    </div>
  );
}

export default App;
