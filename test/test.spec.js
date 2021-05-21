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
        .invoke('val','testar.testkovic@gmail.com').should('have.value', 'testar.testkovic@gmail.com')
        cy.get('#loginPassword')
        .invoke('val','testtest')
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
        .invoke('val','testni1.uporabnik1@gmail.com').should('have.value', 'testni1.uporabnik1@gmail.com')
        cy.get('#loginPassword')
        .invoke('val','testtest')
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
        .invoke('val','ad.min@hotmail.com').should('have.value', 'ad.min@hotmail.com')
        cy.get('#loginPassword')
        .invoke('val','admin')
        cy.get('#login').click()

        //Počakaj klic
        cy.wait('@login')
    })

    Cypress.Commands.add('registerNovi1', () => { 

        // Pojdi na stran za registracijo
        cy.get('#register').click()
        cy.wait(200)

        // Izpolni registracijsko formo
        cy.get("#registrationName").invoke('val','Testni1')
        cy.get("#registrationSurname").invoke('val','Uporabnik1')
        cy.get("#registrationPhone").invoke('val','041041031')
        cy.get("#registrationAddress").invoke('val','Testni Kraj')
        cy.get("#registrationCountry").invoke('val','Testna')
        cy.get("#registrationEmail").invoke('val','testni1.uporabnik1@gmail.com')
        cy.get("#registrationPassword").invoke('val','testtest')
        cy.get("#registrationPassword2").invoke('val','testtest')

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
        .invoke('val','testni1.uporabnik1@gmail.com').should('have.value', 'testni1.uporabnik1@gmail.com')
        cy.get('#loginPassword')
        .invoke('val','testtest')
        cy.get('#login').click()

        //Počakaj klic
        cy.wait('@login')
        
    })

    Cypress.Commands.add('registerNovi2', () => { 

        // Pojdi na stran za registracijo
        cy.get('#register').click()
        cy.wait(200)

        // Izpolni registracijsko formo
        cy.get("#registrationName").invoke('val','Testni2')
        cy.get("#registrationSurname").invoke('val','Uporabnik2')
        cy.get("#registrationPhone").invoke('val','041041031')
        cy.get("#registrationAddress").invoke('val','Testni Kraj')
        cy.get("#registrationCountry").invoke('val','Testna')
        cy.get("#registrationEmail").invoke('val','testni2.uporabnik2@gmail.com')
        cy.get("#registrationPassword").invoke('val','testtest')
        cy.get("#registrationPassword2").invoke('val','testtest')

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
        .invoke('val','testni2.uporabnik2@gmail.com').should('have.value', 'testni2.uporabnik2@gmail.com')
        cy.get('#loginPassword')
        .invoke('val','testtest')
        cy.get('#login').click()

        //Počakaj klic
        cy.wait('@login')
    })

    Cypress.Commands.add('registerTestar', () => { 

        // Pojdi na stran za registracijo
        cy.get('#register').click()
        cy.wait(200)

        // Izpolni registracijsko formo
        cy.get("#registrationName").invoke('val','testar')
        cy.get("#registrationSurname").invoke('val','testkovic')
        cy.get("#registrationPhone").invoke('val','041041031')
        cy.get("#registrationAddress").invoke('val','Testni Kraj')
        cy.get("#registrationCountry").invoke('val','Testna')
        cy.get("#registrationEmail").invoke('val','testar.testkovic@gmail.com')
        cy.get("#registrationPassword").invoke('val','testtest')
        cy.get("#registrationPassword2").invoke('val','testtest')

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
        .invoke('val','testar.testkovic@gmail.com').should('have.value', 'testar.testkovic@gmail.com')
        cy.get('#loginPassword')
        .invoke('val','testtest')
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
        PRIJAVA UPORABNIKA:                         0
        REGISTRACIJA UPORABNIKA:                    0
        PREGLED VSEH OGLASOV:                       0
        OGLED POSAMEZNEGA OGLASA:                   0 
        ISKANJE OGLASOV:                            1 (za neuspešnega bo če bo gumb)
        UREJANJE UPORABNIŠKEGA PROFILA:             2 (napisano ampak ne dela, manjka backend?)
        OGLED PROFILA:                              0
        KREIRANJE OGLASA:                           0
        UREJANJE OGLASA:                            0
        BRISANJE OGLASA:                            1 
        ODZIV NA OGLAS:                             2 (še ne moreš)
        OCENA PROFILA:                              1 (treba pogruntat kako nardit check)
        KOMENTIRANJE PROFILA:                       0  
        BRISANJE KOMENTARJEV PROFILA:               2 (treba dobit nekak user id)
        DODAJANJE UPORABNIKA MED HITRE KONTAKTE:    2 (še ne moreš)
        OGLED HITRIH KONTAKTOV:                     2 (še ne moreš)
        ODSTRANITEV IZ HITRIH KONTAKTOV:            2 (še ne moreš)
        PREGLED LOKACIJE PREVZEMA:                  2 (še ne moreš)    
        PRETVORBA VALUTE:                           2 (še ne moreš)

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
            .invoke('val','aabcc').should('have.value', 'aabcc')
            cy.get('#loginPassword')
            .invoke('val','test1231')
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
    
    // TESTI: KREIRANJE OGLASA
    context('Kreiranje oglasa', () => {

        it('Kreiranje oglasa uspešen', () => {

            cy.login()

            cy.get('#ustvari').click()
            cy.wait(200)

            // Kreator novega oglasa vnese podatke

            cy.get('#naslovOglasa').invoke('val', 'testni_oglas')
            cy.wait(200)
            cy.get('#opisOglasa').invoke('val','test 123 123')            
            cy.get('#cenaOglasa').invoke('val','69')
            cy.get('#lokacijaOglasa').invoke('val','Tibilisijska 15, 1000 Ljubljana')

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


        // Najprej navigiraj na profil nekega uporabnika, in si golej oglas prek gumba "Vsi oglasi" tega uporabnika
        it('Ogled oglasa preko profila', () => {
            cy.loginOther()

            cy.get('#profileButton').first().click()
            cy.wait(100)
            cy.get('#vsiOglasi').click()

            cy.get('#oglasButton').first().click()
            cy.wait(100)
            cy.get('#odziv').should('have.text','Odziv na oglas')

        })
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

            cy.get('#naslovOglasa').invoke('val','testni_oglas')
            cy.wait(20)
            cy.get('#opisOglasa').invoke('val','test 123 123')
            cy.get('#cenaOglasa').invoke('val','69')
            cy.get('#lokacijaOglasa').invoke('val','Tibilisijska 15, 1000 Ljubljana')

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
            cy.get("#registrationName").invoke('val','Testni')
            cy.get("#registrationSurname").invoke('val','Uporabnik')
            cy.get("#registrationPhone").invoke('val','041041031')
            cy.get("#registrationAddress").invoke('val','Testni Kraj')
            cy.get("#registrationCountry").invoke('val','Testna')

            // Namerno povzročimo napako
            cy.get("#registrationEmail").invoke('val','testni.uporabnik.com')
            cy.get("#registrationPassword").invoke('val','testtest')
            cy.get("#registrationPassword2").invoke('val','testtest')

            // Izberi vrsto računa
            cy.get('#navaden').click()
            cy.wait(50)

            // Registriraj se
            cy.get('#regit').click()
            cy.wait(400)

            cy.get('#odziv').should('have.text', '\nProsim vnesi pravilen email naslov.\n')

        })
    })



    // TESTI: UREJANJE UPORABNIŠKEGA PROFILA
    context('Urejanje uporabniškega profila', () => {

        it('Urejanje profila - uspešen', () => {

            cy.login()
            cy.get('#userProfileButton').click()
            cy.wait(50)
            cy.get('#editButtonProfile').click()
            cy.wait(50)

            // Spremeni eno izmed vnosnih polj
            cy.get("#phoneEdit").invoke('val','666666666')

            cy.get('#saveButtonProfile').click()
            cy.wait(1000)

            cy.get("#backButtonUrejanje").click()
            cy.wait(50)

            cy.get('#telUporabnika').should('have.text', '666666666')
        })

        it('Urejanje profila - neuspešen', () => {

            
            cy.login()
            cy.get('#userProfileButton').click()
            cy.wait(50)
            cy.get('#editButtonProfile').click()
            cy.wait(50)

            // Spremeni eno izmed vnosnih polj na napačen format
            cy.get("#emailEdit").invoke('val','test.testgmail.com')

            cy.get('#saveButtonProfile').click()
            cy.wait(1000)

            cy.get('#odzivUrejanja').should('have.text', '\nProsim vnesi pravilen email naslov.\n')
            

        })
    })

    
    // TESTI: VZDRŽEVANJE OGLASA
    context('Vzdrževanje oglasa', () => {

        it('Urejanje oglasa - uspešen', () => {
            cy.login()

            cy.get('#ustvari').click()
            cy.wait(200)

            // Kreator novega oglasa vnese podatke

            cy.get('#naslovOglasa').invoke('val', 'testni_oglas')
            cy.wait(200)
            cy.get('#opisOglasa').invoke('val','test 123 123')            
            cy.get('#cenaOglasa').invoke('val','69')
            cy.get('#lokacijaOglasa').invoke('val','Tibilisijska 15, 1000 Ljubljana')

            // Kreator oglasa doda sliko iz lokalne naprave
            // cy.get('#dodajSliko').click()

            // Kreator doda nov oglas k obstoječim
            cy.intercept('POST', 'http://localhost:3000/api/v1/oglas').as('oglasCreate')
            cy.get('#buttonAddOglas').click()
            cy.wait('@oglasCreate')

            cy.get('#nasOglasBoard').should('have.text', 'testni_oglas')

            // Po ustvarjenem oglasu sledi urejanje oglasa

            cy.get('#oglasButton').first().click()
            cy.get('#editButton').click()

            // Spremenimo naslov oglasa
            cy.get('#naslovOglasa').invoke('val','prodajam pnevmatike')
            cy.get('#buttonUrediOglas').click()
            cy.wait(500)

            cy.get('#naslovOglas').should('have.text', 'prodajam pnevmatike')
        })

        it('Urejanje oglasa - neuspešen', () => {
            cy.login()

            // Urejanje oglasa

            cy.get('#oglasButton').first().click()
            cy.get('#editButton').click()

            // Spremenimo naslov oglasa
            cy.get('#naslovOglasa').invoke('val','')
            cy.get('#buttonUrediOglas').click()
            cy.wait(500)

            //alert
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Ime oglasa ne more biti prazno!')
            })
        })
    })



    // TESTI: PODAJANJE OCENE PROFILU
    context('Podajanje ocene profilu drugega uporabnika', () => {

        it('Podajanje ocene - uspešen', () => {
            
            cy.loginOther()
            cy.get('#profileButton').first().click()

            cy.get('#ocenaBtn').click()
            cy.get('#ocena').select('1')

            cy.get('#updateBtn').click()
            cy.wait(200)

            cy.on('window:alert', (str) => {
                expect(str).to.equal('Ocena uspešno podana!')
            })
        })

        it('Podajanje ocene - neuspešen', () => {
            cy.loginOther()

            cy.get('#profileButton').first().click()

            cy.get('#ocenaBtn').click()
            cy.get('#ocena').select('2')

            cy.get('#zapriModal').click()
            cy.wait(200)

            // TREBA ZGRUNTAT KAKO SE BO ČEKNILO ZVEZDICE..

        })
    })


    // TESTI: PODAJANJE KOMENTARJA PROFILU
    context('Podajanje komentarja profilu drugega uporabnika', () => {

        it('Podajanje komentarja - uspešen', () => {
            
            cy.loginOther()
            cy.get('#profileButton').first().click()

            cy.get('#dodajKomentar').click()
            cy.get('#vsebinaKomentarja').invoke('val','on je scammer')

            cy.get('#buttonUrediOglas').click()
            cy.wait(200)

            cy.get('.komentarProfila').should('have.text', 'testni1.uporabnik1@gmail.com on je scammer ')

        })

        it('Podajanje komentarja - neuspešen', () => {
            cy.loginOther()
            
            cy.get('#profileButton').first().click()

            cy.get('#dodajKomentar').click()
            cy.get('#vsebinaKomentarja').invoke('val','nategnu mi je psa')

            cy.get('#buttonCloseUrediOglas').click()
            cy.wait(200)

            cy.get('.komentarProfila').should('not.have.value', 'testni1.uporabnik1@gmail.com on je scammer testni1.uporabnik1@gmail.com nategnu mi je psa ')

        })
    })

    // TESTI: BRISANJE KOMENTARJA PROFILU
    context('Brisanje komentarja profila', () => {

        it('Brisanje komentarja - uspešen', () => {
            
            cy.loginOther()
            cy.get('#profileButton').first().click()

            // manjka brisanje, treba nekak dobit user id hash...

            cy.get('.komentarProfila').should('not.exist')

        })

        // TODO - ni potrdilnega okna za brisanje komentarjev, LAHKO tut brisanje kot admin
        //it('Brisanje komentarja - neuspešen', () => {})
    })

    // TESTI: ISKANJE OGLASOV
    context('Iskanje oglasa', () => {
        it('Iskanje oglasa - uspešen', () => {
            cy.login()

            cy.get('#searchButton').invoke('val','prodajam pnevmatike')
            cy.wait(100)
            cy.get('.oglas').should('exist')
        })

        //it('Iskanje oglasa - neuspešen', () => {})
    })
    
})