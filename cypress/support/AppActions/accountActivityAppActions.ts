declare namespace Cypress{
    interface Chainable{
        clickOnShowTransaction(): Chainable<Element>,
        verifyDataInTransaction(): Chainable<Element>
    }
}

Cypress.Commands.add('clickOnShowTransaction',()=>{
    cy.get('#tabs > ul > li:nth-child(1)').click()
})

Cypress.Commands.add('verifyDataInTransaction',()=>{
    cy.get('#aa_accountId').select('1')
    cy.get('#all_transactions_for_account > table > tbody > tr').should('have.length',3)
})