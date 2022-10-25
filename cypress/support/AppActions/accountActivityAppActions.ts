declare namespace Cypress{
    /**
     * @param description
     * @param from_date
     * @param to_date
     * @param from_amount
     * @param to_amount
     * @param type
     */
    interface Chainable{
        clickOnShowTransaction(): Chainable<Element>,
        verifyDataInTransaction(): Chainable<Element>
        clickOnFindTransaction(): Chainable<Element>,
        verifyTableOnFindTransaction(): Chainable<Element>,
        fillInFindTransaction(description:string,from_date:string,to_date:string,from_amount:number,to_amount:number,type:string): Chainable<Element>
    }
}

Cypress.Commands.add('clickOnShowTransaction',()=>{
    cy.get('#tabs > ul > li:nth-child(1)').click()
})

Cypress.Commands.add('verifyDataInTransaction',()=>{
    cy.get('#aa_accountId').select('1')
    cy.get('#all_transactions_for_account > table > tbody > tr').should('be.visible').and('have.length',3)
})

Cypress.Commands.add('clickOnFindTransaction',()=>{
    cy.get('#tabs > ul > li:nth-child(2)').click()  
})


Cypress.Commands.add('fillInFindTransaction',(description,from_date,to_date,from_amount,to_amount,type)=>{
    cy.get('#aa_description').type(description)
    cy.get('#aa_fromDate').type(from_date).tab()
    cy.get('#aa_toDate').type(to_date).tab()
    cy.get('#aa_fromAmount').type(from_amount)
    cy.get('#aa_toAmount').type(to_amount)
    cy.get('#aa_type').select(type)
    cy.get('button[type="submit"]').click().slowDown(5000)
    cy.wait(3000)
})

Cypress.Commands.add('verifyTableOnFindTransaction',()=>{
    cy.get('#filtered_transactions_for_account > table').should('be.visible')
})