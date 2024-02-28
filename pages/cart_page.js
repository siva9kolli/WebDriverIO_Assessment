class CartPage{

    get cartItems(){
       return $$(".inventory_item_name");
    }

    get checkoutButton(){
        return $("#checkout");
    }

    async checkout(){
        await this.checkoutButton.click();
    }

    async getSingleItem(){
        let productName = await this.cartItems.getText();
        await console.log("productName :: " + productName)
    }

    async getListofProducts(){
        var itemsList = []
        //await this.cartItems.length
        for(let i=0; i<this.cartItems.length ; i++){
                console.log(await this.cartItems[i].getText());
                itemsList = itemsList.push(await this.cartItems[i].getText());
        }
        await console.log("itemsList :: " + itemsList);
        return itemsList;
    }
}
module.exports = new CartPage();