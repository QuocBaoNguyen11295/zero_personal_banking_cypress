declare namespace Cypress{
    interface Chainable{
        /**
         * @param payeeName
         * @param payeeAddress
         * @param payeeAccount
         * @param payeeDetails
         */
        addNewPayeeSuccessfully(payeeName:string,payeeAddress:string,payeeAccount:string,payeeDetails:string):Chainable<Element>
    }
}

Cypress.Commands.add('addNewPayeeSuccessfully',(payeeName,payeeAddress,payeeAccount,payeeDetails)=>{
    cy.get('#np_new_payee_name').type(payeeName)
    cy.get('#np_new_payee_address').type(payeeAddress)
    cy.get('#np_new_payee_account').type(payeeAccount)
    cy.get('#np_new_payee_details').type(payeeDetails)
    cy.get('#add_new_payee').click()
    cy.get('#alert_content').should('be.visible').and('contain.text','The new payee '+payeeName+' was successfully created.')
})