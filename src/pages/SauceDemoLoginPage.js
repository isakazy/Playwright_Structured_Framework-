const { SauceDemoHomePage } = require("./SauceDemoHomePage");

exports.SauceDemoLoginPage = 
class SauceDemoLoginPage { // this line of code is important since it identifies that the class is exportable. whenever we need to use the code, we would only need to import the class. please look at the SauceDemoE2E.spec.js

    constructor(page){     //in the constractor of the class i am storing all the web elements
        this.page = page; // assigning the page in the constractor
        this.useNameInputField = "//input[@id='user-name']";  // locator for the username 
        this.passwordInputField = "//input[@id='password']"; //locator for the passwd 
        this.loginButton = "//input[@id='login-button']"; //locator for the login button 
    }


    // here i have the whole method to navigate to the web page 
    async gotoSauceDemoLoginPage(){
        await this.page.goto("https://saucedemo.com"); // the method is taking page instace form the constractor of the class 

    }

    // the method to perform login action 

    async loginToSauceDemo(username, password ){ // the method takes a username and a password 
        await this.page.locator(this.useNameInputField).fill(username); 
        await this.page.locator(this.passwordInputField).fill(password); 
        await this.page.locator(this.loginButton).click(); 
        
        const HomePage = new SauceDemoHomePage(this.page);  // POM chaining 
        return HomePage; 
    }

}