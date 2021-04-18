# Načrt sistema

|                             |                                                         |
| :-------------------------- | :------------------------------------------------------ |
| **Naziv projekta**          | Dog Walkers                           |
| **Člani projektne skupine** | Gašper Božič, Gašper Kolbezen, Grega Kranjec, Matevž Vreš in Gašper Štepec |
| **Kraj in datum**           | Ljubljana, April 2021                                  |

## Povzetek

V tej fazi projekta smo razvili načrt arhitekture, ki zajema logični, procesni, razvojni in fizični pogled. 
V logičnem pogledu so predstavljene same entitete, njihove strukture in uporabljeni podatki v njih ter relacije med njimi. 
V procesnem pogledu je zajeta arhitekturna shema sistema, predstavljena sta čelni in zaledni del sistema in njune komponente. 
Znotraj razvojnega pogleda je predstavljena uporabljena arhitekturna zasnova po vzorcu MVC, 
opisana je tudi je avtentikacija, ki bo implementirana po principu JWT. 
Fizični pogled zajema upravljanje z varnostnimi kopijami in način uporabe podatkovnih baz 
preko gostiteljskega strežnika MongoDB Atlas. 
V razdelku načrt strukture se nahaja razredni diagram sistema s pripadajočimi atributi, metodami in njihovimi opisi. 
Na koncu sledi še poglavitni razdelek z načrtom obnašanja, v katerem je skupek diagramov zaporedja, 
uporabljenih pri predstavitvi funkcionalnosti in njihovih osnovnih, alternativnih in izjemnih tokov. 

## 1. Načrt arhitekture

### LOGIČNI POGLED
#### Entitete
Za namene boljšega razumevanja smatrajte besedno zvezo **Unikatni identifikator** kot *niz znakov*, ki se uporablja kot primarni ključ vsake entitete.


##### **1. Uporabnik**
Entiteta bo razdeljena na *avtentikacijske*, *osebne* in *ostale* podatke, kjer bodo med **avtentikacijske** spadali vsi podatki, ki so potrebni za primerno avtentikacijo uporabnika, in sicer:
- Uporabniško ime,
- Naključno generirano vrednost,
- Zakriptirano vrednost in
- Vlogo.
> **Unikatni identifikator** enitete bo dodeljen avtomatsko s strani sistema ob registraciji. **geslo** bo v podatkovni bazi seveda primerno zakriptirano s pomočjo naključne vrednosti, ki se bo uporabljala za izračun zakriptirane vrednosti in se bo v kombinaciji z **uporabniškim imenom** uporabljalo za vpis. **Vloga**, predstavljena s celim številom, bo lahko zasedla eno od štirih možnih vrednosti, kjer bodo pomembnost oz. "moč" vloge naraščala sorazmerno z vrednostjo celega števila *(npr. 1 - organizacija, 4 - administrator)*

**osebni** podatki bodo zajemali:
- Polno ime,
- Telefonsko številko, 
- Pošto, ulico in hišno številko in
- Elektronski naslov (elektronski pošta, uporabnika).
> Osebni podatki se bodo ostalim uporabnikom na strani profila prikazali z določenimi omejitvami *(npr. ostalim uporabnikom ne bo razkrita telefonska številka in pa točen naslov uporabnika, ampak zgolj kraj, v katerem prebiva)*

Med **ostale** podatke pa spadajo:
- Javna ocena, 
- Podane ocene in 
- Hitri dostop.
> **Javna ocena uporabnika** se bo samodejno preračunavala glede na ocene podane s strani drugih uporabnikov. **Podane ocene** predstavljajo seznam unikatnih identifikatorjev uporakov, ki jim je uporabnik že podal oceno in služi kot zapisnik, ki uporabniku preprečuje večkratno podajanje ocene istemu uporabniku. **Hitri dostop** pa predstavlja seznam unikatnih identifikatorjev vseh uporabnikov, ki jih je uporabnik "dodal v hitri dostop".

