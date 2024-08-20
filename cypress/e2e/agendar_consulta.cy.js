const { slowCypressDown } = require("cypress-slow-down")

describe('Higea Login', ()=>{
    slowCypressDown(400)

    beforeEach(()=>{
        const email= "drodriguez.itecnologica@gmail.com"
        const password= '1'
        cy.login(email,password)
    })
        it('Agendar consulta', ()=>{
            //cy.wait(2000)
            
            cy.get('#new-appointment-ext').click()
            cy.get('#ambulatorio').select('d89511dc-7e4d-11e5-99d6-005056ad6a06')
            cy.get('#especialidad').select('77fb604c-c621-11e7-83e7-1293eba9db62')
            cy.get('#medico').select('2ee8e160-a95f-11e7-8ae8-1293eba9db62')
            cy.get('#motivo').type('chequeo general')
            cy.get('#fecha').click()
            cy.get('#fecha').type('19/08/2024')
            cy.get('#appointment-ext-form').click()
            cy.get('#hora').select('9c12a9a2-3dc3-11ee-b108-0a7dc71f5c47') 
            cy.get('.mr-1').click()
            cy.get('#btn-confirmar-cita-ext').click()
            cy.get('#swal2-html-container').should('contain','Tu cita ha sido programada')
    })  
})