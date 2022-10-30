declare namespace Cypress{
    interface Chainable{
        /**
         * @param currency
         * @param currency_convert
         * @param amount
         * @param amount_convert
         */
        purchaseForeignCurrencySuccessfully(currency:string,currency_convert:string,amount:number,amount_convert:string): Chainable<Element>
    }
}

Cypress.Commands.add('purchaseForeignCurrencySuccessfully',(currency,currency_convert,amount,amount_convert)=>{
    cy.get('#pc_currency').select(currency)
    cy.get('#sp_sell_rate').should('be.visible').and('contain.text',currency_convert)
    cy.get('#pc_amount').type(amount)
    cy.get('#pc_inDollars_true').click()
    cy.get('#pc_calculate_costs').click()
    cy.get('#pc_conversion_amount').should('be.visible').and('contain.text',amount_convert)
    cy.get('#purchase_cash').click()
    cy.get('#alert_content').should('be.visible').and('contain.text','Foreign currency cash was successfully purchased.')
})