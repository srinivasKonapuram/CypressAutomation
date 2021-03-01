
import createAddressAndValidate from '../../../pages/AddaddressAndValidatePage'
describe('adding new address and validating the added address', () => {

    beforeEach('loding test data', function () {
        cy.fixture('testData').then(function (testdata) {
            this.testdata = testdata;
        })
    })


    it('Add New address in the application', function () {
        cy.loginInToTheApp(this.testdata.Email, this.testdata.password)
        createAddressAndValidate.navigateToAddressCreationPage()
        createAddressAndValidate.fillTheAddressForm(this.testdata.firstName, this.testdata.lastName, this.testdata.address1, this.testdata.address2, this.testdata.city, this.testdata.state, this.testdata.zipCode, this.testdata.country, this.testdata.dateOfBirth, this.testdata.age, this.testdata.webSite, this.testdata.phoneNumber, this.testdata.intrest, this.testdata.note)

    })

    it('Validate the added address', function () {
        cy.loginInToTheApp(this.testdata.Email, this.testdata.password)
        cy.clickOnSpecifiedText(this.testdata.firstName,'show')
        createAddressAndValidate.validateTheAddressForm(this.testdata.firstName, this.testdata.lastName, this.testdata.address1, this.testdata.address2, this.testdata.city, this.testdata.stateToValidate, this.testdata.zipCode, this.testdata.dateOfBirth, this.testdata.age, this.testdata.webSite, this.testdata.phoneNumber, this.testdata.intrest, this.testdata.note)

    })
    afterEach('Sign out', () => {
      cy.logOutFromTheApp()
    })

})