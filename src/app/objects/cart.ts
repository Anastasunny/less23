import { Selector } from "testcafe";

export default class Login { 
    public container = Selector('#simplecheckout_form_0 > div.simplecheckout');
    public itemInfo = this.container.find('div.simplecheckout-step')
    public deleteFromCart = this.itemInfo.find('div > div.col-sm-1.col-xs-2 > button')
}