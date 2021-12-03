import { Selector } from "testcafe";

export default class Login { 
    public container = Selector('.header-sticky');
    public rightNavbar = this.container('.row-right-header-top-link')
    public leftNavbar = this.container('.row-left-header-top-link')
    public fullName = this.rightNavbar.find('#dropdownMenuHeader')
    public logOutButton = this.rightNavbar.find('div.container > div > div.col-md-5.hidden-sm.hidden-xs.right-nav > div.header-top-auth-block > a')
    public logInButton = this.rightNavbar.find('div.header-top-auth-block > a:nth-child(2)')
    public cartAmount = this.container('header > div > div > div.col-md-5.hidden-sm.hidden-xs.time-cart > div.col-md-4.header-search-button-block > a:nth-child(3) > a > div > div')
    public cart = this.container('body > div.header-sticky > header > div > div > div.col-md-5.hidden-sm.hidden-xs.time-cart > div.col-md-4.header-search-button-block > a:nth-child(3) > div')
}