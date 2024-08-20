const { defineConfig } = require("cypress");

module.exports = {
  projectId: 'dv7d5b',
  e2e: { 
    experimentalSessionAndOrigin: true,
    "baseUrl": "https://qa-portalpaciente.centrodiagnosticohigea.com/portal_paciente/index.html"


    //setupNodeEvents(on, config) {
      // implement node event listeners here
    //},
 },
};
