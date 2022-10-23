declare namespace Cypress{
    interface Chainable{
        clickOnAccountSummary(): Chainable<Element>
    }
}

Cypress.Commands.add('clickOnAccountSummary',()=>{
    cy.get('#account_summary_link').click()
})