**Struktura**
|                 |                                                        |
| :-------------------------- | :------------------------------------------------------ |
| Unikatni identifikator          | <div class="dataType">*(niz znakov - ustvarjeno samodejno)*</div>  |
| Uporabniško ime | <div class="dataType">*(niz znakov - obvezno)*</div> |
| Naključno generirana vrednost | <div class="dataType">*(niz znakov - obvezno)*</div> |
| Zakriptirana vrednost | <div class="dataType">*(niz znakov - obvezno)*</div> |
| Vloga | <div class="dataType">*(celo število - min 1, max 4 - privzeto 1)*</div> |
| Polno ime | <div class="dataType">*(niz znakov - obvezno)*</div> |
| Telefonska številka | <div class="dataType">*(niz znakov - obvezno)*</div> |
| Pošta, ulica in hišna številka | <div class="dataType">*(niz znakov - obvezno)*</div> |
| Elektronski naslov | <div class="dataType">*(niz znakov - obvezno)*</div> |
| Javna ocena | <div class="dataType">*(necelo število - min 0.0, max 5.0 - privzeto nedefinirano)*</div> |
| Podane ocene | <div class="dataType">*(seznam **unikatnih identifikatorjev** - privzeto prazen seznam)*</div> |
| Hitri dostop | <div class="dataType">*(seznam **unikatnih identifikatorjev** - privzeto prazen seznam)*</div> |



##### **2. Oglas**
Entiteta bo vsebovala 4 **vsebinske** lastnosti:
- Opis,
- Lokacija prevzema,
- Slika in
- Cena. 
> izmed naštetih sta slika in cena neobvezna, uporabnika si lahko podrobne informacije izmenjata preko zasebne komunikacije (elektronska pošta)

Poleg omenjenih pa bo vsebovala tudi:
- Oglaševalec
> Vsak oglas bo označen z Oglaševalcem, ki ga je ustvaril.

**Struktura**
|                 |                                                        |
| :-------------------------- | :------------------------------------------------------ |
| Unikatni identifikator          | <div class="dataType">*(niz znakov - ustvarjeno samodejno)*</div>  |
| Opis          | <div class="dataType">*(niz znakov - obvezno)*</div>  |
| Lokacija prevzema | <div class="dataType">*(niz znakov - obvezno)*</div> |
| Slika | <div class="dataType">*(BLOB - neobvezno)*</div> |
| Cena | <div class="dataType">*(število - neobvezno)*</div> |
| Oglaševalec | <div class="dataType">*(**unikatni identifikator** - obvezno)*</div> |



##### **3. Komentar**
Komentar je entiteta vezana na svojega uporabnika in je zgrajena iz naslednjih lastnosti:
- Uporabnika,
- Vsebina in
- Komentatorja.
> Uporabnik in Komentator v obliki unikatnih identifikatorjev služita kot prejemnik komentarja in podpis komentatorja.

**Struktura**
|                   |                                                        |
| :-------------------------- | :------------------------------------------------------ |
| Unikatni identifikator          | <div class="dataType">*(niz znakov - ustvarjeno samodejno)*</div>  |
| Vsebina          | <div class="dataType">*(niz znakov - obvezno)*</div>  |
| Komentator | <div class="dataType">*(**unikatni identifikator** - obvezno)*</div> |

#### Relacije med entitetami
Na spodnji sliki so v neformalnem diagramu predstavljene relacije med zamišljenimi entitetami
<img src="../img/relacije.png" style="width:50%">

Diagram si interpretiramo na sledeč način.
- en uporabnik lahko ustvari 0 ali več oglasov, kjer en oglas priapda točno enemu uporabniku
- enemu uporabniku lahko pripada 0 ali več komentarjev (ki jih je podal sam, ali pa jih ostali dodali njemu), kjer en komentar pripada točno enemu uporabniku
- en uporabnik lahko ustvari 0 ali več odzivov, kjer en odziv pripada točno enemu uporabniku
- en oglas lahko vsebuje 0 ali več odzivov, kjer je odziv vezan na točno en oglas  

##### **4. Ocena**
Ocenar je entiteta vezana na svojega uporabnika in je zgrajena iz naslednjih lastnosti:
- Uporabnika,
- Ocena in
- Ocenjevalca.
> Uporabnik in Ocenjevalca v obliki unikatnih identifikatorjev služita kot prejemnik ocene in podpis ocenjevalca.

