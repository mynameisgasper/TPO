<style>
.dataType{
  display:inline;
  font-size:0.8rem;
  color:gray
}
</style>

# Načrt sistema

|                             |                                                         |
| :-------------------------- | :------------------------------------------------------ |
| **Naziv projekta**          | **TO-DO** naziv projekta                                |
| **Člani projektne skupine** | **TO-DO** 1. član, 2. član, 3. član, 4. član in 5. član |
| **Kraj in datum**           | **TO-DO** kraj, datum                                   |

## Povzetek

**TO-DO**

- Povzetek je, kot že vemo, celoten dokument, strnjen v največ 150 besed.

## 1. Načrt arhitekture

**TO-DO**

- Za prikaz uporabite enostavne prikaze, kot so blokovni ali paketni diagrami. Uporabite arhitekturne vzorce.

### Uporabljene tehnologije in metode
Arhitektura **spletne aplikacije** bo zasnovana po vzorcu **model-pogled-krmilnik** oz. **MVC** 

<img src="../img/mvcVzorec.png" width="50%" style="border-radius:1rem">

Razvita pa bo na osnovi **MEAN Stack** tehnologij, kjer bomo uporabljali:
- 2 **MongodDB** podatkovni bazi
- **Ogrodje Angular** za izdelavo čelnega dela aplikacije
- **NodeJs** RestAPI kombinirano s knjižnjico **Express.js** za izdelavo zalednega dela aplikacije



### LOGIČNI POGLED
#### Entitete
Za namene boljšega razumevanja smatrajte besedno zvezo **Unikatni identifikator** kot *niz znakov*, ki se uporablja kot primarni ključ vsake entitete.


##### **1. Uporabnik**
Entiteta bo razdeljena na *avtentikacijske*, *osebne* in *ostale* podatke, kjer bodo med **avtentikacijske** spadali vsi podatki, ki so potrebni za primerno avtentikacijo uporabnika, in sicer:
- Unikatni identifikator *(dodeljen avtomatsko s strani sistema ob registraciji)* <div class="dataType">*(niz znakov - ustvarjeno samodejno)*</div>
- Uporabniško ime <div class="dataType">*(niz znakov - obvezno)*</div>
- Naključno generirana vrednost <div class="dataType">*(niz znakov - obvezno)*</div>
- Zakriptirana vrednost <div class="dataType">*(niz znakov - obvezno)*</div>
- Vloga <div class="dataType">*(celo število - min 1, max 4 - privzeto 1)*</div>
> geslo bo v podatkovni bazi seveda primerno zakriptirano. Vloga, predstavljena s celim številom, bo lahko zasedla eno od petih možnih vrednosti, kjer bodo pomembnost oz. "moč" vloge naraščala sorazmerno z vrednostjo celega števila *(npr. 1 - organizacija, 4 - administrator)*

**osebni** podatki bodo zajemali:
- Polno ime <div class="dataType">*(niz znakov - obvezno)*</div>
- Telefonsko številko <div class="dataType">*(niz znakov - obvezno)*</div>
- Pošto, ulico in hišno številko <div class="dataType">*(niz znakov - obvezno)*</div>
- Elektronski naslov (elektronski pošta, uporabnika) <div class="dataType">*(niz znakov - obvezno)*</div>
> Osebni podatki se bodo ostalim uporabnikom na strani profila prikazali z določenimi omejitvami *(npr. ostalim uporabnikom ne bo razkrita telefonska številka in pa točen naslov uporabnika, ampak zgolj kraj, v katerem prebiva)*

Med **ostale** podatke pa spadajo:
- Javna ocena <div class="dataType">*(necelo število - min 0.0, max 5.0 - privzeto nedefinirano)*</div>
- Podane ocene <div class="dataType">*(seznam **unikatnih identifikatorjev** - privzeto prazen seznam)*</div>
- Hitri dostop <div class="dataType">*(seznam **unikatnih identifikatorjev** - privzeto prazen seznam)*</div>
- Komentarji <div class="dataType">*(seznam **Komentarjev** - privzeto prazen seznam)*</div>
> *javna ocena uporabnika* se bo samodejno preračunavala glede na ocene podane s strani drugih uporabnikov. *Seznam podanih ocen uporabnikom* predstavlja zaporedje unikatnih identifikatorjev uporakov, ki jim je uporabnik že podal oceno in služi kot zapisnik, ki uporabniku preprečuje večkratno podajanje ocene istemu uporabniku. *Seznam uporabnikov s hitrim dostopom* pa predstavlja zaporedje unikatnih identifikatorjev vseh uporabnikov, ki jih je uporabnik "dodal v hitri dostop"

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
| Komentarji | <div class="dataType">*(seznam **Komentarjev** - privzeto prazen seznam)*</div> |



