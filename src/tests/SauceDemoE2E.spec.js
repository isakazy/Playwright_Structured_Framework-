
import { SauceDemoLoginPage } from "../pages/SauceDemoLoginPage"; // importing SauceDemoLoginPage class in order to have an access to the methods and locators in the class 
import {test, expect} from "@playwright/test"

test("login to saucedemo following POM", async ({page})=>{
// in order to have an access to the methods and variable of the SauceDemoLoginPage, i need to create an Object of the class 
const login = new SauceDemoLoginPage(page); // this line of code creates an Object of the SauceDemoLoginPage 
await login.gotoSauceDemoLoginPage();  // navigate to saucedemo
 const HomePage = await login.loginToSauceDemo("standard_user", "secret_sauce"); // login to suacedemo 

let expectedUrl = "https://www.saucedemo.com/inventory.html"; 

await expect(page).toHaveURL(expectedUrl);  // verify user logged in 

await HomePage.AddTshirt(); 
expect(page.locator(HomePage.RemoveBackPach).isVisible()); 
expect(page.locator(HomePage.OneInCart).isVisible()); 

const CartPage = await HomePage.gotoCart(); 
expect(page).toHaveURL("https://www.saucedemo.com/cart.html"); 

expect(page.locator(CartPage.ItemIntheCart).isVisible());

const PersonalInfoPage = await CartPage.ClickOnCheckOutButton(); 
await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html"); 

const overView = await PersonalInfoPage.ProvidePersonalInformation("Isakazy", "Amanbaev", "60656"); // this line of code fills up all the personal information input fields 

expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html"); 

expect(page.locator(overView.FinishButton).isVisible()); 
expect(page.locator(overView.TotalPrice).isVisible()); 

await overView.ClickFinish(); 

expect(page.locator(overView.ThankYouText).isVisible()); 

page.close(); 







}); 