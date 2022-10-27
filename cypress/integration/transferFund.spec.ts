describe('Transfer fund',()=>{
    before(()=>{

    })


    beforeEach(()=>{
        cy.loadPage()
        cy.fixture('users').then((users)=>{
            cy.loginPage(users[0].username,users[0].password)
        })
        cy.clickOnOnlineBankingPage()
        cy.clickOnTransferFund()
    })

    it('should transfer money successfully',()=>{
        cy.fixture('transferFund').then((transferFund)=>{
            cy.submitTransferFund(transferFund.from_account,transferFund.to_account,transferFund.amount,transferFund.description)
        })
        cy.fixture('transferFund').then((transferFund)=>{
            cy.clickOnSubmitTransfer(transferFund.from_account_verify,transferFund.to_account_verify,transferFund.amount,transferFund.description)
        })
        cy.fixture('transferFund').then((transferFund)=>{
            cy.verifyTransferSuccessfully(transferFund.from_account_verify,transferFund.to_account_verify,transferFund.amount)
        })
    })

    afterEach(()=>{
        cy.closePage()
    })

    after(()=>{

    })
})