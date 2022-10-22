describe('Login feature',()=>{
    before(()=>{

    })

    after(()=>{

    })
    beforeEach(()=>{
        cy.loadPage()
    })

    it('should login successfully',()=>{
        cy.fixture('users').then((users)=>{
            cy.loginSuccessfully(users[0].username,users[0].password)
        })
    })

    it('should login unsuccessfully',()=>{
        cy.fixture('users').then((users)=>{
            cy.loginUnsuccessfully(users[1].username,users[1].password)
        })
    })

    afterEach(()=>{
        cy.closePage()
    })
})