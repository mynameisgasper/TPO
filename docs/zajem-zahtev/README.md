# Dokument zahtev

|                             |                                                         |
| :-------------------------- | :------------------------------------------------------ |
| **Naziv projekta**          | Dog Walkers                           |
| **Člani projektne skupine** | Gašper Božič, Gašper Kolbezen, Grega Kranjec, Matevž Vreš in Gašper Štepec |
| **Kraj in datum**           | Ljubljana, April 2021                                  |

## Povzetek projekta

Aplikacija ponuja 3 različne profile: navaden uporabnik, organizacija ter premium uporabnik. Vsem je omogočeno brskanje po oglasih malih ljubljenčkov, ki potrebujejo varstvo. Oglasi vključujejo lokacijo prevzema ter valuto pretvorjeno po meri uporabnika. Profile uporabnikov je mogoče komentirati in ocenjevati glede na izkušnjo z uporabnikom ali njihovim štirinogim prijateljem. Skrbniki psov se lahko odzivajo na oglase lastnikov psov, medtem ko lahko lastniki te oglase kreirajo, urejajo ter brišejo. Premium uporabnik pa poleg vseh teh funkcionalnosti pridobi še pregled nad zgodovino sprehodov psov ter možnost dodajanja profilov med hitre kontakte.

## 1. Uvod


Aplikacija Dog Walkers rešuje problematiko pomanjkanja časa skrbi za domače živali, predvsem časa za sprehode. Mnogi zaradi službenih ali drugačnih obveznosti, kot je npr. dopust, ne morejo posvetiti časa domači živali vendar si želijo nekoga, ki bi za nekaj časa poskrbel za njihovega ljubljenčka. Obstaja pa tudi veliko ljudi, ki bi si želelo ukvarjati z živalimi zaradi denarja ali pa ker vedo da živali ne morejo nuditi dovolj časa, vendar ga imajo dovolj nekaj ur tedensko. Ponujamo rešitev, ki ti dve skupini ljudi poveže na našem portalu Dog Walkers.  

## 2. Uporabniške vloge

**Neprijavljen uporabnik**  
Neprijavljen uporabnik si lahko ogleda seznam vseh oglase ter posamezne oglase. Oglase lahko tudi išče preko vgrajenega iskalnika. Vsak oglas ima vsebuje tudi funkcionalnosti lokacije prevzema psa ter pretvorbe valut, tako da ju vidi tudi neprijavljen uporabnik. Vsak neprijavljen uporabnik se ima možnost tudi registrirati ali prijaviti v sistem.  
  
**Organizacija**  
Organizacija je uporabniška vloga namenjena podjetje, ki želijo ponuditi svoje produkte lastnikom psov, zavetiščom ki potrebujejo prostovoljce itd. Organizacija ima najbolj osnovne funkcionalnosti; vse funkcionalnosti neprijavljenega uporabnika, in pa še možnost kreiranja, urejanja in brisanja svojih oglasov.

**Navaden uporabnik**  
Navaden uporabnik je uporabniška vloga namenjena tako skrbnikom psov kot tudi lastnikom psov saj se ti vlogi pogosto mešajo. Navaden uporabnik ima omogočen ogled seznama vseh oglasov ter posamezne oglase (s pripadujočima lokacija prevzema psa ter pretvorba valut), urejanje uporabniškega profila, iskanje oglasov, podajanje ocene ter podajanje komentarja profilu in še možnost ustvarjanja, urejanja ter brisanje posameznega oglasa ki ga je objavil sam, hkrati pa ima dodatno še možnost se odzivati na oglase ostalih uporabnikov.  
   
**Premium uporabnik**  
Premium uporabnik ima vse funkcionalnosti navadnega uporabnika ter dodaja še možnost ogleda zgodovine sprehodov psov ter dodajanja profilov pod hitre kontakte. Premium uporabniku se tudi ne prikazujejo reklame. 
  
**Admin**  
Admin ima vse funkcionalnosti kot premium uporabnik in možnost urejanja in brisanja katerega koli oglasa na portalu DogWalkers kot tudi brisanje vseh komentarjev na profilih uporabnikov.  

## 3. Slovar pojmov

- **Uporabnik:** Kdorkoli, ki uporablja sistem.
- **Račun:** Zapis v sistemu, ki uporabniku opredeljuje eno izmed uporabniških vlog.
- **Registracija:** Postopek s katerim se uporabniku ustvari račun.
- **Registriran uporabnik:** Uporabnik, ki ima v sistemu ustvarjen račun.
- **Prijavljen uporabnik:** Uporabnik, ki je prijavljen v sistem.
- **Neprijavljen uporabnik:** Termin se nanaša na uporabniško vlogo z istim imenom.
- **Navaden uporabnik:** Termin se nanaša na uporabniško vlogo z istim imenom.
- **Premium uporabnik:** Termin se nanaša na uporabniško vlogo z istim imenom.
- **Admin:** Termin se nanaša na uporabniško vlogo z istim imenom.
- **Organizacija:** Termin se nanaša na uporabniško vlogo z istim imenom.
- **Oglas:** Vsebinska predstavitev storitve ali izdelka, ki jo uporabniki iščejo ali ponujajo. Vsebuje lahko slike, opis, ceno, ipd.
- **Reklama:** Obvestilo s propagandnim namenom.
- **Profil:** Stran ki prikazuje podatke o registriranem uporabniku.
- **Prijava:** Postopek s katerim uporabnika sistem prepozna kot registriranega uporabnika.
- **Ocena:** Število z intervala [1, 5], ki predstavlja mnenje uporabnikov o nekem drugem uporabniku.
- **Interakcija:** Odziv enega uporabnika na oglas drugega.

## 4. Diagram primerov uporabe

![Use Case Diagram](../img/use_case_diagram.png)  

## 5. Funkcionalne zahteve

### **5.1 REGISTRACIJA UPORABNIKA**

### **Povzetek funkcionalnosti**

**Neprijavljen (neregistriran) uporabnik** lahko ustvari nov uporabniški račun. 

### **Osnovni Tok**

1. Neprijavljen uporabnik  izbere funkcionalnost ustvari račun
2. Sistem odpre okno z vpisnimi polji za uporabniško ime, e-poštni naslov in geslo
3. Neprijavljen uporabnik vpiše uporabniško ime, e-poštni naslov in nastavi geslo
4. Študent pritisne gumb za registracijo
4. Sistem preveri, če so vsi vnosi veljavni in če morda uporabnik s tem uporabniškim imenom ali e-poštnim naslovom obstaja
5. Sistem potrdi registracijo in na e-poštni naslov novega uporabnika pošlje potrditveno sporočilo

### Alternativni tokovi

Funkcionalnost nima alternativnih tokov

### **Izjemni Tokovi** 

- **Izjemni tok 1**  
  **1.1** Neprijavljen uporabnik v orodni vrstici izbere funkcionalnost ustvari račun  
  **1.2** Sistem odpre okno z vpisnimi polji za uporabniško ime, e-poštni naslov in geslo  
  **1.3** Neprijavljen uporabnik vpiše uporabniško ime, e-poštni naslov in nastavi geslo  
  **1.4** Študent pritisne gumb za registracijo  
  *1.4* Sistem preveri, če so vsi vnosi veljavni in če morda uporabnik s tem uporabniškim imenom   ali e-poštnim naslovom obstaja  
  **1.5** Sistem javi, da uporabnik s tem uporabniškim imenom ali e-poštnim naslovom že obstaja.   Registracija ni uspela.   

