import ShopifyLogo from '../../assets/shopify-text-log.png';
import './Header.scss';

const Header = () => {
    return ( 
        <header>
            <img src={ShopifyLogo} alt="shopify-logo" />
            <h3>Shopify Summer 2022 Coding Challange</h3>
        </header>
     );
}
 
export default Header;