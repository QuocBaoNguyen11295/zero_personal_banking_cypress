describe('Send feedback',()=>{
    before(()=>{

    })

    beforeEach(()=>{
        cy.loadPage()
        cy.clickOnFeedbackPage()
    })

    it('Send comment to the system',()=>{
        cy.fixture('feedback').then((feedback)=>{
            cy.submitFeedbackForm(feedback.name,feedback.email,feedback.subject,feedback.comment)
            cy.verifyTheMessage(feedback.name)
        })
    })

    afterEach(()=>{
        cy.closePage()
    })

   after(()=>{

    })
})