declare namespace Cypress{
    /**
     * @type username
     * @type password
     */
    interface Chainable{
        loginSuccessfully(username: String,password: String):Chainable<Element>,
        loginUnsuccessfully(usrname: String,password: String): Chainable<Element>
    }
}

Cypress.Commands.add('loginSuccessfully',(username,password)=>{
    cy.get('#signin_button').click()
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.get('#user_remember_me').check()
    cy.get('input[type="submit"]').click()
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.get('#settingsBox > ul > li:nth-child(3) > a').should('be.visible').and('contain.text','username')
})


Cypress.Commands.add('loginUnsuccessfully',(username,password)=>{
    cy.get('#signin_button').click()
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.get('#user_remember_me').check()
    cy.get('input[type="submit"]').click()
    cy.get('.alert-error').should('be.visible').and('contain.text','Login and/or password are wrong.')
})