**Struktura**
|                   |                                                        |
| :-------------------------- | :------------------------------------------------------ |
| Unikatni identifikator          | <div class="dataType">*(niz znakov - ustvarjeno samodejno)*</div>  |
| Ocena          | <div class="dataType">*(število - obvezno)*</div>  |
| Ocenjevalec | <div class="dataType">*(**unikatni identifikator** - obvezno)*</div> |

#### Relacije med entitetami
Na spodnji sliki so v neformalnem diagramu predstavljene relacije med zamišljenimi entitetami
<img src="../img/conceptual_model.png">

Diagram si interpretiramo na sledeč način.
- en uporabnik lahko ustvari 0 ali več oglasov, kjer en oglas priapda točno enemu uporabniku
- enemu uporabniku lahko pripada 0 ali več komentarjev (ki jih je podal sam, ali pa jih ostali dodali njemu), kjer en komentar pripada točno enemu uporabniku
- en uporabnik lahko ustvari 0 ali več odzivov, kjer en odziv pripada točno enemu uporabniku
- en oglas lahko vsebuje 0 ali več odzivov, kjer je odziv vezan na točno en oglas


### PROCESNI POGLED
Čelni del aplikacije izdelan po konceptu **Single Page Application (SPA)**. Za izvajanje bo poskrbel spletni brskalnik odjemalca. Zaledni del bo v obliki **Restful API**-ja dostopen na spletnem strežniku, kjer bo komuniciral z glavno podatkovno bazo. Razdelili ga bomo na dve mikrostoritvi, ki bosta monitorirali dostop do podatkov v glavni podatkovni bazi.

<img src="../img/procesniPogled.png" style="border-radius:1rem">

Poleg omenjenega bo za periodično varnostno kopiranje podatkov glavne podatkovne baze skrbel **Upravljalec varnostnih kopij**, ki bo imel dostop do glavne in varnostne kopije podatkovne baze

### RAZVOJNI POGLED
Arhitektura **spletne aplikacije** bo zasnovana po vzorcu **model-pogled-krmilnik** oz. **MVC** 

<img src="../img/mvcVzorec.png" width="50%" style="border-radius:1rem">

Vsaka entiteta bo ustrezno preslikana v sebi pripadajoč *model*. Vsakemu modelu bo pripadal samostojen *Krmilnik*, ki bo implementiral potrebne **CRUD** operacije za model, ki mu pripadajo. 

*Pogled* modela bo na čelnem delu dinamično prikazoval potrebne obrazce za ustvarjanje novega zapisa modela v podatkovni bazi, posodabljanje že obstoječega zapisa, omogočal pa bo tudi prikaz *master-detail* vzorca in opcijo izbrisa zapisa modela iz podatkovne baze.

#### **Avtentikacija**
Dostop do podatkov bo regulirala komponenta za avtentikacijo, kjer bo sistem avtentkacije implementiran po principu **JWT**. 

Vsaka HTTP zahteva po podatkih bo pred dostopom do podatkovne baze pregledana s strani *avtentikacijske komponente*, ki bo v tem scenariju delovala kot semafor za *komponento za uporavljanje s podatki*. 
- **V primeru avtorizacije** s strani avtentikacijske komponente bo komponenta za upravaljanje s podatki izvedla transakcijo s podatkovno bazo. 
- **V primeru zavrnitve avtorizaicije** bo na zahtevo HTTP odgovorila z ustrezno zavrnitveno kodo in sporočilom o napaki.

#### **Izvorna koda aplikacije**
Izvorna koda aplikacije se bo nahajala na oddaljenem GitHub repozitoriju, kjer bo nit razvoja razvejana na *produkcijsko* in *razvojno* vejo, *razvojna* veja pa bo po potrebi razvejana na dodatne veje za boljši pregled in nadzor.

### FIZIČNI POGLED
RESTAPI in Upravljalec varnostnih kopij bosta nameščena in se izvajala na istem spletnem strežniku, s katerim bo komuniciral spletni brskalnik odjemalca, ki bo skrbel za izvajanje in procesiranje čelnega dela aplikacije.

Za gostovanje podatkovnih baz bomo uporabili **MongoDB Atlas strežnike**, kjer bo podatkovna baza z varnostno kopijo gostovana na različni lokaciji kot glavna podatkovna baza