- **Izjemni tok 2**  
  **2.1** Neprijavljen uporabnik v orodni vrstici izbere funkcionalnost ustvari račun  
  **2.2** Sistem odpre okno z vpisnimi polji za uporabniško ime, e-poštni naslov in geslo  
  **2.3** Neprijavljen uporabnik vpiše uporabniško ime, e-poštni naslov in nastavi geslo  
  **2.4** Študent pritisne gumb za registracijo  
  **2.5** Sistem preveri, če so vnosi veljavni in če morda uporabnik s tem uporabniškim imenom ali e-poštnim naslovom obstaja  
  **2.6** Sistem javi, da se gesli ne ujemata. Registracija ni uspela.  

- **Izjemni tok 3**  
  **3.1** Neprijavljen uporabnik v orodni vrstici izbere funkcionalnost ustvari račun  
  **3.2** Sistem odpre okno z vpisnimi polji za uporabniško ime, e-poštni naslov in geslo  
  **3.3** Neprijavljen uporabnik vpiše uporabniško ime, e-poštni naslov in nastavi geslo  
  **3.4** Študent pritisne gumb za registracijo  
  **3.5** Sistem preveri, če so vnosi veljavni in če morda uporabnik s tem uporabniškim imenom ali e-poštnim naslovom obstaja  
  **3.6** Sistem javi, da je e-poštni naslov neveljaven. Registracija ni uspela.  

### **Pogoji**

Uporabnik ne sme biti prijavljen 

### **Posledice**

V bazi je ustvarjen nov uporabniški račun za katerega se generira profilna stran


### **Posebnosti**

Geslo novega uporabnika mora biti zgoščeno s standaradom SHA-2


### **Prioriteta**
MUST have


### **Sprejemni testi**

- **Osnovni tok:** Poskusi se registrirati z veljavnimi podatki. Pričakovan rezultat je, da je registracija uspešna. 

- **Izjemni tok 1:** Poskusi se registrirati z uporabniškim imenom ali e-poštnim naslovom, ki že obstaja. Pričakovan rezultat je, da registracija ni uspešna. 

- **Izjemni tok 2:** Poskusi se registrirati z gesli, ki se ne ujemata. Pričakovan rezultat je, da sistem javi, da se gesli ne ojemata; registracija je neuspešna.

- **Izjemni tok 3:** Poskusi se registrirati z napačnimi znaki v e-poštnem naslovu (brez @ ali domene). Pričakovan rezultat je, da se sistem javi, da v e-poštni naslvo potrebuje @ oziroma domeno; registracija je neuspešna.
  
  
### **5.2 PRIJAVA UPORABNIKA**  

### **Povzetek funkcionalnosti**

**Admin, Navaden uporabnik, Premium Uporabnik in Organizacija** se lahko prijavijo v sistem. 

#### **Alternativni tok(ovi)**

Funkcionalnost nima alternativnih tokov

### **Osnovni Tok**

1. Neprijavljen uporabnik izbere funkcionalnost prijava
2. Sistem odpre okno z vpisnimi polji za uporabniško ime / e-poštni naslov in geslo
3. Neprijavleni uporabnik vnese podatke za prijavo
4. Sistem preveri, če vneseni uporabniški račun obstaja in če je geslo pravilno
5. Sistem javi, da je prijava uspela, prijavleni uporabnik je preosmerjen na domačo stran.


### **Izjemni Tokovi** 
- **Izjemni tok 1**  
  **1.1** Neprijavljen uporabnik izbere funkcionalnost prijava  
  **1.2** Sistem odpre okno z vpisnimi polji za uporabniško ime in geslo  
  **1.3** Neprijavleni uporabnik vnese podatke za prijavo  
  **1.4** Sistem preveri, če vneseni uporabniški račun obstaja in če je geslo pravilno  
  **1.5** Sistem neprijavlenem uporabniku sporoči, da ta uporabnik ne obstaja - prijava ni uspela  

- **Izjemni tok 2**  
  **2.1** Neprijavljen uporabnik izbere funkcionalnost prijava  
  **2.2** Sistem odpre okno z vpisnimi polji za uporabniško ime in geslo  
  **2.3** Neprijavleni uporabnik vnese podatke za prijavo  
  **2.4** Sistem preveri, če vneseni uporabniški račun obstaja in če je geslo pravilno  
  **2.5** Sistem neprijavlenem uporabniku sporoči, da je geslo napačno - prijava ni uspela   

### **Pogoji**

Uporabnik ne sme biti prijavljen 

### **Posledice**

Uporabnik ima dostop do funkcionalnosti, ki zahtevajo prijavljenega uporabnika

### **Posebnosti**

Geslo novega uporabnika mora biti zgoščeno s standaradom SHA-2


### **Prioriteta:**
MUST have


### **Sprejemni testi**

- **Osnovni tok:** Poskusi se prijaviti z veljavnimi podatki. Pričakovan rezultat je, da je prijava uspešna. 

- **Izjemni tok 1:** Poskusi se prijaviti z napačnim uporabniškim imenom. Pričakovan rezultat je, da sistem javi, da ta uporabnik ne obstaja - prijava je neuspešna.

- **Izjemni tok 2:** Poskusi se prijaviti z napačnim geslom. Pričakovan rezultat je, da sistem javi, da je geslo za tega uporabnika neveljavno - prijava je neuspešna.

### **5.3 UREJANJE UPORABNIŠKEGA PROFILA**


### **Povzetek funkcionalnosti**

**Admin, Navaden uporabnik, Premium Uporabnik in Organizacija** lahko urejajo nastavitve lastnega profila, ko so prijavljeni v aplikacijo. 


### **Osnovni Tok**

1. Prijavljen uporabnik izbere funkcionalnost ogled lastnega profila.
2. Sistem odpre zavihek s pregledom profila z uporabnikovimi podatki: ime, geslo, opis, e-poštni naslov, telefonska številka, kot tudi komentarje tega profila s strani drugih uporabnikov in oceno.
3. Prijavljen uporabnik preko izbire 'Urejaj' zahteva urejanje svojega profila.
4. Sistem s profilnega zavihka uporabnika preusmeri na obrazec s polji, v katerih je mogoče spreminjati uporabniške podatke (ime, geslo, opis, e-poštni naslov, telefonska številka).
5. Prijavljeni uporabnik spremeni željena vnosna polja.
6. Prijavljeni uporabnik izbere funkcionalnost shrani.
7. Sistem preveri ali so spremenjeni podatki zapisani z dovoljenimi znaki in omejene dolžine ter shrani spremembe in uporabnika iz obrazca vrne na ogled profila.


### **Alternativni Tokovi** 
Funkcionalnost nima alternativnih tokov

### **Izjemni Tokovi** 
- **Izjemni tok 1:**  
  **1.1.** Prijavljen uporabnik izbere funkcionalnost ogled profila   
  **1.2.** Izbere urejanje uporabniškega profila  
  **1.3.** Prijavljen uporabnik spremeni vnosna polja in uporabi nedovoljene znake.  
  **1.4.** Sistem ne dovoli shranjevanja in opozori na uporabljene nedovoljene znake.  

