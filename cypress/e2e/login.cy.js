const users= [{username:'drodriguez.itecnologica@gmail.com', password:'1'},
             {username:'testu1@gmail.com', password:'Inicio.1'},
             {username:'testu2@gmail.com', password:'Inicio.1'}
];

describe('Inicio de sesion simultaneo', ()=>{
    users.forEach((user)=>{
        it('Iniciar sesion como ${user.username}', ()=>{
            cy.visit('https://qa-portalpaciente.centrodiagnosticohigea.com/portal_paciente/index.html')
            cy.get('#user').type(user.username);
            cy.get('#password').type(user.password);
            cy.get('.col-sm-12 > .cont-boton > .btn').click();
            cy.wait(2000)

        })
    })
})
    
/*describe('Simulacion de multiples usuarios', ()=>{
    it('Iniciar sesion', ()=>{
        cy.wrap([
            {user:'drodriguez.itecnologica@gmail.com', password:'1'},
            {user:'testu1@gmail.com', password:'Inicio.1'},
            {user:'testu2@gmail.com', password:'Inicio.1'}
        ]).each((user)=>{
            cy.visit('https://qa-portalpaciente.centrodiagnosticohigea.com/portal_paciente/index.html')
            cy.get('#user').type(user.user)
            cy.get('#password').type(user.password)
            cy.get('.col-sm-12 > .cont-boton > .btn').click()
        })
    })
})
    */