## 2. Načrt strukture

### 2.1 Razredni diagram

<img src="../img/razredniDiagram.png">  

### 2.2 Opis razredov

### Entitetni:
#### **Uporabnik**

Predstavlja entiteto katerega koli uporabnika aplikacije. 

Nesamoumevne Metode

- preveriInterakcije()

- posodobiPovprecje()
  
#### **Oglas**

- Predstavlja entiteto vsakega oglasa v aplikaciji

- Nesamoumevne Metode
  - Ni nesamoumevnih metod

#### **Ocena**

- Predstavlja entiteto oceno oglasa

- Nesamoumevne Metode
  - pridobiPodatke(identifikator)
    - identifikator tipa unikatni identifikator
    - rezultat je ocena
    - vrne podakte o oceni (ocena, ocenjevalec)


#### **Komentar**

- Predstavlja entiteto komentarja na oglasu

- Nesamoumevne Metode
  - Ni nesamoumevnih metod

### Kontrolni:

#### **PrijavaUporabnika**

- Predstavlja kontrolni razred prijave uporabnika v aplikacijo. 

- Nesamoumevne Metode
  - posljiPodatkeUporabnika()
    - paramteri so podatki iz vnosnih polj(uporabnisko ime in geslo)
    - rezultat je integer -> ta predstavlja uspešno pošiljanje oziroma napako med pošiljanjem
  - preveriPodatkeUporabnika()
    - paramteri so podatki iz vnosnih polj(uporabnisko ime in geslo)
    - rezultat je boolean, true če so podatki pravilni, false če niso

#### **RegistracijaUporabnika**

- Predstavlja kontrolni razred registracije uporabnika.

- Nesamoumevne Metode
  - posljiPodatke()
    - paramteri so podatki iz vnosnih polj(uporabnisko ime, e-poštni naslov in geslo)
    - rezultat je integer -> ta predstavlja uspešno pošiljanje oziroma napako med pošiljanjem
  - posljiMail()
    - parameter je e-poštni naslov na novo registriranega uporabnika
    - rezultat je integer -> ta predstavlja uspešno pošiljanje oziroma napako med pošiljanjem


#### **UrejanjeUporabniskegaProfila**

- Predstavlja kontrolni razred funkcionalnosti urejanja uporabniškega profila.

- Nesamoumevne Metode
  - shraniPodatke()
    - parametri so podatki o uporabniku, ki jih bomo posodobili
        - rezultat je integer -> ta predstavlja uspešno urejanje oziroma napako med urejanjem


#### **OgledProfila**

 - Predstavlja kontrolni razred funkcionalnosti ogleda profila nekega uporanbika, ocenjevanja profila in brisanje komentarjov na profilu

- Nesamoumevne Metode
  - preveriInterakcijo()
    - parametra sta dva uporabnika (trenutni in nek drugi)
    - preveri če imata dva uporabnika že kakšno zgodovino
    - rezultat je boolean, true če sta uporabnika že imela interakcijo in false če nista
  - staraOcena()
    - parameter je Uporabnik in ocena profila
    - vrne prejšno oceno uporabniškega profila
    - rezultat je integer -> prejšna ocena
  - novoPovprecje()
    - parameter je nova ocena, integer
    - vrne novo povprečje ocen na profilu
    - rezultat je integer -> novo povprečje
  
#### **OdstranitevUprabnikaIzHitrihKontaktov**

- Predstavlja funkcionalnost odstranjanja uprabnika iz hitrih kontaktov

- Nesamoumevne Metode
  - Ni nesamoumevnih metod

#### **OgledHitrihKontaktov**

- Nesamoumevne Metode
  - Ni nesamoumevnih metod

#### **DodajanjeUporabnikaMedHitreKontakte**

Nesamoumevne Metode
- ??

#### **BrisanjeKomentarjaProfila**

Nesamoumevne Metode
- ??

#### **DodajanjeKomentarjaProfilu**

Nesamoumevne Metode
- ??


#### **OgledLokacijePrevzema**

Nesamoumevne Metode
- ??

#### **OgledPosameznegaOglasa**

Nesamoumevne Metode
- ??

