declare namespace Cypress{
    interface Chainable{
        clickOnAccountSummary(): Chainable<Element>,
        clickOnAccountActivity(): Chainable<Element>,
        clickOnTransferFund(): Chainable<Element>,
        clickOnPayBills(): Chainable<Element>
    }
}

Cypress.Commands.add('clickOnAccountSummary',()=>{
    cy.get('#account_summary_link').click()
})

Cypress.Commands.add('clickOnAccountActivity',()=>{
    cy.get('#account_activity_link').click()
})

Cypress.Commands.add('clickOnTransferFund',()=>{
    cy.get('#transfer_funds_link').click()
})

Cypress.Commands.add('clickOnPayBills',()=>{
    cy.get('#pay_bills_link').click()
})

Cypress.Commands.add('clickOnMyMoneyMap',()=>{
    cy.get('#money_map_link').click()
})