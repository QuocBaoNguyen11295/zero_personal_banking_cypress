describe('Account summary',()=>{
    before(()=>{

    })

    beforeEach(()=>{
        cy.loadPage()
        cy.fixture('users').then((users)=>{
            cy.loginPage(users[0].username,users[0].password)
        })
        cy.clickOnOnlineBankingPage()
        cy.clickOnAccountSummary()
    })

    it('should verify the account summary page is displayed',()=>{
        cy.verifyAccountSummaryIsDisplayed()
    })

    afterEach(()=>{
        cy.closePage()        
    })
    after(()=>{

    })
})