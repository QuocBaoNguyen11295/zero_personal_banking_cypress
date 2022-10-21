describe('Login feature',()=>{
    var username = ''
    var password = ''
    before(()=>{
        password = 'password1'
        username = 'username1'
    })

    after(()=>{

    })
    beforeEach(()=>{
        cy.loadPage()
    })

    it('should login successfully',()=>{
        cy.fixture('users').then((users)=>{
            cy.loginSuccessfully(users.username,users.password)
        })
    })

    it('should login unsuccessfully',()=>{
        cy.loginUnsuccessfully(username,password)
    })

    afterEach(()=>{
        cy.closePage()
    })
})