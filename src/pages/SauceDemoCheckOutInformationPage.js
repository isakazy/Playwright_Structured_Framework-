const { SauceDemoOverviewPage } = require("./SauceDemoOverViewPage");

exports.SauceDemoCheckOutInformationPage = class SauceDemoCheckOutInformationPage{

    constructor(page){
        this.page = page; 
        this.FirstName = "//input[@id='first-name']"; 
        this.LastName = "//input[@id='last-name']"; 
        this.Postalcode = "//input[@id='postal-code']"; 
        this.continueButton = "//input[@id='continue']"; 
        this.CancelButton = "//button[@id='cancel']"; 

    }

    // method to provide all personal information 

    async ProvidePersonalInformation(FirstName, LastName, PostalCode){
        await this.page.locator(this.FirstName).fill(FirstName); 
        await this.page.locator(this.LastName).fill(LastName); 
        await this.page.locator(this.Postalcode).fill(PostalCode);

        // clickc on continue button 
        await this.page.locator(this.continueButton).click(); 
        const overView = new SauceDemoOverviewPage(this.page); 
        return overView; 
    }


}