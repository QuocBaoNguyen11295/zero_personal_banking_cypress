declare namespace Cypress{
    /**
     * @param username Valid User login
     * @param password Valid User Password 
     */
    interface Chainable{
        loadPage(): Chainable<Element>,
        closePage(): Chainable<Element>,
        clickOnFeedbackPage(): Chainable<Element>,
        clickOnOnlineBankingPage(): Chainable<Element>,
        loginPage(username:string, password:string): Chainable<Element>
    }
}


Cypress.Commands.add('loadPage',()=>{
    cy.visit('http://zero.webappsecurity.com/index.html')
})

Cypress.Commands.add('closePage',()=>{
    cy.clearCookies()
    cy.clearLocalStorage()
})

Cypress.Commands.add('clickOnFeedbackPage',()=>{
    cy.get('#feedback').click()
})

Cypress.Commands.add('clickOnOnlineBankingPage',()=>{
    cy.get('#onlineBankingMenu').click()
})

Cypress.Commands.add('loginPage',(username,password)=>{
    cy.get('#signin_button').click()
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.get('#user_remember_me').check()
    cy.get('input[type="submit"]').click()
    cy.visit('http://zero.webappsecurity.com/index.html')
})