class CheckOutInfoPage{

    get firstNameInput(){
        return $("#first-name");
    }

    get lastNameInput(){
        return $("#last-name");
    }

    get postalCodeInput(){
        return $("[data-test='postalCode']");
    }

    get continueButton(){
        return $("[data-test='continue']");
    }

    async fillInformationAndSubmit(firstName, lastName, zipCode){
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.postalCodeInput.setValue(zipCode);
        await this.continueButton.click();
    }
}

module.exports = new CheckOutInfoPage();