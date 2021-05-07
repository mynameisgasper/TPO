import Chance from 'chance';
const chance = new Chance();

describe('Prvi test', () => {

    /*beforeEach(() => {
        cy.visit('http://localhost:4200')
    })*/
    

    it('login', () =>{
        //Pojdi na začetno stran
        cy.visit('http://localhost:4200')
        
        //Pripravi API klic ki ga želimo prestreči in počakati
        cy.intercept('POST', 'http://localhost:3000/api/v1/auth/login').as('login');
        
        cy.contains('DOG WALKERS')
        //Vnesi v polja in klikni na gumb
        cy.get('#loginEmail')
        .type('marica.petkovsek@hotmail.com').should('have.value', 'marica.petkovsek@hotmail.com')
        cy.get('#loginPassword')
        .type('test')
        cy.get('#login').click()

        //Počakaj klic
        cy.wait('@login')
    })
})