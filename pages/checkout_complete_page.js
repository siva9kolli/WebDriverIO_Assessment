class CheckOutCompletePage{

    get thanksForOrder(){
        return $(".complete-header");
    }

    async getThanksForOrderText(){

        let message = this.thanksForOrder.getText();
        return message;
    }

}
module.exports = new CheckOutCompletePage();