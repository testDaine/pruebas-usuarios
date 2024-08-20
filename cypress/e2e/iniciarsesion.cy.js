describe('Higea', ()=>{
   /* it('Iniciar y cerrar sesion', ()=>{

        let cont=0
        while(cont<20){
        const email='drodriguez.itecnologica@gmail.com'
        const password='1'
        cy.login(email, password)
        cy.wait(1300)

        cy.contains('DAINELLIS RODRIGUEZ').should('exist').click()
        //cy.get('#username').click()
        scy.get('#logout').click()
        cont++
        }
*/

    it('Higea', ()=>{
        let cont=0
        while(cont<10){
        cy.wait(500)
        cy.visit('https://qa-portalpaciente.centrodiagnosticohigea.com/portal_paciente/index.html')
        cy.get('#user').type('drodriguez.itecnologica@gmail.com')
        cy.get('#password').type('1')
        cy.get('.col-sm-12 > .cont-boton > .btn').click()
        cont++
        }
    })
})