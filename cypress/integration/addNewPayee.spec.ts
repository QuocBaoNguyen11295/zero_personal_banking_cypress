describe('Add new payee',()=>{
    before(()=>{})
    after(()=>{})
    beforeEach(()=>{
        cy.loadPage()
        cy.fixture('users').then((users)=>{
            cy.loginPage(users[0].username,users[0].password)
        })
        cy.clickOnOnlineBankingPage()
        cy.clickOnPayBills()
    })

    it('should add new payee successfully',()=>{
        cy.clickOnAddNewPayeeTab()
        cy.fixture('addNewPayee').then((addNewPayee)=>{
            cy.addNewPayeeSuccessfully(addNewPayee.payee_name,addNewPayee.payee_address,addNewPayee.payee_account,addNewPayee.payee_details)
        })
    })

    afterEach(()=>{
        cy.closePage()
    })
})