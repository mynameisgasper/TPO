# Dokument zahtev

|                             |                                                         |
| :-------------------------- | :------------------------------------------------------ |
| **Naziv projekta**          | Dog Walkers                           |
| **Člani projektne skupine** | Gašper Božič, Gašper Kolbezen, Grega Kranjec, Matevž Vreš in Gašper Štepec |
| **Kraj in datum**           | Ljubljana, April 2021                                  |

## Povzetek projekta

**TO-DO**

- Povzetek je, kot že vemo, celoten dokument, strnjen v največ 150 besed.

## 1. Uvod

**TO-DO**

Aplikacija Dog Walkers rešuje problematiko pomanjkanja časa skrbi za domače živali, predvsem časa za sprehode. Mnogi zaradi službenih ali drugačnih obveznosti, kot je npr. dopust, ne morejo posvetiti časa domači živali vendar si želijo nekoga, ki bi za nekaj časa poskrbel za njihovega ljubljenčka. Obstaja pa tudi veliko ljudi, ki bi si želelo ukvarjati z živalimi zaradi denarja ali pa ker vedo da živali ne morejo nuditi dovolj časa, vendar ga imajo dovolj nekaj ur tedensko. Ponujamo rešitev, ki ti dve skupini ljudi poveže na našem portalu Dog Walkers.  
   
Aplikacija ponuja 3 različne profile. Skrbnik psov, lastnik psa ter premium uporabnik. Vsem je omogočeno brskanje po oglasih malih ljubljenčkov, ki potrebujejo varstvo. Oglasi vključujejo lokacijo prevzema ter valuto pretvorjeno po meri uporabnika. Profile uporabnikov je mogoče komentirati in ocenjevati glede na izkušnjo z uporabnikom ali njihovim štirinogim prijateljem. Skrbniki psov se lahko odzivajo na oglase lastnikov psov, medtem ko lahko lastniki te oglase kreirajo, urejajo ter brišejo. Premium uporabnik pa poleg vseh teh funkcionalnosti pridobi še pregled nad zgodovino sprehodov psov ter možnost dodajanja profilov med hitre kontakte.

## 2. Uporabniške vloge



**Neprijavljen uporabnik**  
Neprijavljen uporabnik si lahko ogleda seznam vseh oglase ter posamezne oglase. Oglase lahko tudi išče preko vgrajenega iskalnika. Vsak oglas ima vsebuje tudi funkcionalnosti lokacije prevzema psa ter pretvorbe valut, tako da ju vidi tudi neprijavljen uporabnik. Vsak neprijavljen uporabnik se ima možnost tudi registrirati ali prijaviti v sistem.  
  
**Skrbnik psov**  
Skrbnik psov je prvi izmed prijavljenih uporabnikov. Vsi **prijavljenih uporabniki** imajo naslednje funkcionalnosti: ogled seznama vseh oglasov ter posamezne oglase (s pripadujočima lokacija prezema psa ter pretvorba valut), urejanje uporabniškega profila, iskanje oglasov, podajanje ocene ter podajanje komentarja profilu. Skrbnik psov ima še možnost se odzvati na oglase psov, ki potrebujejo skrbnika.  
  
**Lastnik psa**  
Lastnik psa ima vse funkcionalnosti **prijavljenega uporabnika**, ki so našteti pri Skrbniku psov, hkrati pa ima še možnost ustvarjanja, urejanja ter brisanje posameznega oglasa, ki ga je objavil sam.  
  
**Premium uporabnik**  
Premium uporabnik združuje vse funkcionalnosti Skrbnika psov ter Lastnika psa ter dodaja še možnost ogleda zgodovine sprehodov psov ter dodajanja profilov pod hitre kontakte.  
  
**Admin**  
Admin ima vse funkcionalnosti Skrbnika psov ter dodajanje in možnost urejanja in brisanja katerega koli oglasa na portalu DogWalkers.  

## 3. Slovar pojmov

**TO-DO**

- Natančno opredelite vse têrmine, ki jih boste uporabljali v nadaljevanju dokumenta.

## 4. Diagram primerov uporabe

![Use Case Diagram](../img/use_case_diagram.png)  

## 5. Funkcionalne zahteve

V tem razdelku podrobno opišite posamezne funkcionalnosti, ki jih vaša aplikacija ponuja svojim uporabnikom. Za vsako funkcionalnost navedite naslednje podatke:

### TO-DO Naziv zahteve
|MUST|SHOULD HAVE|COULD HAVE|WOULD HAVE|
| :-- | :-- | :-- | :-- |
| registracija uporabnika| odziv na oglas  |  iskanje oglasov - search  | podaj komentar profilu  |
| prijava uporabnika  | pretvorba valute  |  podaj oceno profilu  |   ogled zgodovine sprehodov  |
| urejanje uporabniškega profila  | | | |
| ogled posameznega oglasa | | | | | 
| ogled lokacije prevzema | | | | | 
| ogled profila | | | | 
| kreacija oglasa  | | | | 
| vzdrževanje oglasa | | | | 
| brisanje oglasa | | | | 
| pregled vseh oglasov | | | | 
| dodaj profil pod "hitre kontakte"| | | | 

