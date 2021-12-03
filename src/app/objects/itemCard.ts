import { Selector } from "testcafe";

export default class Login { 
    public container = Selector('#content > div.row.products-list > div:nth-child(4) > div > div.row.product-card-up.product-cart-height-485');
    public addToCart = this.container.find('#product-card-image')
}