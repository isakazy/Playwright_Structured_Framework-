exports.SauceDemoOverviewPage = class SauceDemoOverviewPage{

    constructor(page){
        this.page = page; 
        this.ProductInOverview = "//div[@class='cart_item']"; 
        this.TotalPrice = "//div[@class='summary_total_label']"; 
        this.FinishButton = "//button[@id='finish']"; 
        this.CancelButton = "//button[@id='cancel']"; 
        this.ThankYouText = "//h2[.='Thank you for your order!']"; 
    }


    async ClickFinish(){
            await this.page.locator(this.FinishButton).click(); 
    }

} 