### **Naziv Zahteve**

**Registracija uporabnika**

### **Povzetek funkcionalnosti**

**Neprijavlen (neregistriran) uporabnik** lahko ustvari nov uporabniški račun. 

### **Osnovni Tok**

1. Neprijavleni uporabnik  izbere funkcionalnost ustvari račun
2. Sistem odpre okno z vpisnimi polji za uporabniško ime, e-poštni naslov in geslo
3. Neprijavleni uporabnik vpiše uporabniško ime, e-poštni naslov in nastavi geslo
4. Študent pritisne gumb za registracijo
4. Sistem preveri, če so vsi vnosi veljavni in če morda uporabnik s tem uporabniškim imenom ali e-poštnim naslovom obstaja
5. Sistem potrdi registracijo in na e-poštni naslov novega uporabnika pošlje potrditveno sporočilo

### **Izjemni Tok** 

1. Neprijavleni uporabnik v orodni vrstici izbere funkcionalnost ustvari račun
2. Sistem odpre okno z vpisnimi polji za uporabniško ime, e-poštni naslov in geslo
3. Neprijavleni uporabnik vpiše uporabniško ime, e-poštni naslov in nastavi geslo
4. Študent pritisne gumb za registracijo
4. Sistem preveri, če so vsi vnosi veljavni in če morda uporabnik s tem uporabniškim imenom ali e-poštnim naslovom obstaja
5. Sistem javi, da uporabnik s tem uporabniškim imenom ali e-poštnim naslovom že obstaja oz. da se geslo ne ujema z podanimi omejitavmi

#### Alternativni tok(ovi)

**TO-DO**

- Navesti je potrebno vse alternativne tokove, ki jih označite kot **Alternativni tok 1**, **Alternativni tok 2**, itd.

#### **Pogoji**

**TO-DO**

- Kateri pogoji morajo biti izpolnjeni, da se funkcionalnost lahko prične izvajati?

- Pri funkcionalnosti Prijava na izpit mora biti uporabnik v sistem prijavljen kot študent ali referent. Če ni prijavljen ali pa če je prijavljen kot učitelj ali skrbnik, mu funkcionalnost ni na voljo.

Uporabnik ne sme biti prijavlen 

#### Posledice

**TO-DO**

- Navedite, kakšen je rezultat izvedbe osnovnega toka funkcionalnosti?

Ustvarjen je nov uporabniški račun

#### Posebnosti

**TO-DO**

- Ali realizacija funkcionalnosti zahteva kakšne posebnosti, kot je npr. dodatna strojna oprema?
- Se je potrebno držati kakšnih posebnih standardov?

Geslo novega uporabnika mora biti zgoščeno s standaradom SHA-2

### **Naziv Zahteve**

**Prijava uporabnika**

### **Povzetek funkcionalnosti**

**Admin, Lastnik Psa, Premium Uporabnik in Skrbnik Psa** se lahko prijavijo v sistem. 

### **Osnovni Tok**

1. Neprijavljeni uporabnik izbere funkcionalnost prijava
2. Sistem odpre okno z vpisnimi polji za uporabniško ime / e-poštni naslov in geslo
3. Neprijavleni uporabnik vnese podatke za prijavo
4. Sistem preveri, če vneseni uporabniški račun obstaja in če je geslo pravilno
5. Sistem javi, da je prijava uspela, prijavleni uporabnik je preosmerjen na domačo stran.

### **Izjemni Tok** 
1. Neprijavljeni uporabnik izbere funkcionalnost prijava
2. Sistem odpre okno z vpisnimi polji za uporabniško ime / e-poštni naslov in geslo
3. Neprijavleni uporabnik vnese podatke za prijavo
4. Sistem preveri, če vneseni uporabniški račun obstaja in če je geslo pravilno
5. Sistem neprijavlenem uporabniku sporoči da ta uporabnik ne obstaja ali pa da je geslo napačno; prijava ni uspela 


#### Sprejemni testi

**TO-DO**

- Navedite sprejmne teste, kjer opišete:
  - funkcijo, ki se testira,
  - začetno stanje sistema,
  - vhod in
  - pričakovan rezultat.

### **Naziv Zahteve**

**Urejanje uporabniškega profila**

### **Povzetek funkcionalnosti**

**Admin, Lastnik Psa, Premium Uporabnik in Skrbnik Psa** lahko urejajo nastavitve lastnega profila, ko so prijavljeni v aplikacijo. 

### **Osnovni Tok**