- **Izjemni tok 2:**  
  **2.1.** Prijavljen uporabnik izbere funkcionalnost ogled profila  
  **2.2.** Izbere urejanje uporabniškega profila  
  **2.3.** Prijavljen uporabnik spremeni vnosna polja in uporabi preveliko število znakov za vnosno polje.   
  **2.4.** Sistem ne dovoli shranjevanja in opozori na predolgo dolžino znakov v teh vnosnih poljih.  

- **Izjemni tok 3:**  
  **3.1.** Prijavljen uporabnik izbere funkcionalnost ogled profila  
  **3.2.** Izbere urejanje uporabniškega profila  
  **3.3.** Prijavljen uporabnik spremeni vnosna polja in uporabi nepravilne znake v poljih, ki zahtevajo poseben format (e-poštni naslov, telefonska številka).  
  **3.4.** Sistem ne dovoli shranjevanja in opozori na napačen format znakov v teh vnosnih poljih.  

- **Izjemni tok 4:**  
  **4.1.** Prijavljen uporabnik izbere funkcionalnost ogled profila   
  **4.2.** Izbere urejanje uporabnikega profila  
  **4.3.** Prijavljen uporabnik spremeni vnosna polja vendar ne potrdi shranjevanja sprememb.   
  **4.4.** Spremembev urejanju se ne shranijo.  


### **Pogoji**
Uporabnik mora biti registriran v sistemu in prijavljen.


### **Posledice**
Uporabnikovi osebni podatki so spremenjeni. Spremembe so vidne tudi ostalim uporabnikom sistema, ko si ogledajo njegov profil.


### **Posebnosti**
Funkcionalnost nima posebnosti


### **Prioriteta**
MUST have


### **Sprejemni testi**
  
- **Osnovni tok:** Prijavi se v sistem in poskusi spremeniti podatke na svojem profilu z dovoljenimi znaki. Pričakovan rezultat je, da je urejanje profila uspešno. 
- **Izjemni tok 2:** Prijavi se v sistem in poskusi spremeniti podatke na svojem profilu tako, da v vsaj eno vnosno polje vneseš preveč znakov. Pričakovan rezultat je, da sistem javi, da je preveč znakov v vnosnih polji
- **Izjemni tok 3:** Prijavi se v sistem in poskusi spremeniti podatke na svojem profilu z nedovoljenimi znaki. Pričakovan rezultat je, da sistem opozori, da so v polju nedovoljeni znak.
- **Izjemni tok 4:** Prijavi se v sistem, izberi urejanje svojega profila, spremeni nekaj podatkov a ne shrani sprememb. Nato ponovno naloži svoj profil. Pričakovan rezultat je, da profil ostane enak. Spremembe se niso shranile. 

  
### **5.4 PREGLED VSEH OGLASOV**

### **Povzetek funkcionalnosti**

Vsi uporabniki si lahko ogledajo seznam vseh oglasov s sliko psa ter osnovnimi podatki.

### **Osnovni Tok**

1. Po uspešnem prenosu strani se prikaže seznam vseh oglasov, ki so naloženi po 50 v straneh.

### **Alternativni tok**

Funkcionalnost nima alternativnih tokov

### **Izjemni Tok** 

Funckionalnost nima izjemnih tokov.

### **Pogoji**

Funkcionalnost nima nobenih pogojev za izvedbo.

### **Posledice**

Prikaže se seznam vseh aplikacij z nekaj osnovnimi podatki vsakega oglasa ter sliko psa ter ceno če je oglas skrbnika psov ali organizacije.

### **Posebnosti**

Funkcionalnost vključuje funkcionalnost **Pretvorba valut** za prikaz cen v uporabnikovi valuti.

### **Prioriteta**
MUST have

### **Sprejemni testi**

- **Osnovni tok:** Odpri spletno aplikacijo Dog Walkers in preveri ali se naložijo oglasi. Pričakovan rezultat je, da se naložijo oglasi. 


### **5.5  OGLED POSAMEZNEGA OGLASA**

### **Povzetek funkcionalnosti**

Vsi uporabniki si lahko ogledajo posamezni oglas. 

### **Osnovni Tok**

1. Uporabnik odpre aplikacijo, prikažejo se mu vsi oglasi.
2. Uporabnik pritisne na oglas
3. Na zaslonu se izpišejo vse informacije o oglasu

### **Alternativni tokovi**

1. Uporabnik odpre aplikacijo, prikažeju se mu vsi oglasi
2. Uporabnik odpre profil enega od lastnikov psa
3. Na zaslonu se izpišejo informacije o profilu in oglasi tega lastnika
3. Uporabnik med oglasi lastnika izbere oglas
4. Na zaslonu se izpišejo vse informacije o oglasu 

### **Izjemni tokovi**
Funkcionalnost nima izjemnih tokov

### **Pogoji** 

Ni posebnih pogojev

### **Posledice**

Odpre se oglas

### **Posebnosti**

Ni posebnosti

### **Prioriteta**
MUST have

### **Sprejemni testi**

- Pritisni na oglas, preveri če se odpre. 
- Odpri profil nekega uporabnika in poskusi odpreti oglas na profilni strani


### **5.6 OGLED LOKACIJE PREVZEMA**

### **Povzetek funkcionalnosti**

Vsi uporabniki si lahko ogledajo lokacijo prevzema posameznega oglasa.

### **Osnovni Tok**

1. Uporabnik odpre oglas
2. Na oglasu pritisne na gumb "prikaži lokacijo prevzema"
3. Izpiše se google zemljevid na katerem je označena lokacija prevzema

### **Alternativni tokovi**
Funkcionalnost nima alternativnih tokov

### **Izjemni tokovi**
Funkcionalnost nima izjemnih tokov

### **Pogoji** 

Ni posebnih pogojev

### **Posledice**

Odpre se zemljevid

### **Posebnosti**

Ni posebnosti

### **Prioriteta**
MUST have

### **Sprejemni testi**

- Poskusi odpreti zemljevid na posameznem oglasu


### **5.7 OGLED PROFILA**

### **Povzetek funkcionalnosti**
Vsak **prijavljen uporabnik** ima možnost ogleda profila kateregakoli drugega uporabnika. Na strani profila so prikazani splošni javni podatki uporabnika.

### **Osnovni tok**
1. Uporabnik izbere funkcionalnost brskanja po profilih
2. Sistem prikaže vnosno polje za niz, s katerim uporabnik poizveduje po podatkovni bazi uporabnikov
3. Uporabnik ob izvedbi iskanja (pritisk na gumb "išči" oz. pritisk na tipko *enter*) inicializira poizvedbo
4. Uporabniku se prikaže seznam najboljših ustrezanj glede na ime uporabnikov.
5. Uporabnik izbere željen element seznama, in s klikom nanj sproži povezavo na stran profila uporabnika
6. Na strani profila so nato izpisani vsi javni podatki izbranega uporabnika

