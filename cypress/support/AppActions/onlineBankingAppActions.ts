declare namespace Cypress{
    interface Chainable{
        clickOnAccountSummary(): Chainable<Element>,
        clickOnAccountActivity(): Chainable<Element>
    }
}

Cypress.Commands.add('clickOnAccountSummary',()=>{
    cy.get('#account_summary_link').click()
})

Cypress.Commands.add('clickOnAccountActivity',()=>{
    cy.get('#account_activity_link').click()
})