1. Prijavljen uporabnik izbere funkcionalnost ogled lastnega profila.
2. Sistem odpre zavihek s pregledom profila z uporabnikovimi podatki: ime, geslo, opis, e-poštni naslov, telefonska številka.
3. Prijavljen uporabnik preko izbire 'Urejaj' zahteva urejanje svojega profila.
4. Sistem s profilnega zavihka uporabnika preusmeri na obrazec s polji, v katerih je mogoče spreminjati uporabniške podatke (ime, geslo, opis, e-poštni naslov, telefonska številka).
5. Prijavljeni uporabnik spremeni željena vnosna polja.
6. Prijavljeni uporabnik izbere funkcionalnost shrani.
7. Sistem preveri ali so spremenjeni podatki zapisani z dovoljenimi znaki in omejene dolžine ter shrani spremembe in uporabnika iz obrazca vrne na ogled profila.

### **Alternativni Tok** 
**TO-DO**

### **Izjemni Tokovi** 
- Prijavljen uporabnik izbere funkcionalnost ogled profila in izbere urejanje.
Prijavljen uporabnik spremeni vnosna polja in uporabi nedovoljene znake.
Sistem ne dovoli shranjevanja in opozori na uporabljene nedovoljene znake.

- Prijavljen uporabnik izbere funkcionalnost ogled profila in izbere urejanje.
Prijavljen uporabnik spremeni vnosna polja in uporabi preveliko število znakov za vnosno polje. Sistem ne dovoli shranjevanja in opozori na predolgo dolžino znakov v teh vnosnih poljih.

- Prijavljen uporabnik izbere funkcionalnost ogled profila in izbere urejanje.
Prijavljen uporabnik spremeni vnosna polja in uporabi nepravilne znake v poljih, ki zahtevajo poseben format (e-poštni naslov, telefonska številka).
Sistem ne dovoli shranjevanja in opozori na napačen format znakov v teh vnosnih poljih.

### **Pogoji**
Uporabnik mora biti registriran v sistemu in prijavljen.

### **Posledice**
Uporabnikovi osebni podatki so spremenjeni. Spremembe so vidne tudi ostalim uporabnikom
sistema, ko si ogledajo njegov profil.

### **Posebnosti**
**TO-DO**
Sistem mora podpirati možnost (gumb) nalaganja profilne slike omejene velikosti iz uporabnikovega računalnika v sistem na profil??? => če damo to potem je treba popravit/dopolnit tokove

### **Prioriteta:** MUST have

### **Sprejemni testi**
**TO-DO** (dopolni?)

Izberi svoj profil in izberi urejanje, spremeni vnosno polje/-a za osebne podatke, in shrani urejanje.

Izberi svoj profil in izberi urejanje, spremeni vnosno polje za telefonsko številko in vnesi črkovne znake.

Izberi svoj profil in izberi urejanje, dopolni vnosno polje za opis in vnesi preveliko število znakov.

Izberi svoj profil in izberi urejanje, spremeni vnosno polje za geslo in vnesi znake, ki so izven uporabljenega kodirnega unicode standarda.

## 6. Nefunkcionalne zahteve

**TO-DO**

- Navedite splošne omejitve, ki jih moramo upoštevati v več funkcionalnostih ali celo skozi celoten razvoj aplikacije.

### 6.1 Zahteve izdelka
- sistem mora biti na voljo 99% časa
- sistem mora biti dosegljiv na javno dostopnem spletnem naslovu
- sistem uporabniku ne sme omogočati dostopa uporabniku do podatkov, do katerih ni pooblaščen.
- latenca zahtev ne sme presegati 500ms
- spletna stran deluje na večini mobilnih naprav
- sistem mora za komunikacijo uporabljati SSL certifikat (enkripcija)
### 6.2 Organizacijske zahteve
- sistem mora imeti implementiran "ali si robot" preverjanje
- sistem mora omogočati vsaj enega administratorja
- sistem mora omogočati hranjenje varnostnih kopij 
### 6.3 Zunanje zahteve
- sistem ne sme vsebovati vulgarnih besed
- sistem mora imeti obvezna obvestila o hranjenju podaktov in piškotkov
- sistem mora imeti izpostavljene ustrezne legalne dokumente

## 7. Prototipi vmesnikov

### 7.1 Osnutki zaslonskih mask
**TO DO**  

### 7.2 Vmesniki do zunanjih sistemov  
**Pretvornik valut ECB Exchange rate**  
Ob nalaganju strani, ki prikazuje seznam vseh oglasov, ob nalaganju posameznega oglasa ter ob kreiranju novega oglasa se bo klicala funkcija **converter(currency1, currency2, value)**, ki sprejme dva stringa kratic valut ter tabelo vrednosti imenovano *value*, ki vsebuje valute *currency1* katere želi pretvoriti v valuto *currency2*.  
Funkcija bo vrnila tabelo vrednosti pretvorjenih v valuto *currency2*  
  
*currency1* in *currency2* primer: 'EUR', 'USD',...  
*value* primer: 100, 200, 233.523,...  

**Google Maps API**  
Ob nalaganju strani, ki prikazuje posamezni oglas se bo klicala funkcija **initMap(lokacija)**, ki sprejme string naslova možnega prevzema psa.  
Funkcija prikaže zemljevid z označeno lokacijo možnega prevzema na zemljevidu.  
  
*lokacija* primer: "Ritoznoj 33, Slovenska Bistrica"  


