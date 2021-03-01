// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-file-upload';
import loginPage from '../pages/LoginPage'
var wholeTable = "table tbody tr";
var showbutton = "td a";
var addressButton = "a[href*='addresses']";

Cypress.Commands.add('loginInToTheApp', (username, password) => {
    loginPage.doLogin(username, password)
    loginPage.verifyUserName(username)
})

Cypress.Commands.add('logOutFromTheApp',()=>{
    loginPage.doLogOut()
})

Cypress.Commands.add('typeTextIntoTheField',(locator,textToType)=>{
    cy.get(locator).type(textToType)
})
Cypress.Commands.add('clickOnSpecifiedText',(personName,operationToPerform)=>{
    cy.get(addressButton).click()
    cy.get(wholeTable).contains(personName).parent()
        .within(() => {
            if (operationToPerform == 'Edit') {
                cy.get(showbutton).eq(1).click()
            } else if(operationToPerform == 'delete') {
                cy.get(showbutton).eq(2).click()
            }else{
                cy.get(showbutton).eq(0).click()
            }

        })
})
Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      // turn off original log
      options.log = false
      // create our own log with masked message
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      })
    }
  
    return originalFn(element, text, options)
  })
