const { slowCypressDown } = require("cypress-slow-down")

describe('HIGEA', ()=>{
    slowCypressDown(400)
    
    beforeEach(()=>{
        const email= 'drodriguez.itecnologica@gmail.com'
        const password='1'
        cy.login(email,password)
    })
    it('recipe',()=>{
        cy.wait(2000)
        cy.get('#recipes').click()
        cy.get('.glyphicon-print').click()
    })

})
