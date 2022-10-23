declare namespace Cypress{
    interface Chainable{
        verifyAccountSummaryIsDisplayed(): Chainable<Element>
    }
}

Cypress.Commands.add('verifyAccountSummaryIsDisplayed',()=>{
    let listHeader2 = ['Cash Accounts','Investment Accounts','Credit Accounts','Loan Accounts']
    for(let i = 1;i < listHeader2.length + 1;i++){
        cy.get('h2:nth-child('+(2*i - 1)+')').should('contain.text',listHeader2[i - 1])
    }
})