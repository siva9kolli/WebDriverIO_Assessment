class ProductsPage{

    get cartBox(){
        return $(".shopping_cart_link");
    }

    async addItemsToCart(item1, item2){
        const firstItem = $("//div[text()='"+item1+"']/../../following-sibling::div/descendant::button");
        const lastItem = $("//div[text()='"+item2+"']/../../following-sibling::div/descendant::button");

       await firstItem.click();
       await lastItem.click();
    }

    async openCart(){
        await this.cartBox.click();
    }

}

module.exports = new ProductsPage();