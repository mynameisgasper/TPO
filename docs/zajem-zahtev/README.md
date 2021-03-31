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

- V uvodu opišite problemsko domeno (kateri problem bo naša aplikacija reševala) in kratek pregled glavnih funkcionalnosti (kaj vse bo aplikacija počela).

## 2. Uporabniške vloge



**Neprijavljen uporabnik**  
Neprijavljen uporabnik si lahko ogleda seznam vseh oglase ter posamezne oglase. Vsak oglas ima vsebuje tudi funkcionalnosti lokacije prevzema psa ter pretvorbe valut, tako da ju vidi tudi neprijavljen uporabnik. Vsak neprijavljen uporabnik se ima možnost tudi registrirati ali prijaviti v sistem.
**Skrbnik psov**  
Skrbnik psov je prvi izmed prijavljenih uporabnikov. Vsi prijavljenih uporabniki imajo naslednje funkcionalnosti: vse kar ima neprijavljen uporabnik, urejanje uporabniškega profila, iskanje oglasov, podajanje ocene ter podajanje komentarja profilu. Skrbnik psov ima še možnost se odzvati na oglase psov, ki potrebujejo skrbnika.
**Lastnik psa**  
Lastnik psa ima vse funkcionalnosti prijavljenega uporabnika, ki so našteti pri Skrbniku psov, hkrati pa ima še možnost ustvarjanja, urejanja ter brisanje posameznega oglasa, ki ga je objavil sam.
**Premium uporabnik**  
Premium uporabnik združuje vse funkcionalnosti Skrbnika psov ter Lastnika psa ter dodaja še možnost ogleda zgodovine skrbi nad psom ter dodajanja profilov pod hitre kontakte.
**Admin**  
Admin ima vse funkcionalnosti Skrbnika psov ter možnost brisanja katerega koli oglasa na portalu DogWalkers.

## 3. Slovar pojmov

**TO-DO**

- Natančno opredelite vse têrmine, ki jih boste uporabljali v nadaljevanju dokumenta.

## 4. Diagram primerov uporabe

**TO-DO**

- Narišite diagram primerov uporabe v jeziku UML.
- Diagram predstavlja interakcijo med akterji in funkcionalnostmi (kdo lahko kaj počne).
- Akterji so tipično uporabniške vloge, lahko pa gre tudi za zunanje komponente (sistemi), ki komunicirajo z našo aplikacijo.

### 4.1 Zunanji sistemi
#### 4.1.1 Pretvornik Valut
#### 4.1.2 Google Maps

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

1. Neprijavleni uporabnik izbere funkcionalnost prijava
2. Sistem odpre okno z vpisnimi polji za uporabniško ime / e-poštni naslov in geslo
3. Neprijavleni uporabnik vnese podatke za prijavo
4. Sistem preveri, če vneseni uporabniški račun obstaja in če je geslo pravilno
5. Sistem javi, da je prijava uspela, prijavleni uporabnik je preosmerjen na domačo stran.

### **Izjemni Tok** 
1. Neprijavleni uporabnik izbere funkcionalnost prijava
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

**TO-DO**

- Navesti je potrebno: zaslonske maske, sistemske vmesnike in vmesnike do naprav, vključno z referencami do primerov uporabe.


