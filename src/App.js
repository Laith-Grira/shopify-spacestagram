import { useState } from 'react';
import NasaPicture from './components/NasaPicture';
import './App.css';


function App() {

  // Mock data
  const mockData = [
      {
        title: "Picture 1",
        date: "25-02-2021",
        description: "This is the first picture",
        image: "a-link-for-picture-com",
      },
      {
        title: "Picture 2",
        date: "20-02-2017",
        description: "This is the second picture",
        image: "a-link-for-picture-com",
      },
      {
        title: "Picture 3",
        date: "29-02-2020",
        description: "This is the third picture",
        image: "a-link-for-picture-com",
      }
    ];
  
  // Grouping the API data insude of an array of objects
  const [nasaPicturesData, setNasaPicturesData] = useState(mockData);


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
                        description={data.description}
                        image={data.image}
                    />
                ))
            }
        </div>
    </div>
  );
}

export default App;
