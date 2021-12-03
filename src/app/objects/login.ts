import { Selector } from "testcafe";

export default class Login { 
    public container = Selector('.well-2');
    public emailField = this.container.find('#input-email');
    public passwordField = this.container.find('#input-password');
    public signInButton = this.container.find('.btn-primary');
}