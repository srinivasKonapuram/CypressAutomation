

class VerificationHelper {
  static  verifyTextOnUI(elementToLocate, logedInUserName) {
        cy.get(elementToLocate).should('have.text', logedInUserName)
    }
  static  validateTheFormDetails(elementToLocate, textToMatch) {
        cy.get(elementToLocate).should('contain', textToMatch)
    }
}
export default VerificationHelper;