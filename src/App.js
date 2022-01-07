import NasaPicturesGrid from './components/NasaPicturesGrid';
import './App.scss';


function App() {

  return (
    <div>
      <header>
        <img src="https://www.smartenergydecisions.com/upload/images/company_images/shopify.png" alt="shopify-logo" />
        <h3>Shopify Summer 2022 Coding Challange</h3>
      </header>
      <div className="App mt-3">
        <span id='main-page-title'>Make Commerce Better for Everyone</span>
        <div className='page-description'>
          <p>Welcome to the Shopify's new mission: <b>Make Commerce Better for Everyone.</b> This mission aim to include the whole universe, sharing images 
                              from one of NASA's image APIs. You can set the count of the images you want to see (Default is 5) and you can watch some randomly-selected images
                              by the NASA server. Tou will find a title, desription, and date of capture for the images, and you can also like or unlike some of these images. 
                              So let's get started!!</p>
        </div>
        <NasaPicturesGrid />
      </div>
    </div>
  );
}

export default App;
