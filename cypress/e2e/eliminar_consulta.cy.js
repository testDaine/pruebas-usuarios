const { slowCypressDown } = require("cypress-slow-down")

describe('Higea', ()=>{
    slowCypressDown(400)

    beforeEach(()=>{
        const email='drodriguez.itecnologica@gmail.com'
        const password='1'
        cy.login(email,password)
    })
    
    it('Eliminar consulta', ()=>{
        cy.wait(2000)
       // cy.get('#patients-selector > select').select('da992320-d5a8-11eb-b733-0f335777aa9f')
        cy.get('#citas').click()
        cy.get('#dynamic-subcontent > :nth-child(1)').click()
        cy.get('.glyphicon-trash').click()
    })
})