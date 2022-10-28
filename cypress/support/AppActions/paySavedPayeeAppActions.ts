declare namespace Cypress{
    interface Chainable{
        /**
         * @param payee
         * @param account
         * @param amount 
         * @param date
         * @param description
         */
        paySavedPayeeSuccessfully(payee:string,account:string,amount:number,date:string,description:string): Chainable<Element>
    }
}

Cypress.Commands.add('paySavedPayeeSuccessfully',(payee,account,amount,date,description)=>{
    cy.get('#sp_payee').select(payee)
    cy.get('#sp_account').select(account)
    cy.get('#sp_amount').type(amount)
    cy.get('#sp_date').type(date).tab()
    cy.get('#sp_description').type(description)
    cy.get('#pay_saved_payees').click()
    cy.get('#alert_content').should('be.visible')
    cy.get('#alert_content > span').should('contain.text','The payment was successfully submitted.')
})