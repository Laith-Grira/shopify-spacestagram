import { useEffect, useState } from 'react';
import axios from 'axios';
import NasaPicture from './NasaPicture';
import './NasaPicturesGrid.scss';


const NasaPicturesGrid = () => {

    // Grouping the API data insude of an array of objects.
    let [nasaPicturesData, setNasaPicturesData] = useState([]);

    //Varaible for the number of pictures to see, deafult is 5
    let [picturesCount, setPicturesCount] = useState(5);

    // This key should be inside an .env file, but it's exposed due to the free hosting website used
    const REACT_APP_NASA_KEY = 'bOmu8hsTnHmfnN7SZngd1e12cQUBvpooO9FdYg5U';

    // API endpoint
    const URL = `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_NASA_KEY}&count=${picturesCount}`;

    // URL variable from the nasa api
    let [nasaUrl, setNasaUrl] = useState(URL);

    // React hook to fetch the data
    useEffect(() => {
        axios.get(nasaUrl)
            .then(res => setNasaPicturesData(res.data))
            .catch(err => console.error(err));
    }, [nasaUrl]);

    // update the counter for the images
    const updateUrlCount = () => {
        setNasaUrl(URL);
    }

    // update the variable holding the pictures count
    const updatePicturesCount = event => {
        const newValue = event.target.value;
        if (newValue>=1 && newValue<=100) {
            setPicturesCount(newValue);
        }
    }

    return ( 
        <div>
            <div className="count-input-container">
                <span id='counter-title'><b>Choose the number of pictures:</b> (From 1 to 100) </span>
                <input type="number" id="count-input-value" min="1" max="100" 
                        className="form-control"
                        placeholder={picturesCount} 
                        value={picturesCount} 
                        onChange={event => updatePicturesCount(event)} />
                <button type="button" className="btn btn-success" onClick={updateUrlCount}>Search</button>
            </div>
            <div className="pictures-grid">
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
 
export default NasaPicturesGrid;