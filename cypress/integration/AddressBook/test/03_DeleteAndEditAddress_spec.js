import addressEditAndDeletions from '../../../pages/DeleteAndEditAddressPage'
import createAddressAndValidate from '../../../pages/AddaddressAndValidatePage'
describe('Deleting and editing the address', () => {
    beforeEach('login', function () {
        cy.fixture('testData').then(function (testdata) {
            this.testdata = testdata;
        })
    })
    it('Show the address to Edit', function () {
        cy.loginInToTheApp(this.testdata.Email, this.testdata.password)
        cy.clickOnSpecifiedText(this.testdata.firstName,'Edit')
        addressEditAndDeletions.validateEdit('Editing Address')
    })
    it('Specific Address deletion from the applications', function () {
        cy.loginInToTheApp(this.testdata.Email, this.testdata.password)
        cy.clickOnSpecifiedText(this.testdata.firstName,'delete')
        addressEditAndDeletions.validateDelete('Address was successfully destroyed.')
    })
    afterEach(() => {
        cy.logOutFromTheApp()
    })

})