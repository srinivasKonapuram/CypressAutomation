
import VerificationHelper from '../utils/VerificationHelper'

class CreateAddressAndValidate {
    static addressButton = "a[href*='addresses']";
    static newAddressButton = "a[href*='addresses/new']";
    static newAddressText = "div.container h2";

    static firstName = "input#address_first_name";
    static lastName = "input#address_last_name";
    static address1 = "input#address_street_address";
    static address2 = "input#address_secondary_address";
    static city = "input#address_city";
    static state = "select#address_state";
    static zipCode = "input#address_zip_code";
    static country = 'label.col-form-label.col-4.col-md-3';
    static dateOfBirth = "input#address_birthday";
    static color = "input#address_color";
    static age = "input#address_age";
    static website = "input#address_website";
    static picture = "input#address_picture";
    static phone = "input#address_phone";
    static intrest = 'label.col-form-label.col-3.col-md-2';
    static note = "textarea#address_note";
    static createNewAddressButton = '[data-disable-with="Create Address"]';

    static wholeTable = "table tbody tr";
    static showbutton = "td a";

    static sucessMessage = "div.alert.alert-notice";
    static firstName_to_validate = '[data-test="first_name"]';
    static lastName_to_validate = '[data-test="last_name"]';
    static address1_to_validate = '[data-test="street_address"]';
    static address2_to_validate = '[data-test="secondary_address"]';
    static city_to_validate = '[data-test="city"]';
    static state_to_validate = '[data-test="state"]';
    static zipCode_to_validate = '[data-test="zip_code"]';
    static country_to_validate = '[data-test="country"]';
    static dateOfBirth_to_validate = '[data-test="birthday"]';
    static color_to_validate = '[data-test="color"]';
    static age_to_validate = '[data-test="age"]';
    static website_to_validate = '[data-test="website"]';
    static phone_to_validate = '[data-test="phone"]';
    static intrest_to_validate = '.col-3.col-md-2 strong';
    static note_to_validate = '[data-test="note"]';

    static sign_out = '[data-test="sign-out"]';
    static sign_in = "div#clearance h2"



    navigateToAddressCreationPage() {
        cy.get(CreateAddressAndValidate.addressButton).click()
        cy.get(CreateAddressAndValidate.newAddressButton).click()
        VerificationHelper.verifyTextOnUI(CreateAddressAndValidate.newAddressText, "New Address")
    }
    fillTheAddressForm(firstName, lastName, address1, address2, city, state, zipCode, country, dateOfBirth, age, webSite, phoneNumber, intrest, note) {
        cy.wait(200)
        //cy.get(CreateAddressAndValidate.firstName).type(firstName)
        cy.typeTextIntoTheField(CreateAddressAndValidate.firstName,firstName)
        cy.get(CreateAddressAndValidate.lastName).type(lastName)
        cy.get(CreateAddressAndValidate.address1).type(address1)
        cy.get(CreateAddressAndValidate.address2).type(address2)
        cy.get(CreateAddressAndValidate.city).type(city)
        cy.get(CreateAddressAndValidate.state).select(state)
        cy.get(CreateAddressAndValidate.zipCode).type(zipCode)
        cy.get(CreateAddressAndValidate.country).each(($radio_button_elementreference, index) => {
            this.CheckTheDesierCheckBox(country, $radio_button_elementreference)
        })
        cy.get(CreateAddressAndValidate.dateOfBirth).invoke('attr', 'type', 'text').type(dateOfBirth)
        cy.get(CreateAddressAndValidate.color).invoke('val', '#ff0000').trigger('change')
        cy.get(CreateAddressAndValidate.age).type(age)
        cy.get(CreateAddressAndValidate.website).type(webSite)
        cy.get(CreateAddressAndValidate.picture).attachFile('image.png')
        cy.get(CreateAddressAndValidate.phone).type(phoneNumber)
        cy.get(CreateAddressAndValidate.intrest).each(($checkbox_button_elementreference, index) => {
            this.CheckTheDesierCheckBox(intrest, $checkbox_button_elementreference)
        })
        cy.get(CreateAddressAndValidate.note).type(note)
        cy.get(CreateAddressAndValidate.createNewAddressButton).click()
        VerificationHelper.verifyTextOnUI(CreateAddressAndValidate.sucessMessage, "Address was successfully created.")
        cy.screenshot()
    }

    CheckTheDesierCheckBox(nameToMactch, $el) {
        const labelName = $el.text()
        cy.log(labelName)
        if (labelName.includes(nameToMactch)) {
            cy.wrap($el).prev().check()
        }

    }


    navigateToTheValidateForm(firstName) {
        cy.get(CreateAddressAndValidate.addressButton).click()
        cy.get(CreateAddressAndValidate.wholeTable).contains(firstName).parent()
            .within(() => {
                cy.get(CreateAddressAndValidate.showbutton).eq(0).click()

            })
    }
    validateTheAddressForm(firstName, lastName, address1, address2, city, stateToValidate, zipCode, dateOfBirth, age, webSite, phoneNumber, intrest, note) {
        VerificationHelper.validateTheFormDetails(CreateAddressAndValidate.firstName_to_validate, firstName)
        VerificationHelper.validateTheFormDetails(CreateAddressAndValidate.lastName_to_validate, lastName)
        VerificationHelper.validateTheFormDetails(CreateAddressAndValidate.address1_to_validate, address1)
        VerificationHelper.validateTheFormDetails(CreateAddressAndValidate.address2_to_validate, address2)
        VerificationHelper.validateTheFormDetails(CreateAddressAndValidate.city_to_validate, city)
        VerificationHelper.validateTheFormDetails(CreateAddressAndValidate.state_to_validate, stateToValidate)
        VerificationHelper.validateTheFormDetails(CreateAddressAndValidate.zipCode_to_validate, zipCode)
        VerificationHelper.validateTheFormDetails(CreateAddressAndValidate.country_to_validate, "us")
        VerificationHelper.validateTheFormDetails(CreateAddressAndValidate.dateOfBirth_to_validate, dateOfBirth)
        cy.get(CreateAddressAndValidate.color_to_validate).should('have.css', 'background-color', 'rgb(255, 0, 0)')
        VerificationHelper.validateTheFormDetails(CreateAddressAndValidate.age_to_validate, age)
        VerificationHelper.validateTheFormDetails(CreateAddressAndValidate.website_to_validate, webSite)
        VerificationHelper.validateTheFormDetails(CreateAddressAndValidate.phone_to_validate, phoneNumber)
        cy.get(CreateAddressAndValidate.intrest_to_validate).each(($elementReferenceForIntrest, index) => {
            const labelNameForIntrest = $elementReferenceForIntrest.text()
            if (labelNameForIntrest.includes(intrest)) {
                cy.wrap($elementReferenceForIntrest).parents('p.row.no-gutters').within(($el2) => {
                    cy.wrap($el2).find('span.col.offset-1.offset-sm-0').should('contain', 'Yes')
                })
            }
        })
        VerificationHelper.validateTheFormDetails(CreateAddressAndValidate.note_to_validate, note)
        cy.screenshot()
    }

    doSignOut() {
        cy.get(CreateAddressAndValidate.sign_out).click()
        VerificationHelper.verifyTextOnUI(CreateAddressAndValidate.sign_in, "Sign in")
    }


}

const createAddressAndValidate = new CreateAddressAndValidate()
export default createAddressAndValidate;