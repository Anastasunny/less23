import { Selector } from 'testcafe';
import app from '../app/app'

fixture(`Online shop`)
    .page(`http://www.amd.by/`)
    .beforeEach( async t => {
        await t
            .maximizeWindow()
            .click(app.navBar.logInButton)
            .typeText(app.login.emailField, 'nastyamalets738@gmail.com')
            .typeText(app.login.passwordField, '456456Aa')
            .click(app.login.signInButton)
            .navigateTo('https://www.amd.by/')
    })
    .afterEach( async t => {
        await t
        .click(app.navBar.logOutButton)
        .expect((app.navBar.logInButton).visible).ok()
    })
    
    
test('e2e - add to cart', async t => {
        await t
            .expect(await app.navBar.fullName.textContent).eql('Malets A.S.')
            .click(await app.categories.dicscountCategory)
            .click(app.itemCard.addToCart)       
            .click(app.itemPage.cartButton) 
            .expect((app.itemPage.inTheCartButton).visible).ok()
            .expect((app.navBar.cartAmount).visible).ok()
});


test('e2e delete from cart', async t => {
    await t
        .navigateTo('https://www.amd.by/simplecheckout/')
        .expect((app.cart.itemInfo).visible).ok()       
        .click(app.cart.deleteFromCart) 
        .expect((app.cart.itemInfo).visible).notOk()
});

