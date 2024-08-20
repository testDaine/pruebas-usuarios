const { slowCypressDown } = require("cypress-slow-down")

describe('HIGEA', ()=>{
    slowCypressDown(400)

    beforeEach(()=>{
        const email='drodriguez.itecnologica@gmail.com'
        const password='1'
        cy.login(email,password)
    })
    it('Cambiar clave', ()=>{
        cy.get('.ddl-menu').click()
            cy.get('.toggle-visibility > :nth-child(1) > a').click()
            cy.get('#current-password').type('1')
            cy.get('#new-password').type('2')
            cy.get('#validate-password').type('2')
            cy.get('.btn-fefault').click()
    })
})