### **Alternativni tokovi**
#### **Ogled profila preko oglasa**
Ob vsakem oglasu je zapisan tudi uporabnik, ki ga je ustvaril.
1. Uporabnik si ogleduje oglase. 
2. Za nek specifičen oglas si želi ogledati profil uporabnika, ki ga je ustvaril
3. S klikom na ime ustvarjatelja (ime se nahaja ob prikazu oglasa in služi kot povezava do strani profila uporabnika) sistem uporabnika preumseri na stran profila ustvarjatelja.

#### **Ogled profile preko zgodovine sprehodov - SAMO PREMIUM UPROABNIKI**
Ob vsakem zapisu sprehoda je podana tudi povezava na stran profila sprehajalca/skrbnika v obliki imena sprehajalca
1. Uporabnik si ogleduje zgodovino sprehodov sovjega/ih psa/ov
2. Uporabni si želi ogledati profil sprehajalca/skrbnika, ki je sprehajal njegovega psa
3. S klikom na povezavo (ime sprehajalca) sistem uporabnika preusmeri na stran profila sprehajalca/skrbnika

### **Izjemni tokovi**
1. Uporabnik izbere funkcionalnost brskanja po profilih
2. Sistem prikaže vnosno polje za niz, s katerim uporabnik poizveduje po podatkovni bazi uporabnikov
3. Uporabnik ob izvedbi iskanja (pritisk na gumb "išči" oz. pritisk na tipko *enter*) inicializira poizvedbo
4. V primeru, da poizvedba na najde niti enega ustreznega ujemanja, se uporabniku prikaže sporočilo o prazni poizvedbi
5. uporabnik lahko nato ponovno vpiše niz v vnosno polje za brskanje oz zapusti funckionalost.

### **Pogoji**
Uporabnik mora biti prijavljen v sistem, za drugega izmed alternativnih tokov pa mora imeti poleg omenjenega tudi vlogo **premium uporabnika**.

### **Posledice**

Uporabniku so izpostavljeni javni podatki drugega uporabnika, ki jih lahko uporabnik uporabi za kontakt oz. subjetkivno oceno ogledanega uporabnika.

### **Posebnosti**
Pri ogledu profila uporabnika ni posebnosti.

### **Prioriteta**
MUST have

### **Sprejemni testi**

- Prijavi se kot navaden uporabnik in poišči ter si oglej profil drugega uporabnika
- Preko iskanja poskusi navigirati na stran profila uporabniškega računa, ki ne obstaja
- Prijavi se v sistem in izberi funkcionalnost **ogled oglasa**, nato si preko oglasa poskusi ogledati profil uporabnika, ki ga je ustvaril
- Prijavi se kot **premium uporabnik** in si preko zgodovine sprehodov poskusi ogledati profil enega izmed uporabnikov

### 5.8 KREACIJA OGLASA

### **Povzetek funkcionalnosti**
Vsak **prijavljen uporabnik** ima možnost ustvaritve novega oglasa, v katerem lahko nudi pomoč pri osrkbi (sprehajanje) ali pa povpraševanje po pomoči za oskrbo (sprehajanje)
### **Osnovni tok**
1. Uporabnik izbere funkcionalnost "ustvari nov oglas"
2. Uporabnik izbere tip oglasa, kjer ločimo tip "povpraševanja" in "ponudbe"
3. Uporabnik v zahtevana vnosna polja vnese zahtevano vsebino za oglasa, ki vključuje:
   - slikovno gradivo oglasa (neobvezno)
   - opis oglasa (obvezno)
   - lokacija prevzema psa (obvezno)
   - ceno (neobvezno)
4. Uporabnik nato pritisne na gumb "objavi oglas"
5. Sistem kreira nov oglas s podano vsebino in ga objavi na spletni strani - oglas je sedaj dostopen in viden javnosti

### **Alternativni tokovi**
Kreacija oglasa nima alternativnih tokov, saj je lahko ustvarjena le preko osnovnega toka

### **Izjemni tok**
1. Uporabnik izbere funkcionalnost "ustvari nov oglas"
2. Uporabnik izbere tip oglasa, kjer ločimo tip "povpraševanja" in "ponudbe"
3. Uporabnik v zahtevana vnosna polja zahtevane vsebine ne vnese v celoti
4. Uporabnik nato pritisne na gumb "objavi oglas"
5. Sistem uporabniku prikaže obvestilo o neveljavnem obrazcu, ki ga mora uporabnik nato popraviti

### **Pogoji**
Uporabnik mora biti prijavljen v sistem.

### **Posledice**
Ustvarjen je nov oglas, ki se prikazuje ostalim uporabnikom, ki brskajo po oglasih in z njim lahko interaktirajo oz. se nanj odzovejo. Kreator oglasa je posledično bolj izpostavljen uporabnikom spletne platforme.

### **Posebnosti**
Funkcionalnost nima posebnosti

### **Prioriteta**
MUST have

### **Sprejemni testi**
- poskusi ustvariti oglas brez opisa
- poskusi ustvariti oglas brez označene lokacije prevzema

### 5.9 VZDRŽEVANJE OGLASA

### **Povzetek funkcionalnosti**
Vsak **prijavljen uporabnik**, ki je ustvaril vsaj en oglas ima možnost vzdrževanja svojih oglasov
### **Osnovni tok**
1. Uporabnik navigira na svoj profil
2. Uporabnik navigira na razdelek "moji oglasi"
3. Uporabniku se prikaže seznam trenutno aktivnih oglasov
4. Uporabnik si izbere oglas, ki ga želi urejati/vzdrževati
5. Uporabniku se nato prikaže master-detail vzorec oglasa z vnosnimi polji, ki so že populirana z že prej vnešenimi podatki
6. Uporabnik v vnosnih poljih dela poljubne spremembe, kjer se drži zahtev vsebine oglasa
7. Po končanih spremembah uporabnik pritisne na gumb "posodobi oglas"

### **Alternativni tokovi**
Vzdrževanje oglasa nima alternativnih tokov, saj je oglas lahko vzdrževan le preko osnovnega toka

### **Izjemni tok**
1. Uporabnik navigira na svoj profil
2. Uporabnik navigira na razdelek "moji oglasi"
3. Uporabniku se prikaže seznam trenutno aktivnih oglasov
4. Uporabnik si izbere oglas, ki ga želi urejati/vzdrževati
5. Uporabniku se nato prikaže master-detail vzorec oglasa z vnosnimi polji, ki so že populirana z že prej vnešenimi podatki
6. Uporabnik v vnosnih poljih dela poljubne spremembe ampak se pri tem ne drži zahtev glede vsebine
7. Po končanih spremembah uporabnik pritisne na gumb "posodobi oglas"
8. Sistem uporabniku javi napako in mu sporoči, da so podatki vnešeni v vnosna polja nepopolni/nepravilni
9. Uporabnik mora za uspešno posodobitev ponovno pregledati vnešene podatke in jih po potrebi doploniti/popraviti

### **Pogoji**
Uporabnik mora biti prijavljen v sistem in imeti že ustvarjene oglase.

### **Posledice**
Po posodobitvi oglasa se nova verzija oglasa zapiše v sistem. Po zapisu je nato vsem uporabnikom, ki brskajo po oglasih, prikazana najnovejša verzija oglasa.

### **Posebnosti**
Uporabnik lahko posodobi slikovno gradivo oglasa v obliki videoposnetka le, če ima uporabnik vlogo **premium uporabnika**.

