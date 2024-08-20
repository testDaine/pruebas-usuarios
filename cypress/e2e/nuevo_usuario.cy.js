const { slowCypressDown } = require("cypress-slow-down")

describe('Higea',()=>{
    slowCypressDown(400)

    it('Registro - catpcha invalido',()=>{
        let cont=0
        while(cont<10){
        cy.visit('https://qa-portalpaciente.centrodiagnosticohigea.com/portal_paciente/index.html')
        cy.get('#new-user').click()
        cy.get('#email').type('test@gmail.com')
        cy.get('#captcha').type('bg7852t')
        cy.get('#new-user-form > .form-horizontal > .submit > .btn-fefault').click()
        cy.get('#swal2-html-container').should('contain','Debe ingresar los caracteres iguales a los de la imagen')
        cont++
        }
    })
})