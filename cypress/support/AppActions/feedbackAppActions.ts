declare namespace  Cypress{
    interface Chainable{
        /**
         * 
         * @param name the name of commentor
         * @param email the email of commentor
         * @param subject the subject of comment
         * @param comment the content of comment
         */
        submitFeedbackForm(name:string,email:string,subject:string,comment:string): Chainable<Element>,
        verifyTheMessage(name:string) : Chainable<Element> 
    }
}

Cypress.Commands.add('submitFeedbackForm',(name,email,subject,comment)=>{
    cy.get('#name').type(name)
    cy.get('#email').type(email)
    cy.get('#subject').type(subject)
    cy.get('#comment').type(comment)
    cy.get('input[type="submit"]').click()
})


Cypress.Commands.add('verifyTheMessage',(name)=>{
    cy.get('.container > .top_offset > div > .offset3').should('contain.text','\n        \n            Feedback\n        \n\n            Thank you for your comments, '+name+'.\n            They will be reviewed by our Customer Service staff and given the full attention that they deserve.\n    ')
})