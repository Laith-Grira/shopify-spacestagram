import NasaPicturesGrid from './components/NasaPicturesGrid/NasaPicturesGrid';
import Header from './components/Header/Header';
import './App.scss';


const App = () => {

  return (
    <div>
      <Header />
      <div className="App mt-3">
        <span id='main-page-title'>Make Commerce Better for Everyone</span>
        <div className='page-description'>
          <p>Welcome to the Shopify's new mission: <b>Make Commerce Better for Everyone.</b> This mission aim to include the whole universe, sharing images 
            from one of NASA's image APIs. You can set the count of the images you want to see (Default is 5) and you can watch some randomly-selected images
            by the NASA API. You will also find for each image: a title, description, and date of capture, and you can also like or unlike some of these images. 
            So let's get started!!</p>
        </div>
        <NasaPicturesGrid />
      </div>
    </div>
  );
}

export default App;