### **Prioriteta**
MUST have

### **Sprejemni testi**
- prijavi se z navadnim uporabnikom, in poskusi urediti oglas, ki ne obstaja (navigacija preko url-ja)
- poskusi posodobiti oglas s praznim vnosnim poljem za opis oglasa
- poskusi posodobiti oglas s praznim vnosnim poljem za lokacijo prevzema

### 5.10 BRISANJE OGLASA

### **Povzetek funkcionalnosti**
Vsak **prijavljen uporabnik**, ki je ustvaril vsaj en oglas ima možnost izbrisa kateregakoli svojega oglasa
### **Osnovni tok**
1. Uporabnik navigira na svoj profil
2. Uporabnik navigira na razdelek "moji oglasi"
3. Uporabniku se prikaže seznam trenutno aktivnih oglasov
4. Uporabnik si izbere oglas, ki ga želi izbrisati
5. Uporabniku se nato prikaže master-detail vzorec oglasa z vnosnimi polji, ki so že populirana z že prej vnešenimi podatki
6. Sistem preveri ali ima uporabnik pravice za izbris oglasa
7. Uporabniku je prikazan gumb za izbris oglasa
8. Uporabnik pritisne na gumb za izbris oglasa - odpre se dialog okno, ki zahteva dodatno potrditev in opozori uporabnika, da je dejanvost nepovratna.
9. Uporabnik potrdi izbris, oglas je izbrisan

### **Alternativni tokovi**
Izbris oglasa nima alternativnih tokov, saj je to funkcionalnost možno izvesti le preko osnovnega toka

### **Izjemni tok**
1. Uporabnik navigira na svoj profil
2. Uporabnik navigira na razdelek "moji oglasi"
3. Uporabniku se prikaže seznam trenutno aktivnih oglasov
4. Uporabnik si izbere oglas, ki ga želi izbrisati
5. Uporabniku se nato prikaže master-detail vzorec oglasa z vnosnimi polji, ki so že populirana z že prej vnešenimi podatki
6. Sistem preveri ali ima uporabnik pravice za izbris oglasa
7. Uporabniku je prikazan gumb za izbris oglasa
8. Uporabnik pritisne na gumb za izbris oglasa - odpre se dialog okno, ki zahteva dodatno potrditev in opozori uporabnika, da je dejanvost nepovratna.
9. Uporabnik zapusti stran z odprtim pojavnim oknom oz. pojavno okno izgubi fokus - poskus izbrisa se razveljavi

### **Pogoji**
Uporabnik mora biti prijavljen v sistem in imeti že ustvarjene oglase.

### **Posledice**
Po izbrisu oglasa se zapis oglasa in vsi odzivi na ta oglas (odzivi se zbrišejo le, če je implementirana funkcionalnost **odziv na oglas** ) izbrišejo iz podatkovne baze. Vsem uporabnikom, ki so se odzvali na ta oglas se pošlje obvestilo, da je bil oglas izbirsan oz. je postal neveljaven (uporabnikom se pošljejo obvestila le, če je implementirana funkcionalnost **odziv na oglas** )

### **Posebnosti**
Pri izbrisu oglasa se mora uporabnik zavedati, da so poleg samega oglasa izbrisani zudi vsi odzivi, ki so shranjeni v sistemu in se nanašajo na ta oglas.

### **Prioriteta**
MUST have

### **Sprejemni testi**
- Prijavi se v sistem kot uporabnik, ki ima vsaj en oglas in poskusi izbrisati enega od svojih oglasov
- Prijavi se Prijavi se v sistem kot uporabnik, ki ima vsaj en oglas in izberi gumb za izbris oglasa a ne potrdi izbire ampak ponovno naloži stran.


### **5.11 DODAJANJE UPORABNIKA MED "HITRE KONTAKTE"**

### **Povzetek funkcionalnosti**
**Premium Uporabnik** lahko profile doda na seznam, preko katerega lahko do njih nato hitro dostopa

### **Osnovni tok**
1. Prijavljen uporabnik izbere funkcionalnost ogled profila drugega uporabnika.
2. Sistem preveri, če je uporabnikov račun tipa **premium uporabnik**
3. Uporabnik pritisne na gumb "Dodaj med hitre kontakte"
4. Prikazan profil se uporabniku shrani med "hitre kontakte"

### **Alternativni tokovi**
Funkcionalnost nima alternativnih tokov

### **Izjemni tok**
1. Prijavljen uporabnik izbere funkcionalnost ogled profila drugega uporabnika.
2. Sistem preveri, če je uporabnikov račun tipa **premium uporabnik**
4. Uporabnik pritisne na gumb "Dodaj med hitre kontakte"
5. Uporabnik ni **Premium Uporabnik** dostop je zavrnjen
6. Uporabnik je preusmerjen na "pop-up" okno, kjer lahko kupi **premium** račun

### **Pogoji**

Uporabnik mora biti prijavljen v sistem in biti lastnik **premium** računa

### **Posebnosti**

Funkcionalnost nima posebnosti

### **Posledice**

Profil se uporabniku prikaže med "hitrimi kontakti"

### **Prioriteta**

MUST have

### **Sprejemni testi**

- Prijavi se v račun s pravicami **Navadnega uporabnika** in si nek profil poskusi shraniti med "hitre kontakte".

- Prijavi se v račun s pravicami **Premium uporabnika** in si nek profil poskusi shraniti med "hitre kontakte". 

### **5.12 OGLED "HITRIH KONTAKTOV"**

### **Povzetek funkcionalnosti**
**Premium Uporabnik** lahko profile, ki jih je dodal na seznam, preko katerega lahko do njih nato hitro dostopa, iz seznama tudi odstrani

### **Osnovni tok**
1. Premium uporabnik ali admin se prijavi v sistem
2. Uporabnik pritisne na gumb "Hitri kontakti"
3. Uporabniku se prikaže stran s hitrimi kontakti

### **Alternativni tokovi**
Funkcionalnost nima alternativnih tokov

### **Izjemni tok**
Funkcionalnost nima izjemnega toka

### **Pogoji**

Uporabnik mora biti prijavljen v sistem in biti lastnik **premium** računa ali admin

### **Posledice**

Uporabniku se prikaže stran s "hitrimi kontakti"

### **Posebnosti**

Funkcionalnost nima posebnosti

### **Prioriteta**

MUST have

### **Sprejemni testi**

- Prijavi se v račun s pravicami **Premium uporabnika** in si oglej "hitre kontakte".



### **5.13 ODSTRANI PROFIL IZ "HITRIH KONTAKTOV"**

### **Povzetek funkcionalnosti**
**Premium Uporabnik** lahko profile, ki jih je dodal na seznam, preko katerega lahko do njih nato hitro dostopa, iz seznama tudi odstrani

### **Osnovni tok**
1. Prijavljen uporabnik izbere funkcionalnost ogled hitrih kontaktov
2. Sistem preveri, če je uporabnikov račun tipa **premium uporabnik** ali **admin**
3. Uporabnik pritisne na gumb za izbris profila iz hitrih kontaktov
4. Sistem izbriše profil iz hitrih kontaktov

### **Alternativni tokovi**
Funkcionalnost nima alternativnih tokov

### **Izjemni tokovi**

