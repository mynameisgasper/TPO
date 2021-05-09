describe('Testiranje Dog walkers', () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200/')
    })

    Cypress.Commands.add('login', () => { 
            
        //Pripravi API klic ki ga želimo prestreči in počakati
        cy.intercept('POST', 'http://localhost:3000/api/v1/auth/login').as('login');
        
        cy.contains('DOG WALKERS')
        //Vnesi v polja in klikni na gumb
        cy.get('#loginEmail')
        .type('testar.testkovic@gmail.com').should('have.value', 'testar.testkovic@gmail.com')
        cy.get('#loginPassword')
        .type('testtest')
        cy.get('#login').click()

        //Počakaj klic
        cy.wait('@login')
    })

    Cypress.Commands.add('loginOther', () => { 
            
        //Pripravi API klic ki ga želimo prestreči in počakati
        cy.intercept('POST', 'http://localhost:3000/api/v1/auth/login').as('login');
        
        cy.contains('DOG WALKERS')
        //Vnesi v polja in klikni na gumb
        cy.get('#loginEmail')
        .type('testni1.uporabnik1@gmail.com').should('have.value', 'testni1.uporabnik1@gmail.com')
        cy.get('#loginPassword')
        .type('testtest')
        cy.get('#login').click()

        //Počakaj klic
        cy.wait('@login')
    })

    Cypress.Commands.add('loginAdmin', () => { 

        //Pripravi API klic ki ga želimo prestreči in počakati
        cy.intercept('POST', 'http://localhost:3000/api/v1/auth/login').as('login');
        
        cy.contains('DOG WALKERS')
        //Vnesi v polja in klikni na gumb
        cy.get('#loginEmail')
        .type('ad.min@hotmail.com').should('have.value', 'ad.min@hotmail.com')
        cy.get('#loginPassword')
        .type('admin')
        cy.get('#login').click()

        //Počakaj klic
        cy.wait('@login')
    })

    Cypress.Commands.add('registerNovi1', () => { 

        // Pojdi na stran za registracijo
        cy.get('#register').click()
        cy.wait(200)

        // Izpolni registracijsko formo
        cy.get("#registrationName").type('Testni1')
        cy.get("#registrationSurname").type('Uporabnik1')
        cy.get("#registrationPhone").type('041041031')
        cy.get("#registrationAddress").type('Testni Kraj')
        cy.get("#registrationCountry").type('Testna')
        cy.get("#registrationEmail").type('testni1.uporabnik1@gmail.com')
        cy.get("#registrationPassword").type('testtest')
        cy.get("#registrationPassword2").type('testtest')

        // Izberi vrsto računa
        cy.get('#navaden').click()
        cy.wait(50)

        // Registriraj se
        cy.intercept('POST', 'http://localhost:3000/api/v1/auth/register').as('register');
        cy.get('#regit').click()
        cy.wait('@register')
        

        // Opravi testni login z novim računom
        //Pripravi API klic ki ga želimo prestreči in počakati
        cy.intercept('POST', 'http://localhost:3000/api/v1/auth/login').as('login');
        
        cy.contains('DOG WALKERS')
        //Vnesi v polja in klikni na gumb
        cy.get('#loginEmail')
        .type('testni1.uporabnik1@gmail.com').should('have.value', 'testni1.uporabnik1@gmail.com')
        cy.get('#loginPassword')
        .type('testtest')
        cy.get('#login').click()

        //Počakaj klic
        cy.wait('@login')
        
    })

    Cypress.Commands.add('registerNovi2', () => { 

        // Pojdi na stran za registracijo
        cy.get('#register').click()
        cy.wait(200)

        // Izpolni registracijsko formo
        cy.get("#registrationName").type('Testni2')
        cy.get("#registrationSurname").type('Uporabnik2')
        cy.get("#registrationPhone").type('041041031')
        cy.get("#registrationAddress").type('Testni Kraj')
        cy.get("#registrationCountry").type('Testna')
        cy.get("#registrationEmail").type('testni2.uporabnik2@gmail.com')
        cy.get("#registrationPassword").type('testtest')
        cy.get("#registrationPassword2").type('testtest')

        // Izberi vrsto računa
        cy.get('#navaden').click()
        cy.wait(50)

        // Registriraj se
        cy.intercept('POST', 'http://localhost:3000/api/v1/auth/register').as('register');
        cy.get('#regit').click()
        cy.wait('@register')

        // Opravi testni login z novim računom
        //Pripravi API klic ki ga želimo prestreči in počakati
        cy.intercept('POST', 'http://localhost:3000/api/v1/auth/login').as('login');
        
        cy.contains('DOG WALKERS')
        //Vnesi v polja in klikni na gumb
        cy.get('#loginEmail')
        .type('testni2.uporabnik2@gmail.com').should('have.value', 'testni2.uporabnik2@gmail.com')
        cy.get('#loginPassword')
        .type('testtest')
        cy.get('#login').click()

        //Počakaj klic
        cy.wait('@login')
    })

    Cypress.Commands.add('registerTestar', () => { 

        // Pojdi na stran za registracijo
        cy.get('#register').click()
        cy.wait(200)

        // Izpolni registracijsko formo
        cy.get("#registrationName").type('testar')
        cy.get("#registrationSurname").type('testkovic')
        cy.get("#registrationPhone").type('041041031')
        cy.get("#registrationAddress").type('Testni Kraj')
        cy.get("#registrationCountry").type('Testna')
        cy.get("#registrationEmail").type('testar.testkovic@gmail.com')
        cy.get("#registrationPassword").type('testtest')
        cy.get("#registrationPassword2").type('testtest')

        // Izberi vrsto računa
        cy.get('#navaden').click()
        cy.wait(50)

        // Registriraj se
        cy.intercept('POST', 'http://localhost:3000/api/v1/auth/register').as('register');
        cy.get('#regit').click()
        cy.wait('@register')

        // Opravi testni login z novim računom
        //Pripravi API klic ki ga želimo prestreči in počakati
        cy.intercept('POST', 'http://localhost:3000/api/v1/auth/login').as('login');
        
        cy.contains('DOG WALKERS')
        //Vnesi v polja in klikni na gumb
        cy.get('#loginEmail')
        .type('testar.testkovic@gmail.com').should('have.value', 'testar.testkovic@gmail.com')
        cy.get('#loginPassword')
        .type('testtest')
        cy.get('#login').click()

        //Počakaj klic
        cy.wait('@login')
    })
    
    context('Vzpostavitev uporabnikov (NISO TESTI)', () => {
        
        it('Registracija testar testkovic', () => {
            cy.registerTestar()
        })
        it('Registracije testni1 uporabnik1', () => {
            cy.registerNovi1()
        })
    })
    
    /*
        TODO:
        -----
        PRIJAVA UPORABNIKA: 0
        REGISTRACIJA UPORABNIKA: 0
        PREGLED VSEH OGLASOV: 1
        OGLED POSAMEZNEGA OGLASA: 1
        ISKANJE OGLASOV: 2
        UREJANJE UPORABNIŠKEGA PROFILA: 2
        OGLED PROFILA: 0
        KREIRANJE OGLASA: 0
        UREJANJE OGLASA: 2
        BRISANJE OGLASA: 1
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

        it('Pregled vseh oglasov', () => {
            cy.get('.guest').click()
            cy.wait(100)
            cy.get('#ustvari').should('have.text','Ustvari oglas')
        })
    })
    
    // TESTI: PRIJAVA UPORABNIKA
    context('Prijava uporabnika', () => {

        it('Neuspešna prijava uporabnika', () => {
            
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

            cy.login()

            //Preveri če obstaja gumb Odjava -> Tako vemo da je prijavljen
            cy.get('#odjava').should('have.text','Odjava')
        })
    })
    
    // TESTI: UREJANJE UPORABNIŠKEGA PROFILA
    context('Urejanje uporabniškega profila', () => {
        
        it('Urejanje profila uporabnika', () => {

            cy.login()

            cy.get('#userProfileButton').click()
            cy.wait(100)
            cy.get('#editButtonProfile').click()

            //Preveri ali si na strani za urejanje profila
            cy.get('.naslov').should('have.text','Urejanje profila')
        })

        // TODO, ko bo zvezano
        /*
        it('', () => {
        })
        */

    })
    
    // TESTI: KREIRANJE OGLASA
    context('Kreiranje oglasa', () => {

        it('Kreiranje oglasa uspešen', () => {

            cy.login()

            cy.get('#ustvari').click()
            cy.wait(200)

            // Kreator novega oglasa vnese podatke

            cy.get('#naslovOglasa').type('testni_oglas')
            cy.wait(20)
            cy.get('#opisOglasa').type('test 123 123')            
            cy.get('#cenaOglasa').type('69')

            // Kreator oglasa doda sliko iz lokalne naprave
            // cy.get('#dodajSliko').click()

            // Kreator doda nov oglas k obstoječim
            cy.intercept('POST', 'http://localhost:3000/api/v1/oglas').as('oglasCreate')
            cy.get('#buttonAddOglas').click()
            cy.wait('@oglasCreate')

            cy.get('#nasOglasBoard').should('have.text', 'testni_oglas')
        })

        it('Kreiranje oglasa neuspešen', () => {

            cy.login()

            cy.get('#ustvari').click()
            cy.wait(50)
            cy.get('#buttonAddOglas').click()
            
            //alert
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Napaka pri kreaciji oglasa, glej konzolo!')
            })
        })
    })

    // TESTI: OGLED POSAMEZNEGA OGLASA
    context('Ogled posameznega oglasa', () => {

        it('Ogled oglasa', () => {

            //Pojdi na stran z vsemi oglasi
            cy.visit('http://localhost:4200/oglasi')
            
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

    // TESTI: OGLED PROFILA
    context('Ogled profila', () => {

        it('Ogled lastnega profila', () => {

            cy.login()

            cy.get('#userProfileButton').click()
            cy.wait(100)
            cy.get('.naslov').should('have.text','Profil uporabnika')
        })


        it('Ogled profila drugega uporabnika', () => {

            cy.loginOther()

            cy.get('#profileButton').first().click()
            cy.wait(100)
            cy.get('#ocenaBtn').should('have.text','Podaj oceno')
        })
        
    })

    // TESTI: BRISANJE OGLASA
    context('Brisanje oglasa', () => {

        it('Brisanje oglasa', () => {
            cy.login()

            cy.get('#ustvari').click()
            cy.wait(500)

            // Kreator novega oglasa vnese podatke

            cy.get('#naslovOglasa').type('testni_oglas')
            cy.wait(20)
            cy.get('#opisOglasa').type('test 123 123')
            cy.get('#cenaOglasa').type('69')

            // Kreator oglasa doda sliko iz lokalne naprave
            // cy.get('#dodajSliko').click()

            // Kreator doda nov oglas k obstoječim
            cy.intercept('POST', 'http://localhost:3000/api/v1/oglas').as('oglasCreate')
            cy.get('#buttonAddOglas').click()
            cy.wait('@oglasCreate')

            // Preveri ali na novo ustvarjen oglas obstaja med oglasi
            cy.get('#nasOglasBoard').should('have.text', 'testni_oglas')
            cy.get('#oglasButton').first().click()
            cy.get('#deleteButton').click()

            //alert
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Oglas izbrisan!')
            })
        })

    })

    // TESTI: VZDRŽEVANJE OGLASA
    /*
    context('Vzdrževanje oglasa', () => {

        it('Urejanje oglasa', () => {
            // TODO
        })
    })
    */


    // TESTI: REGISTRACIJA UPORABNIKA
    context('Registracija uporabnika', () => {


        it('Registracija uspešna - navaden', () => {

            cy.registerNovi2()

        })

        it('Registracija neuspešna - navaden', () => {

            // Pojdi na stran za registracijo
            cy.get('#register').click()
            cy.wait(200)

            // Izpolni registracijsko formo
            cy.get("#registrationName").type('Testni')
            cy.get("#registrationSurname").type('Uporabnik')
            cy.get("#registrationPhone").type('041041031')
            cy.get("#registrationAddress").type('Testni Kraj')
            cy.get("#registrationCountry").type('Testna')

            // Namerno povzročimo napako
            cy.get("#registrationEmail").type('testni.uporabnik.com')
            cy.get("#registrationPassword").type('testtest')
            cy.get("#registrationPassword2").type('testtest')

            // Izberi vrsto računa
            cy.get('#navaden').click()
            cy.wait(50)

            // Registriraj se
            cy.get('#regit').click()
            cy.wait(400)

            cy.get('#odziv').should('have.text', '\nProsim vnesi pravilen email naslov.\n')

        })
    })

    
    
})