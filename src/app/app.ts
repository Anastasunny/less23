import Login from './objects/login';
import NavBar from './objects/navBar';
import Categories from './objects/categories';
import ItemCard from './objects/itemCard';
import ItemPage from './objects/itemPage';
import Cart from './objects/cart';

class App {
    public login = new Login();
    public navBar = new NavBar();
    public categories = new Categories();
    public itemCard = new ItemCard();
    public itemPage = new ItemPage();
    public cart = new Cart();
}

export default new App();