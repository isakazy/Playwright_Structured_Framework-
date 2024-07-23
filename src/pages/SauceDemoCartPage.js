const { SauceDemoCheckOutInformationPage } = require("./SauceDemoCheckOutInformationPage");

exports.SauceDemoCartPage = class SauceDemoCartPage{

    constructor(page){
        this.page = page; 
        this.ItemIntheCart = "//div[@class='cart_item']"; 
        this.CheckOutButton = "//button[@id='checkout']"; 
        this.RemoveButton = "//button[@id='remove-sauce-labs-backpack']";
        this.ContinueShoppingButton ="//button[@id='continue-shopping']"; 
    }


    //click on checkout Button 

    async ClickOnCheckOutButton(){
      await this.page.locator(this.CheckOutButton).click(); 
      const PersonalInfoPage = new SauceDemoCheckOutInformationPage(this.page); 
      return PersonalInfoPage; 

    }


    
}