import loginPage from '../../../pages/LoginPage'

describe('launching the address Book', () => {
    beforeEach('loading test data', () => {
        cy.fixture('testData').then(function (testdata) {
            this.testdata = testdata;
        })
    })

    it('Login into the application', function () {
        cy.loginInToTheApp(this.testdata.Email, this.testdata.password)
    })
})