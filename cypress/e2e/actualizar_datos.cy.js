const { slowCypressDown } = require("cypress-slow-down")

describe('Higea', ()=>{
   // slowCypressDown(300)
    
    beforeEach(()=>{
        const email='drodriguez.itecnologica@gmail.com'
        const password='1'
        cy.login(email, password)
    })
    
    it('Actualizando datos', ()=>{
        cy.wait(2000)
        cy.get('#datos').click()
        cy.get('#patient-lugar')
        .clear()
        .type('Barquisimeto')
        cy.get('#patient-phonenumber')
        .clear()
        .type('04245245587')
        cy.get('#patient-country').select('b80c8fef-a677-5340-85fb-2c162d75df03')
        cy.get('#patient-state').select('2342aa20-6cb6-53c8-9764-61bcac17bdcc')
        cy.get('#patient-city').select('9daf72ab-21fd-5c8c-82be-82aa3e2ee9a9')
        cy.get('#patient-address')
        .clear()
        .type('Carrera 2 entre calles 5 y 6 Barrio Union')
        //cy.get('#btn-submit-frm').click()
        //cy.get('#swal2-html-container').should('contain','Los datos han sido almacenados con exito.')

        let cont = 0;
        while(cont < 20) {
        cy.get('#btn-submit-frm').click()
        cy.get('#swal2-html-container').should('contain','Los datos han sido almacenados con exito.')
        cy.get('.swal2-confirm').click()
        cont++;
        }
    })
  
})