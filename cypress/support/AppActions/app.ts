declare namespace Cypress{
    interface Chainable{
        loadPage(): Chainable<Element>,
        closePage(): Chainable<Element>
    }
}


Cypress.Commands.add('loadPage',()=>{
    cy.visit('http://zero.webappsecurity.com/index.html')
})

Cypress.Commands.add('closePage',()=>{
    cy.clearCookies()
    cy.clearLocalStorage()
})