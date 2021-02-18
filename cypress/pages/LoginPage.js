
import VerificationHelper from '../utils/VerificationHelper'
class LoginPage {
    static userEmail = "[data-test=email]";
    static password = "#session_password";
    static submitButton = ".btn.btn-primary";
    static logedInUser = "span.navbar-text";

    doLogin(userName, password) {
        cy.visit(Cypress.env('addressBookUrl'))
        cy.get(LoginPage.userEmail).type(userName)
        cy.get(LoginPage.password).type(password)
        cy.get(LoginPage.submitButton).click()
    }
    verifyUserName(logedInUserName) {
        VerificationHelper.verifyTextOnUI(LoginPage.logedInUser, logedInUserName)
    }
}

const loginPage = new LoginPage()
export default loginPage;