##### **2. Oglas**
Entiteta bo vsebovala 4 **vsebinske** lastnosti:
- Opis <div class="dataType">*(niz znakov - obvezno)*</div>
- Lokacija prevzema <div class="dataType">*(niz znakov - obvezno)*</div>
- Slika <div class="dataType">*(BLOB - neobvezno)*</div>
- Cena <div class="dataType">*(niz znakov - neobvezno)*</div>
> izmed naštetih sta slika in cena neobvezna, uporabnika si lahko podrobne informacije izmenjata preko zasebne komunikacije (elektronska pošta)

Poleg omenjenih pa bo vsebovala tudi:
- Oglaševalec <div class="dataType">*(**unikatni identifikator** - obvezno)*</div>
- **Odzivi** <div class="dataType">*(seznam **Odzivov** - privzeto prazen seznam)*</div>

**Struktura**
|                 |                                                        |
| :-------------------------- | :------------------------------------------------------ |
| Opis          | <div class="dataType">*(niz znakov - obvezno)*</div>  |
| Lokacija prevzema | <div class="dataType">*(niz znakov - obvezno)*</div> |
| Slika | <div class="dataType">*(BLOB - neobvezno)*</div> |
| Cena | <div class="dataType">*(število - neobvezno)*</div> |
| Oglaševalec | <div class="dataType">*(**unikatni identifikator** - obvezno)*</div> |
| Odzivi | <div class="dataType">*(seznam **Odzivov** - privzeto prazen seznam)*</div> |

##### **3. Odziv**
Odziv je podentiteta oglasa in bo vsebovala
- Sporočilo <div class="dataType">*(niz znakov - obvezno)*</div>
- Pošiljatelj <div class="dataType">*(**unikatni identifikator** - obvezno)*</div>
> Pošiljatelj v obliki unikatnega identifikatorja služi kot podpis pošiljatelja.

**Struktura**
|                   |                                                        |
| :-------------------------- | :------------------------------------------------------ |
| Sporočilo          | <div class="dataType">*(niz znakov - obvezno)*</div>  |
| Pošiljatelj | <div class="dataType">*(**unikatni identifikator** - obvezno)*</div> |



##### **4. Komentar**
Komentar je podentiteta, ki se nahaja v *ostalih* podatkih vsakega uporabnika in je zgrajena iz naslednjih lastnosti:
- Vsebina <div class="dataType">*(niz znakov - obvezno)*</div>
- Komentator <div class="dataType">*(**unikatni identifikator** - obvezno)*</div>

**Struktura**
|                   |                                                        |
| :-------------------------- | :------------------------------------------------------ |
| Vsebina          | <div class="dataType">*(niz znakov - obvezno)*</div>  |
| Komentator | <div class="dataType">*(**unikatni identifikator** - obvezno)*</div> |





## 2. Načrt strukture

### 2.1 Razredni diagram

**TO-DO**

- Izdelajte razredni diagram.

### 2.2 Opis razredov

**TO-DO**

- Vsak razred podrobno opišite. Opis posameznega razreda naj ima sledečo strukturo:

#### Ime razreda **TO-DO**

- Koncept iz problemske domene, ki ga razred predstavlja.

#### Atributi

**TO-DO**

- Za vsak atribut navedite:
  - ime atributa,
  - podatkovni tip, če ta ni očiten,
  - pomen, če ta ni samoumeven,
  - zalogo vrednosti, če ta ni neomejena ali očitna.

#### Nesamoumevne metode

**TO-DO**

- Za vsako metodo navedite:
  - ime metode,
  - imena in tipe parametrov,
  - tip rezultata,
  - pomen (če ta ni dovolj očiten iz naziva metode in njenih parametrov).

## 3. Načrt obnašanja

**TO-DO**

- Za izdelavo načrta obnašanja lahko uporabite:
  - diagrame zaporedja,
  - končne avtomate,
  - diagrame aktivnosti,
  - diagrame stanj in
  - psevdokodo.
