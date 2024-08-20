describe('Sanos Web', () => {
    it('Registrar paciente', () => {
      cy.visit("https://sanosqa.centrodiagnosticohigea.com/sanosweb/xfm/fm/class/index.php?x=login")

      cy.get('input[id=user]')
        //.should('exist')
        .type("calidad")

    cy.get('input[id=clave]')
        //.should('exist')
        .type("1")
        .type('{enter}', { log: false })

  
      cy.contains('Registro de Pacientes').should('exist').click()
  
      cy.get('.xfm-fake-data-pnombre')
        .type('TEST')
      cy.get('.xfm-fake-data-snombre')
        .type('TEST')
      cy.get('.xfm-fake-data-papellido')
        .type('TEST')
      cy.get('.xfm-fake-data-sapellido')
        .type('TEST')
      cy.get('.xfm-fake-data-documento:first')
        .type('2865375001')
      cy.get('.xfm-fake-data-fnac')
        .type('26/05/2002')
      cy.get('.xfm-fake-data-sexo')
        .select('M');
      cy.get('.xfm-fake-data-tipo-pac')
        .select('Particular')
      cy.get('.xfm-fake-data-lnac')
        .type('BARQUISIMETO')
      cy.get('.xfm-fake-data-direccion')
        .eq(0)
        .type('TEST DIRECCIÓN')
      cy.get('.xfm-fake-data-email-pac')
        .type('ccorsini@itecnologica.com')
      cy.get('.xfm-fake-data-tlf-pac')
        .type('04123929879')
      cy.get('.xfm-fake-data-tlf-movil-pac')
        .type('02512355301')
  
      //GUARDAR PACIENTE
      let cont = 0;
      while(cont < 50) {
        cy.get('.boton_guardar').click()
        cont++;
      }
    })
  })