#### **BrisanjeOglasa**

Nesamoumevne Metode
- ??

#### **UrejanjeOglasa**

Nesamoumevne Metode
- ??

#### **KreiranjeOglasa**

Nesamoumevne Metode
- ??

#### **IskanjeOglasov**

Nesamoumevne Metode
- ??

#### **PretvorbaValute**

Nesamoumevne Metode
- ??

### Mejni:

#### **ZM_PrijavaUporabnika**

Nesamoumevne Metode
- ??

#### **ZM_RegistracijaUporabnika**

Nesamoumevne Metode
- ??

#### **ZM_UrejanjeUporabniskegaProfila**

Nesamoumevne Metode
- ??

#### **ZM_OgledProfila**

Nesamoumevne Metode
- ??

#### **ZM_OcenaProfila**

Nesamoumevne Metode
- ??

#### **ZM_OdstranitevUporabnikaIzHitrihKontaktov**

Nesamoumevne Metode
- ??

#### **ZM_OgledHistrihKontaktov**

Nesamoumevne Metode
- ??

#### **ZM_DodajanjeUporabnikaMedHitreKontakte**

Nesamoumevne Metode
- ??

#### **ZM_BrisanjeKomentarjaProfila**

Nesamoumevne Metode
- ??

#### **ZM_DodajanjeKomentarjaProfilu**

Nesamoumevne Metode
- ??

#### **ZM_ZgodovinaSprehodov**

Nesamoumevne Metode
- ??

#### **ZM_OdzivNaOglas**

Nesamoumevne Metode
- ??

#### **ZM_OgledPosameznegaOglasa**

Nesamoumevne Metode
- ??

#### **ZM_BrisanjeOglasa**

Nesamoumevne Metode
- ??

#### **ZM_UrejanjeOglasa**

Nesamoumevne Metode
- ??

#### **ZM_KreiranjeOglasa**

Nesamoumevne Metode
- ??

#### **ZM_IskanjeOglasov**

Nesamoumevne Metode
- ??

#### **SV_PretvorbaValute**

Nesamoumevne Metode
- Ni nesamoumevnih metod

#### **SV_OgledLokacijePrevzem**

Nesamoumevne Metode
- Ni nesamoumevnih metod
















