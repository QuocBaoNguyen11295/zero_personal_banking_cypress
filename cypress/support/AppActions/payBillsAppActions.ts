declare namespace Cypress{
    interface Chainable{
        clickOnPaySavedPayeeTab():Chainable<Element>,
        clickOnAddNewPayeeTab():Chainable<Element>,
        clickOnPurchaseForeignCurrencyTab():Chainable<Element>
    }
}

Cypress.Commands.add('clickOnPaySavedPayeeTab',()=>{
    cy.get('#tabs > ul > li:nth-child(1)').click()
})

Cypress.Commands.add('clickOnAddNewPayeeTab',()=>{
    cy.get('#tabs > ul > li:nth-child(2)').click()
})

Cypress.Commands.add('clickOnPurchaseForeignCurrencyTab',()=>{
    cy.get('#tabs > ul > li:nth-child(3)').click()
})