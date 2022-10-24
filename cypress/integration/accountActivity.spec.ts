describe('Account Activity - Show Transaction',()=>{
    before(()=>{

    })

    beforeEach(()=>{
        cy.loadPage()
        cy.fixture('users').then((users)=>{
            cy.loginPage(users[0].username,users[0].password)
        })
        cy.clickOnOnlineBankingPage()
        cy.clickOnAccountActivity()
        cy.clickOnShowTransaction()
    })

    it('should be data in Transaction',()=>{
        cy.verifyDataInTransaction()
    })

    afterEach(()=>{
        cy.closePage()
    })

    after(()=>{

    })
})