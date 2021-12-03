import { Selector } from "testcafe";

export default class Login { 
    public cartButton = Selector('#button-add-cart-product > button');
    public inTheCartButton = Selector('#button-add-cart-product > div');
}