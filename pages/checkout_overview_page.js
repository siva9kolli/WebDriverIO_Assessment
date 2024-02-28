class CheckoverViewPage{

    get itemsList(){
       return $$(".inventory_item_name");
    }

    get finishButton(){
        return $("[name='finish']");
    }

    async clickOnFinish(){
        await this.finishButton.click();
    }

    async getListofItemsInTheCartOverview(){
        var productsList = []
        //await this.cartItems.length
        for(let i=0; i<this.itemsList.length ; i++){
                console.log(await this.itemsList[i].getText());
                productsList = productsList.push(await this.itemsList[i].getText());
        }
        await console.log("productsList :: " + productsList);
        return productsList;
    }

}

module.exports = new CheckoverViewPage();