Funkcionalnost nima izjemnih tokov

### **Pogoji**

Uporabnik mora biti prijavljen v sistem in biti lastnik **premium** računa ali **admin**

### **Posebnosti**

Funkcionalnost nima posebnosti

### **Posledice**

Profil se uporabniku izbriše iz hitrih kontaktov

### **Prioriteta**

MUST have

### **Sprejemni testi**

- Prijavi se v račun s pravicami **Premium uporabnika** in si nek profil poskusi izbrisati iz "hitrih kontaktov".


### 5.14 ODZIV NA OGLAS

### **Povzetek funkcionalnosti**
Vsak **prijavljen uporabnik** se lahko odzove na poljuben oglas, ki si ga ogleduje
### **Osnovni tok**
1. Prijavljen uporabnik brska po oglasih in zagleda oglas, ki ustreza njegovim potrebam
2. Uporabnik klikne na gumb "kontakt" ob prikazanem oglasu
3. Sistem preveri ali je uporabnik prijavljen
4. Uporabnika se preusmeri na novo stran, kjer je prikazano vnosno polje za sporočilo
5. Po izpolnjenem vnosnem polju, kjer mora biti vnos skladen z zahtevmi, uporabnik pritisne na gumb "pošlji"
6. Kreatorju oglasa se pošlje poizvedba
7. V bazo podatkov se zapiše interakcija med uporabnikoma
8. Uporabnika se preusmeri nazaj na oglas

### **Izjemni tok**
1. Prijavljen uporabnik brska po oglasih in zagleda oglas, ki ustreza njegovim potrebam
2. Uporabnik klikne na gumb "kontakt" ob prikazanem oglasu
3. Sistem preveri ali je uporabnik prijavljen
4. Uporabnika se preusmeri na novo stran, kjer je prikazano vnosno polje za sporočilo
5. Po izpolnjenem vnosnem polju, kjer vnos ni skladen z zahtevmi, uporabnik pritisne na gumb "pošlji"
6. Sistem uporabniku sporoči napako in ga pozove naj pregleda svoje vnose in jih ustrezno popravi/dopolne.

### **Izjemni tok**
1. Neprijavljen uporabnik brska po oglasih in zagleda oglas, ki ustreza njegovim potrebam
2. Uporabnik klikne na gumb "kontakt" ob prikazanem oglasu
3. Sistem preveri ali je uporabnik prijavljen
4. Uporabnika se preusmeri na stran za registracijo

### **Alternativni tokovi**
Odziv na oglas nima alternativnih tokov, odziv je možno izvesti le preko osnovnega toka

### **Pogoji**
Funkcionalnost nima pogojev.

### **Posledice**
Po poslanem odzivu se kreatorju oglasa pod razdelkom "odzivi oglasa" pri oglasu, na katerega se je nekdo odzval, doda nov element (odziv), ki ga lahko nato kreator oglasa pregleda in nato kontaktira pošiljatelja preko elektronske pošte ali telefonske številke.

### **Posebnosti**
Pri odzivu na oglas je potrebno paziti, da so podatki o pošiljatelju zapisni v pravilnem formatu.

### **Prioriteta**
SHOULD have

### **Sprejemni testi**
- Prijavi se v sistem in se poskusi odzvati na oglas z vnosom ustreznih podatkov
- Prijavi se v sistem in se poskusi odzvati na oglas z vnosom neustreznih podatkov
- Poskusi se odzvati na oglas z neprijavljenim uporabnikom


### **5.15 PRETVORBA VALUTE**

### **Povzetek funkcionalnosti**
Prijavljenemu uporabniku se cene prikažejo v izbrani valuti

### **Osnovni tok**
1. Prijavljen uporabnik izbere funkcionalnost ogled posameznega oglasa
2. Sistem preveri ali ima oglas dodano ceno
3. Sistem preveri katero valuto ima uporabnik izbrano
4. Sistem ceno pretvori v izbrano valuto
5. Na zaslonu se cena prikaže v izbrani valuti

### **Alternativni tokovi**
Funkcionalnost nima alternativnih tokov

### **Izjemni tok**
1. Prijavljen uporabnik izbere funkcionalnost ogled posameznega oglasa
2. Sistem preveri ali ima oglas dodano ceno
3. Sistem preveri katero valuto ima uporabnik izbrano
4. Sistem poskusi pretvoriti ceno a to zaradi odpovedi strežnika ne uspe
5. Na zaslonu se cena prikaže v originalni valuti

### **Pogoji**

Uporabnik mora biti prijavljen v sistem

### **Posebnosti**

Funkcionalnost zahteva dostopnost in delovanje zunanjega sistema

### **Posledice**
Cene se prikažejo v uporabniku izbrani valuti

### **Prioriteta**

SHOULD have

### **Sprejemni testi**

- Prijavi se v uporabniški račun in si izberi valuto. Nato preveri, če se ti cene na oglasih pokažejo v izbrani valuti. 


### **5.16 PODAJ OCENO PROFILU**

### **Povzetek funkcionalnosti**

**Admin, Navaden uporabnik, Premium Uporabnik in Organizacija** lahko podajo kvantitativno oceno profilu s katerim so vsaj enkrat stopili v kontakt oziroma opravili medsebojno storitev, katere namen nudi aplikacija. 


### **Osnovni Tok**
1. Prijavljen uporabnik izbere funkcionalnost ogled profila drugega uporabnika.
2. Uporabnik pritisne na gumb "Podaj oceno"
3. Sistem preveri, če imata uporabnika v bazi zapisano vsaj eno interakcijo.
4. Sistem odpre okno za izbiro ocene.
5. Uporabnik izbere oceno in potrdi izbor.
6. Sistem posodobi skupno oceno ravnokar ocenjenega profila glede na podano oceno.

### **Alternativni Tok** 
Funkcionalnost nima alternativnih tokov.

### **Izjemni Tokovi** 
**1.**  
  **1.1.**  Prijavljen uporabnik izbere funkcionalnost ogled profila drugega uporabnika.  
  **1.2.**  Izbere urejanje ocene.  
  **1.3.**  Prijavljen uporabnik spremeni oceno z lestvice in ne shrani izbire.  
  **1.4.**  Sistem ne spremeni ocene in ohrani staro vrednost.

**2.**  
  **2.1.**  Prijavljen uporabnik izbere funkcionalnost ogled profila drugega uporabnika.  
  **2.2.**  Prijavljen uporabnik s tem uporabnikom še ni opravil nobene storitve, zato mu je urejanje ocene onemogočeno.  
  **2.3.**  Sistem zakrije izbiro urejanja ocene in izpiše obvestilo.


### **Pogoji**
Uporabnik mora biti registriran v sistemu in prijavljen.

### **Posledice**
Ocena profila, kateremu je uporabnik spreminjal svojo oceno se spremeni. Spremembe so vidne tudi ostalim uporabnikom v sklopu skupne ocene uporabnika, ko si ogledajo njegov profil.


### **Posebnosti**
Funkcionalnost nima posebnosti


### **Prioriteta:**
COULD have


### **Sprejemni testi**

