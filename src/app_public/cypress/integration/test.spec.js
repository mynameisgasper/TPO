import Chance from 'chance';
import { TimeoutError } from 'cypress/types/bluebird';
const chance = new Chance();

describe('Testiranje Dog walkers', () => {
    
    /*beforeEach(() => {
        cy.visit('http://localhost:4200')
    })*/
    
    /*
        TEST REGISTRACIJE
    */

    /*context('Ogled vseh oglasov', () => {
         it('Ogled vseh oglasov', () => {
            cy.visit('http://localhost:4200')
            cy.get('.guest').click()
        })
    })*/
    
    context('Vse od prijave naprej', () => {
        it('Prijava uporabnika', () => {
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

    /*
        TEST UREJANJA UPORABNIŠKEGA PROFILA
    */


    
})