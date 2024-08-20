const { slowCypressDown } = require("cypress-slow-down")

describe('HIGEA', ()=>{
    slowCypressDown(400)

    beforeEach(()=>{
        const email= 'drodriguez.itecnologica@gmail.com'
        const password= '1'
        cy.login(email,password)
    })

    it('Agendar Consulta Estudios', ()=>{
        cy.get('#new-appointment-img').click()
        cy.get('#ambulatorio_i').select('6c733f6c-98b5-11e3-bc9a-00155d011f05')
        cy.get('#examen').type('RX DE ABDOMEN (E) - FBL')
        cy.get('#fecha_img').type('02/07/2024')
        cy.wait(2000)
        cy.get('#fecha_img').clear()
        cy.get('#fecha_img').type('02/07/2024')
        cy.get('.mr-1').click()
        cy.get('#btn-confirmar-cita-img').click()
        cy.get('.swal2-confirm').click()
        cy.get('#hora_img').select('16:42:00-16:54:00')
        cy.wait(5000)
        cy.get('#cita-attach-doc-orden').click()
        cy.get('[type="file"]').attachFile('../fixtures/orden.png')
        cy.wait(5000)
        cy.get('#btn-copy-file-name-orden').click()
        cy.get('.mr-1').click()
        cy.get('#btn-confirmar-cita-img').click()
    })
})