- Prijavi se v sistem kot uporabnik, ki ima v bazi vsaj eno interakcijo z drugim uporabnikom in temu uporabniku poskusi dodati oceno
- Prijavi se v sistem kot uporabnik, ki ima v bazi vsaj eno interakcijo z drugim uporabnikom in temu uporabniku poskusi dodati oceno, a izbire ne potrdi ampak ponovno naloži stran. Preveri če je ocena ostala nespremenjena
- Prijavi se v sistem kot uporabnik in poskusi dodati oceno uporabniku s katerim nimaš zgodovine

### 5.17 ISKANJE OGLASOV - SEARCH

### **Povzetek funkcionalnosti**
Vsak **prijavljen uporabnik** lahko brska po bazi oglasov, kjer lahko nastavi ustrezne filtre - lahko si ogleduje oglase le v določenem območju, ključnih besedah, itd.
### **Osnovni tok**
1. Uporabnik brska po oglasih
2. Uporabnik v vnosno polje, namenjeno za filtriranje po ključnih besedah, vpiše niz znakov (ključne besede, ločene s presledki)
3. Uporabnik pritsne na gumb "išči"
4. Uporabniku se prikaže seznam vseh ustreznih oglasov glede na njegov vnos v iskalno polje.

### **Izjemni tok**
1. Uporabnik brska po oglasih
2. Uporabnik v vnosno polje, namenjeno za filtriranje po ključnih besedah, vpiše niz znakov (ključne besede, ločene s presledki), kjer nizi vsebujejo nedovoljene znake
3. Uporabnik pritsne na gumb "išči"
4. Sistem uporabniku sporoči, da je iskalni niz napačno vnešen, ter izpostavi nedovoljene znake v nizu.

### **Alternativni tokovi**
***samo filter lokacije***
1. Uporabnik brska po oglasih
2. Uporabnik v polje za filtriranje lokacij vpiše lokacijo/ombočje
3. Uporabnik pritsne na gumb "išči"
4. Uporabniku se prikaže seznam vseh ustreznih oglasov glede na vnešeno lokacijo/območje.

***filter lokacije in iskalni niz***
1. Uporabnik brska po oglasih
2. Uporabnik v polje za filtriranje lokacij vpiše lokacijo/ombočje ter v polje za iskanje vpiše poljuben iskalni niz
3. Uporabnik pritsne na gumb "išči"
4. Uporabniku se prikaže seznam vseh ustreznih oglasov glede na vnešeno lokacijo/območje in vnešen iskalni niz

### **Pogoji**
Uporabnik mora biti prijavljen v sistem.

### **Posledice**
Uporabniku se prikaže izolirana/filtrirana množica oglasov

### **Posebnosti**
Ni posebnih posebnosti

### **Prioriteta**
COULD have

### Sprejemni testi
- Prijavi se v sistem in poskusi iskati oglase z iskalnim nizom, ki vsebuje samo dovoljene znake
- Prijavi se v sistem in poskusi iskati oglase z iskalnim nizom, ki vsebuje nedovoljene znake
- Prijavi se v sistem in poskusi iskati oglase s filtrom
- Prijavi se v sistem in poskusi iskati oglase s filtrom in iskalnim nizom


### **5.18 PODAJ KOMENTAR PROFILU**

### **Povzetek funkcionalnosti**

**Admin, Navaden uporabnik, Premium Uporabnik in Organizacija** lahko podajo komentar profilu s katerim so vsaj enkrat stopili v kontakt oziroma opravili medsebojno storitev, katere namen nudi aplikacija. 


### **Osnovni Tok**
1. Prijavljen uporabnik izbere funkcionalnost ogled profila drugega uporabnika.
2. Uporabnik izbere gumb "Dodaj/uredi komentar"
3. Sistem preveri, če imata uporabnika v bazi zapisano vsaj eno interakcijo.
4. Sistem uporabniku prikaže vnosno polje za komentar.
5. Uporabnik napiše komentar in izbere shrani.
6. Sistem posodobi komentar na tem profilu.


### **Alternativni Tok** 
Funkcionalnost nima alternativnih tokov


### **Izjemni Tokovi** 

- Prijavljen uporabnik izbere funkcionalnost ogled profila drugega uporabnika in izbere urejanje komentarja.
Prijavljen uporabnik napiše komentar v vnosno polje in ne shrani urejanja.
Sistem ne spremeni komentarja in ohrani staro vrednost.

- Prijavljen uporabnik izbere funkcionalnost ogled profila drugega uporabnika in izbere urejanje komentarja.
Prijavljen uporabnik napiše komentar v vnosno polje in uporabi nedovoljene znake.
Sistem ne dovoli shranjevanja komentarja in izpiše obvestilo.

- Prijavljen uporabnik izbere funkcionalnost ogled profila drugega uporabnika.
Prijavljen uporabnik s tem uporabnikom še ni opravil nobene storitve, zato mu je urejanje
komentarja onemogočeno. Sistem ne prikaže polja za urejanje in podajanje komentarja in izpiše obvestilo.

### **Pogoji**
Uporabnik mora biti registriran v sistemu in prijavljen.

### **Posledice**
Na profilu, ki je bil komentiran se pojavi nov komentar osebe, ki ga je napisala oziroma se posodbi njen že obstoječi komentar. Spremembe so vidne tudi ostalim uporabnikom, ko si ogledajo komentirani profil.

### **Posebnosti**
Funkcionalnost nima posebnosti

### **Prioriteta:**
WOULD have

### **Sprejemni testi**
**1.** Uporabnik mora biti registriran in prijavljen v sistem. Izbran profil mora biti (za pravilno shranjevanje komentarja)  lastnik psa, uporabnik, ki testira pa skrbnik psa. Uporabnik mora imeti opravljeno storitev s tem lastnikom psa. Za potrebe testa mora biti ta pogoj **NEIZPOLNJEN**  
**2.** Testiramo ali funkcija za komentar profila zazna neizpolnjen pogoj in ga ne shrani.  
  - Uporabnik gre na profil lastnika psa, ki **NE** izpolnjuje 2. pogoj napisan v točki 1.  
  - Izbere dodajanje komentarja
**3.** Pričakovan rezultat je opozorilo (v obliki pojavnega okna), ki opozarja na neizpolnjen pogoj. Polje za dodajanje komentarja se ne pojavi.  

### **5.19 BRISANJE KOMENTARJEV**

### **Povzetek funkcionalnosti**
**Prijavljen uporabnik** lahko iz profila izbriše svoj komentar. **Admin** pa lahko izbriše katerikoli komentar.

### **Osnovni tok**
1. Prijavljen uporabnik izbere funkcionalnost "ogled profila"
2. Uporabnik pritisne na gumb "Dodaj/uredi komentar"
3. Sistem preveri, če imata uporabnika v bazi zapisano vsaj eno interakcijo.
4. Sistem uporabniku prikaže vnosno polje za komentar.
5. Uporabnik pritisne na gumb "izbriši komentar".
6. Sistem preveri, če komentar obstaja.
7. Sistem odpre potrdilno okno
8. Uporabnik pritisne na gumb za potrditev
9. Sistem izbriše komentar na tem profilu

### **Alternativni tok**

1. Admin izbere funkcionalnost "ogled profila"
2. Admin pritisne na gumb za brisanje komentarja
3. Sistem odpre potrdilno okno
4. Admin pritisne na gumb za potrditev
6. Sistem izbriše komentar na tem profilu

