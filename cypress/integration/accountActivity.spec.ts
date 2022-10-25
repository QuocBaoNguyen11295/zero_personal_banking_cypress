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
    })

    it('should be data in Transaction',()=>{
        cy.clickOnShowTransaction()
        cy.verifyDataInTransaction()
    })

    it('should be data on find transaction',()=>{
        cy.clickOnFindTransaction()
        cy.fixture('findTransaction').then((findTransaction)=>{
            cy.fillInFindTransaction(findTransaction.description,findTransaction.from_date,findTransaction.to_date,findTransaction.from_amount,findTransaction.to_amount,findTransaction.type)
        })
        cy.verifyTableOnFindTransaction()
    })

    afterEach(()=>{
        cy.closePage()
    })

    after(()=>{

    })
})