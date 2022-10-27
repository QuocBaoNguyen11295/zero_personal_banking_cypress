declare namespace Cypress{
    /**
     * @param from_account
     * @param to_account
     * @param amount
     * @param description
     */
    interface Chainable{
        submitTransferFund(from_account:string,to_account:string,amount:number,description:string):Chainable<Element>,
        clickOnSubmitTransfer(from_account:string,to_account:string,amount:number,description:string):Chainable<Element>,
        verifyTransferSuccessfully(from_account:string,to_account:string,amount:number):Chainable<Element>
    }
}

Cypress.Commands.add('submitTransferFund',(from_account,to_account,amount,description)=>{
    cy.get('#tf_fromAccountId').select(from_account)
    cy.get('#tf_toAccountId').select(to_account)
    cy.get('#tf_amount').type(amount)
    cy.get('#tf_description').type(description)
    cy.get('#btn_submit').click()
})

Cypress.Commands.add('clickOnSubmitTransfer',(from_account,to_account,amount,description)=>{
    cy.get('#tf_fromAccountId').should('be.disabled')
    cy.get('#tf_fromAccountId').should('contain.value',from_account)
    cy.get('#tf_toAccountId').should('be.disabled')
    cy.get('#tf_toAccountId').should('contain.value',to_account)
    cy.get('#tf_amount').should('be.disabled')
    cy.get('#tf_amount').should('contain.value',amount)
    cy.get('#tf_description').should('be.disabled')
    cy.get('#tf_description').should('contain.value',description)
    cy.get('#btn_submit').click()
})

Cypress.Commands.add('verifyTransferSuccessfully',(from_account,to_account,amount)=>{
    cy.get('.alert-success').should('contain.text','You successfully submitted your transaction.')
    cy.get('.row:nth-child(1) > .span3').should('contain.text',from_account)
    cy.get('.row:nth-child(2) > .span3').should('contain.text',to_account)
    cy.get('.row:nth-child(3) > .span3').should('contain.text','$ '+amount)
})