### **Izjemni tok**
1. Izjemni tok 1:  
  1.1 Prijavljen uporabnik izbere funkcionalnost "ogled profila"  
  1.2 Uporabnik pritisne na gumb "Dodaj/uredi komentar"  
  1.3 Sistem preveri, če imata uporabnika v bazi zapisano vsaj eno interakcijo.  
  1.4 Sistem uporabniku prikaže vnosno polje za komentar.  
  1.5 Uporabnik pritisne na gumb "izbriši komentar".  
  1.6 Sistem preveri, če komentar obstaja.  
  1.7 Sistem uporabnika obvesti, da komentar ne obstaja.  

2. Izjemni tok 2:  
  2.1 Prijavljen uporabnik izbere funkcionalnost "ogled profila"  
  2.2 Uporabnik pritisne na gumb "Dodaj/uredi komentar"  
  2.3 Sistem preveri, če imata uporabnika v bazi zapisano vsaj eno interakcijo.  
  2.4 Sistem uporabniku prikaže vnosno polje za komentar.  
  2.5 Uporabnik pritisne na gumb "izbriši komentar".  
  2.6 Sistem preveri, če komentar obstaja.  
  2.7 Sistem odpre potrdilno okno  
  2.8 Uporabnik navigira proč od strani
  2.9 Sistem ne izbriše komentarja

3. Izjemni tok 3:  
  3.1 Admin izbere funkcionalnost "ogled profila"  
  3.2 Admin pritisne na gumb za brisanje komentarja  
  3.3 Sistem odpre potrdilno okno  
  3.4 Admin navigira proč od strani  
  3.5 Sistem ne izbriše komentarja

4. Izjemni tok 4:  
  4.1 Prijavljen uporabnik izbere funkcionalnost "ogled profila"  
  4.2 Uporabnik pritisne na gumb "Dodaj/uredi komentar"  
  4.3 Sistem preveri, če imata uporabnika v bazi zapisano vsaj eno interakcijo.  
  4.4 Sistem ne prikaže polja za urejanje in podajanje komentarja in izpiše obvestilo. 

### **Pogoji**
Uporabnik mora biti prijavljen kot admin. 

### **Posledice**

Komentar je izbrisan.

### **Posebnosti**

Funkcionalnost nima posebnosti.

### **Prioriteta**

WOULD have

### **Sprejemni testi**

- Prijavi se v sistem kot uporabnik, ki ima v bazi vsaj eno interakcijo z drugim uporabnikom in temu uporabniku poskusi izbrisati komentar
- Prijavi se v sistem kot admin in nekemu uporabniku poskusi izbrisati komentar
- Prijavi se v sistem kot uporabnik, ki ima v bazi vsaj eno interakcijo z drugim uporabnikom in temu uporabniku poskusi izbrisati komentar ki ne obstaja
- Prijavi se v sistem kot uporabnik, ki ima v bazi vsaj eno interakcijo z drugim uporabnikom in temu uporabniku poskusi izbrisati komentar, a izbire ne potrdi ampak ponovno naloži stran. Preveri če je komentar ostal
- Prijavi se v sistem kot admin in nekemu uporabniku poskusi izbrisati komentar, a izbire ne potrdi ampak ponovno naloži stran. Preveri če je komentar ostal
- Prijavi se v sistem kot uporabnik in poskusi izbrisati komentar uporabniku s katerim nimaš interakcije

### **5.20 OGLED ZGODOVINE SPREHODOV**

### **Povzetek funkcionalnosti**
**Premium Uporabnik** si lahko ogleda zgodovino sprehodov njegovega/ih psa/ov

### **Osnovni tok**
1. Uporabnik izbere funkcionalnost *ogled lastnega profila*
2. Uporabnik na svojem profilu izbere funkcionalnost *zgodovina sprehodov*
3. Sistem preveri če ima uporabnik pravico dostopa do te funkcionalnosti
4. Na zaslonu se izpiše zgodovina vseh sprehodov

### **Izjemni tok**
1. Uporabnik izbere funkcionalnost *ogled lastnega profila*
2. Uporabnik na svojem profilu izbere funkcionalnost *zgodovina sprehodov*
3. Sistem preveri če ima uporabnik pravico dostopa do te funkcionalnosti
4. Uporabnik ni **Premium Uporabnik** dostop je zavrnjen
5. Uporabnik je preusmerjen na "pop-up" okno, kjer lahko kupu **premium** račun

### **Pogoji**

Uporabnik mora biti prijavlen v sistem in biti lastnik **premium** računa

### **Posledice**

Prikaže se zgodovina vseh sprehodov uporabnika

### **Posebnosti**

Funkcionalnost nima posebnosti

### **Prioriteta**

WOULD have

### **Sprejemni testi**

- Prijavi se v račun s pravicami **Navadnega uporabnika** in preveri če lahko dostopaš funkcionalnost "ogled zgodovine sprehodov".

- V sistem zapiši en opravljen sprehod in preveri, če se ta izpiše v zgodovino sprehodov. 

## 6. Nefunkcionalne zahteve


### **6.1 Zahteve izdelka**
- sistem mora biti na voljo 99% časa
- sistem mora biti dosegljiv na javno dostopnem spletnem naslovu
- sistem uporabniku ne sme omogočati dostopa uporabniku do podatkov, do katerih ni pooblaščen.
- latenca zahtev ne sme presegati 500ms
- spletna stran deluje na večini mobilnih naprav
- sistem mora za komunikacijo uporabljati SSL certifikat (enkripcija)
### **6.2 Organizacijske zahteve**
- sistem mora imeti implementiran "ali si robot" preverjanje
- sistem mora omogočati vsaj enega administratorja
- sistem mora omogočati hranjenje varnostnih kopij 
### **6.3 Zunanje zahteve**
- sistem ne sme vsebovati vulgarnih besed
- sistem mora imeti obvezna obvestila o hranjenju podaktov in piškotkov
- sistem mora imeti izpostavljene ustrezne legalne dokumente

## 7. Prototipi vmesnikov

### **7.1 Osnutki zaslonskih mask**
**TO DO**  

### **7.2 Vmesniki do zunanjih sistemov**  
#### **Pretvornik valut ECB Exchange rate**  
Ob nalaganju strani, ki prikazuje seznam vseh oglasov, ob nalaganju posameznega oglasa ter ob kreiranju novega oglasa se bo klicala funkcija **converter(currency1, currency2, value)**, ki sprejme dva stringa kratic valut ter tabelo vrednosti imenovano *value*, ki vsebuje valute *currency1* katere želi pretvoriti v valuto *currency2*.  
Funkcija bo vrnila tabelo vrednosti pretvorjenih v valuto *currency2*  
  
*currency1* in *currency2* primer: 'EUR', 'USD',...  
*value* primer: 100, 200, 233.523,...  

#### **Google Maps API**  
Ob nalaganju strani, ki prikazuje posamezni oglas se bo klicala funkcija **initMap(lokacija)**, ki sprejme string naslova možnega prevzema psa.  
Funkcija prikaže zemljevid z označeno lokacijo možnega prevzema na zemljevidu.  
  
*lokacija* primer: "Ritoznoj 33, Slovenska Bistrica"  