## 3. Načrt obnašanja

  ### 3.1. Registracija uporabnika  

  **OSNOVNI TOK**  
  Diagram poleg osnovnega toka predstavlja tudi izjemni tok, kjer je e-naslov že uporabljen.  
  <img src="../img/diagrami_zaporedja/Registracija_osnovni_izjemni1.png">  
    
  **IZJEMNI TOK**  
  Diagram predstavlja izjemne tokove neustreznih podatkov.  
  <img src="../img/diagrami_zaporedja/Registracija_izjemni2_in_3.png">  


  ### 3.2 Prijava uporabnika

  <img src="../img/diagrami_zaporedja/prijavaUporabnika.png">

  ### 3.3. Urejanje uporabniškega profila  

  **OSNOVNI TOK**  
  <img src="../img/diagrami_zaporedja/Urejanje_profila_osnovni.png">  
    
  **IZJEMNI TOKOVI**  
  Diagram prikazuje izjemne tokove, kjer so bili vnešeni nedovoljeni znaki, neustrezen format podatkov (npr. e-naslova) ali pa je bilo prekoračeno dovoljeno število znakov.  
  <img src="../img/diagrami_zaporedja/Urejanje_profila_izjemni1_2_3.png">  
    
  Diagram prikazuje izjemni tok, kjer uporabnik navigira proč od strani brez shranjevanja sprememb.  
  <img src="../img/diagrami_zaporedja/Urejanje_profila_izjemni4.png">  

  ### 3.4. Pregled vseh oglasov  
  Funkcionalnost je bila združena s funkcionalnostjo "Iskanje oglasov".  

  ### 3.5. Ogled posameznega oglasa  

  **OSNOVNI TOK**  
  <img src="../img/diagrami_zaporedja/Ogled_oglasa_osnovni.png">  
    
  **ALTERNATIVNI TOKOVI**  
  Diagram prikazuje alternativni tok, kjer si oglas ogleduje neprijavljen uporabnik z manj funkcionalnostmi.  
  <img src="../img/diagrami_zaporedja/Ogled_oglasa_alternativni.png">  

  Diagram prikazuje alternativni tok, kjer si uporabnik ogleda lokacijo prevzema na sameme oglasu.  
  <img src="../img/diagrami_zaporedja/ogled_posameznega_oglasa_ogled_lokacije.png">  
  
  **IZJEMNI TOK**  
  Diagram prikazuje izjemni tok, kjer odpove zunanji sistem.  
  <img src="../img/diagrami_zaporedja/Ogled_oglasa_izjemni.png">  

  ### 3.6. Ogled oglasa in lokacije prevzema  
  Funkcionalnost je bila združena s funkcionalnostjo "Ogled posameznega oglasa".

  ### 3.7. Ogled profila  

  **OSNOVNI TOK**  
  <img src="../img/diagrami_zaporedja/Ogled_profila_osnovni.png">  

  ### 3.8. Kreacija oglasa  

  **OSNOVNI TOK**  
  <img src="../img/diagrami_zaporedja/Kreacija_oglasa_osnovni.png">  
    
  **IZJEMNI TOK**  
  Diagram prikazuje izjemni tok, kjer so bili vnešeni neustrezni podatki ali pa podatki manjkajo.  
  <img src="../img/diagrami_zaporedja/Kreacija_oglasa_izjemni.png">  
  
  ### 3.9. Vzdrževanje oglasa  

  **OSNOVNI TOK**  
  <img src="../img/diagrami_zaporedja/Vzdrzevanje_oglasa_osnovni.png">  
    
  **IZJEMNI TOK**  
  Diagram prikazuje izjemni tok, kjer so bili vnešeni neustrezni podatki ali pa podatki manjkajo.  
  <img src="../img/diagrami_zaporedja/Vzdrzevanje_oglasa_izjemni.png">  
  
  ### 3.10. Brisanje oglasa  
    
  **OSNOVNI TOK**  
  <img src="../img/diagrami_zaporedja/Brisanje_oglasa_Osnovni.png">  
    
  **ALTERNATIVNI TOK**  
  Diagram prikazuje alternativni tok, kjer uporabnik ne potrdi brisanja oglasa.  
  <img src="../img/diagrami_zaporedja/Brisanje_oglasa_Alternativni.png">  
     
  **IZJEMNI TOK**  
  Diagram prikazuje izjemni tok, kjer uporabnik navigira proč od strani brez potrditve brisanja.  
  <img src="../img/diagrami_zaporedja/Brisanje_oglasa_Izjemni.png">   

  ### 3.11. Dodaj Hitri Kontakt

  **OSNOVNI TOK**  
  <img src="../img/diagrami_zaporedja/dodajHitriKontakt_osnovniTok_Premium.png">

  **ALTERNATIVNI TOK ADMIN**  
  Diagram prikazuje alternativni tok, kjer je akter tipa Admin  
  <img src="../img/diagrami_zaporedja/dodajHitriKontakt_OsnovniTok_Admin.png">

  **IZJEMNI TOK PREMIUM**
  <img src="../img/diagrami_zaporedja/dodajHitriKontakt_izjemniTok_Premium.png">

  **IZJEMNI TOK ADMIN**  
  Diagram prikazuje alternativni izjemni tok, kjer je akter tipa Admin  
  <img src="../img/diagrami_zaporedja/dodajHitriKontakt_izjemniTok_admin.png">


     
  ### 3.12. Ogled hitrih kontaktov
    
  **OSNOVNI TOK**  
  <img src="../img/diagrami_zaporedja/ogled_hitrih_kontaktov_premium.png">

  **ALTERNATIVNI TOK**   
  Diagram prikazuje alternativni tok, kjer je akter tipa Admin  
  <img src="../img/diagrami_zaporedja/ogled_hitrih_kontaktov_admin.png">

  ### 3.13. Odstranitev uporabnika iz hitrih kontaktov
    
  **OSNOVNI TOK**  
  <img src="../img/diagrami_zaporedja/odstranitev_uporabnika_iz_hitrih_kontaktov_premium.png">

  **ALTERNATIVNI TOK**   
  Diagram prikazuje alternativni tok, kjer je akter tipa Admin  
  <img src="../img/diagrami_zaporedja/odstranitev_uporabnika_iz_hitrih_kontaktov_admin.png">
    
  ### 3.14. Odziv na oglas  
    
  **OSNOVNI TOK**  
  <img src="../img/diagrami_zaporedja/Odziv_osnovni.png">  

  **IZJEMNI TOKOVI**  
  Diagram prikazuje izjemni tok, kjer uporabnik vnese neustrezne podatke.  
  <img src="../img/diagrami_zaporedja/Odziv_izjemni1.png">  
    
  Diagram prikazuje izjemni tok, kjer se na oglas poskusi odzvati neprijavljen uporabnik.  
  <img src="../img/diagrami_zaporedja/Odziv_izjemni2.png">  

      
  ### 3.16. Podaj oceno profilu  
    
  **OSNOVNI TOK**  
  <img src="../img/diagrami_zaporedja/Ocena_profila_osnovni.png">  
    
  **IZJEMNI TOKOVI**  
  Diagram prikazuje izjemni tok, kjer uporabnik ne potrdi podajanja ocene.  
  <img src="../img/diagrami_zaporedja/Ocena_profila_izjemni1.png">  
    
  Diagram prikazuje izjemni tok, kjer uporabnika v bazi nimata zapisane nobene interakcije.  
  <img src="../img/diagrami_zaporedja/Ocena_profila_izjemni2.png">  
    
    
  ### 3.17. Iskanje oglasov  
    
  **OSNOVNI TOK**  
  <img src="../img/diagrami_zaporedja/Iskanje_oglasov_osnovni.png">  
    
  **ALTERNATIVNI TOK**  
  Diagram prikazuje alternativni tok, kjer si oglase ogleduje neprijavljen uporabnik.  
  <img src="../img/diagrami_zaporedja/Iskanje_oglasov_alternativni.png">  
    
  **IZJEMNI TOKOVI**  
  Diagram prikazuje izjemni tok, kjer odpove zunanji sistem.  
  <img src="../img/diagrami_zaporedja/Iskanje_oglasov_izjemni1.png">  
    
  Diagram prikazuje izjemni tok, kjer uporabnik vnese nedovoljene znake v iskalni niz.  
  <img src="../img/diagrami_zaporedja/Iskanje_oglasov_izjemni2.png">  
    

  ### 3.18. Podaj komentar profilu
    
  **OSNOVNI TOK**   
  <img src="../img/diagrami_zaporedja/dodajanje_komentarja_profilu_osnovni.png">

  **ALTERNATIVNI TOK**  
  Diagram prikazuje alternativni tok, kjer uporabnik ureja svoj že obstoječi komentar.  
  <img src="../img/diagrami_zaporedja/dodajanje_komentarja_profilu_alternativni.png">  

  **IZJEMNI TOKOVI**  
  Diagram prikazuje izjemni tok, kjer uporabnik med podajanjem komentarja navigira
  stran od zaslonske maske.  
  <img src="../img/diagrami_zaporedja/dodajanje_komentarja_profilu_izjemni1.png">  

  Diagram prikazuje izjemni tok, kjer uporabnik poizkusi podati komentar, vendar še nima interakcij s tem uporabnikom, ki bi mu dovoljevale dodajanje komentarja.  
  <img src="../img/diagrami_zaporedja/dodajanje_komentarja_profilu_izjemni2.png">  


  ### 3.19. Brisanje komentarjev  
    
  **OSNOVNI TOK**  
  <img src="../img/diagrami_zaporedja/brisanje_komentarja_osnovni.png">

  **IZJEMNI TOKOVI**   
  Diagram prikazuje izjemni tok, kjer uporabnik zapre pojavitveno okno, ki se pojavi ob kliku na brisanje komentarja.  
  <img src="../img/diagrami_zaporedja/brisanje_komentarja_izjemni1.png">

  Diagram prikazuje izjemni tok, kjer uporabnik zavrne potrditev v oknu, ki se pojavi ob kliku na brisanje komentarja.  
  <img src="../img/diagrami_zaporedja/BrisanjeKomentarja_izjemni2.png">
    


  
