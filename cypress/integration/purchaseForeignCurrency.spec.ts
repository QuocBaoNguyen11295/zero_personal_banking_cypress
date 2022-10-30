describe('Purchase Foreign Currency',()=>{
    before(()=>{

    })

    after(()=>{

    })

    beforeEach(()=>{
        cy.loadPage()
        cy.fixture('users').then((users)=>{
            cy.loginPage(users[0].username,users[0].password)
        })
        cy.clickOnOnlineBankingPage()
        cy.clickOnPayBills()
    })

    it('should purchase foreign currency successfully',()=>{
        cy.clickOnPurchaseForeignCurrencyTab()
        cy.fixture('purchaseForeignCurrency').then((purchaseForeignCurrency)=>{
            cy.purchaseForeignCurrencySuccessfully(purchaseForeignCurrency.currency,purchaseForeignCurrency.currency_convert,purchaseForeignCurrency.amount,purchaseForeignCurrency.amount_convert)
        })
    })

    afterEach(()=>{
        cy.closePage()
    })
})