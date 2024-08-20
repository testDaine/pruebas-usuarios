const { slowCypressDown } = require("cypress-slow-down")

describe('Higea', ()=>{

    it('Error inicio de sesion',()=>{
        //slowCypressDown(500)
        let cont=0
        while(cont<5){
        cy.visit('https://qa-portalpaciente.centrodiagnosticohigea.com/portal_paciente/index.html')
        cy.get('#banner > figure > img').should('exist')
        cy.get('#logo').should('exist')
        cy.get('#user').type('drodriguez@gmail.com')
        cy.get('#password').type('incorrecto')
        cy.get('.col-sm-12 > .cont-boton > .btn').click()
        cy.get('.swal2-popup').should('contain','Nombre de usuario o clave de acceso incorrecto')
        cont++
        }
    })
})