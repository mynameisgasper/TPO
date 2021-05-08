describe('Testiranje Dog walkers', () => {
    
    /*beforeEach(() => {
        cy.visit('http://localhost:4200')
    })*/
    
    /*
        TODO:
        -----
            PRIJAVA UPORABNIKA: 0
            REGISTRACIJA UPORABNIKA: 2
            PREGLED VSEH OGLASOV: 1
            OGLED POSAMEZNEGA OGLASA: 1
            ISKANJE OGLASOV: 2
            UREJANJE UPORABNIŠKEGA PROFILA: 2
            OGLED PROFILA: 2
            KREIRANJE OGLASA: 2
            UREJANJE OGLASA: 2
            BRISANJE OGLASA: 2
            ODZIV NA OGLAS: 2
            OCENA PROFILA: 2
            KOMENTIRANJE PROFILA: 2
            DODAJANJE UPORABNIKA MED HITRE KONTAKTE: 2
            OGLED HITRIH KONTAKTOV: 2
            ODSTRANITEV IZ HITRIH KONTAKTOV: 2
            PREGLED LOKACIJE PREVZEMA: 2
            PRETVORBA VALUTE: 2
    */

    // TESTI: PREGLED VSEH OGLASOV
    context('Pregled vseh oglasov', () => {

        it('Ogled vseh oglasov', () => {
            cy.visit('http://localhost:4200')
            cy.get('.guest').click()
            cy.wait(100)
            cy.get('#ustvari').should('have.text','Ustvari oglas')
        })
    })
    
    // TESTI: PRIJAVA UPORABNIKA
    context('Prijava uporabnika', () => {

        it('Neuspešna prijava uporabnika', () => {
            //Pojdi na začetno stran
            cy.visit('http://localhost:4200')
            
            //Pripravi API klic ki ga želimo prestreči in počakati
            cy.intercept('POST', 'http://localhost:3000/api/v1/auth/login').as('login');
            
            cy.contains('DOG WALKERS')
            //Vnesi v polja in klikni na gumb
            cy.get('#loginEmail')
            .type('aabcc').should('have.value', 'aabcc')
            cy.get('#loginPassword')
            .type('test1231')
            cy.get('#login').click()
            
            //alert
            cy.on('window:alert', (str) => {
                expect(str).to.equal('neuspešna prijava, glej konzolo')
              })
        })

        it('Uspešna prijava uporabnika', () => {
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
            
            //Preveri če obstaja gumb Odjava -> Tako vemo da je prijavljen
            cy.get('#odjava').should('have.text','Odjava')
        })
    })
        

        // TEST: OGLED POSAMEZNEGA OGLASA #2
        

        
        // TEST: OGLED PROFILA #2

        // TEST: KREIRANJE OGLASA #1

        // TEST: KREIRANJE OGLASA #2

    
    // TESTI: OGLED POSAMEZNEGA OGLASA
    context('Ogled posameznega oglasa', () => {

        it('Ogled oglasa', () => {
            
            cy.get('#oglasButton').first().click()
            cy.wait(100)
            cy.get('#odziv').should('have.text','Odziv na oglas')

        })

        // TODO, ko bodo oglasi vezani na posameznega uporabnika, ki jih je ustvaril
        /*
        it('Ogled oglasa preko profila', () => {
        })
        */
    })

    /*
    context('Od prijave naprej', () => {

        // TEST: PRIJAVA UPORABNIKA #2
        it('Uspešna prijava uporabnika', () => {
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
            
            //Preveri če obstaja gumb Odjava -> Tako vemo da je prijavljen
            cy.get('#odjava').should('have.text','Odjava')
        })
        
        // TEST: UREJANJE UPORABNIŠKEGA PROFILA #1
        it('Urejanje profila uporabnika', () => {

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

            cy.get('#userProfileButton').click()
            cy.wait(100)
            cy.get('#editButtonProfile').click()
            cy.get('.naslov').should('have.text','Urejanje profila')
        })
        
        // TEST: UREJANJE UPORABNIŠKEGA PROFILA #2

        // TEST: OGLED PROFILA #1
        it('Ogled lastnega profila', () => {
            cy.get('#userProfileButton').click()
            cy.wait(100)
            cy.get('.naslov').should('have.text','Profil uporabnika')
        })
    })
    */

    
})