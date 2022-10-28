describe('Pay saved payee',()=>{
    beforeEach(()=>{
        cy.loadPage()
        cy.fixture('users').then((users)=>{
            cy.loginPage(users[0].username,users[0].password)
        })
        cy.clickOnOnlineBankingPage()
        cy.clickOnPayBills()
        cy.clickOnPaySavedPayeeTab()
    })

    it('should pay saved payee successfully',()=>{
        cy.paySavedPayeeSuccessfully("Bank of America","Loan",1000,"2019-12-30","Test")
    })

    afterEach(()=>{
        cy.closePage()
    })
})