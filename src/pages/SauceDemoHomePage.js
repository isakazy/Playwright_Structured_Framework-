const { SauceDemoCartPage } = require("./SauceDemoCartPage");

exports.SauceDemoHomePage = class SauceDemoHomePage {
    
    

    constructor(page){
        this.page = page; 
        this.backPack = "//button[@id='add-to-cart-sauce-labs-backpack']";
        this.bikeLight = "//button[@id='add-to-cart-sauce-labs-bike-light']"; 
        this.Tshirt = "//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']"; 
        this.jackat = "//button[@id='add-to-cart-sauce-labs-fleece-jacket']"; 
        this.onesie = "//button[@id='add-to-cart-sauce-labs-onesie']"; 
        this.shirt = "//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']"; 
        this.RemoveBackPach = "//button[@id='remove-sauce-labs-backpack']"; 
        this.OneInCart = "//a[@class='shopping_cart_link']/span[.='1']";
        this.cartButton = "//a[@class='shopping_cart_link']";

    }
  
    // the following method is to add Tshurt to Cart

    async AddTshirt(){
        await this.page.locator(this.Tshirt).click(); 
    }

    // method to click on cart 

async gotoCart(){
    await this.page.locator(this.cartButton).click(); 
    const cartPage = new SauceDemoCartPage(this.page); // POM Chainig 
    return cartPage; 
}
}
