# Uporabniki
## persistent uporabniki:
| uporabniško ime   |    geslo   | vloga |
| :----------------- | :---------- | :---- |
| **marica.petkovsek@hotmail.com** | test | *navaden uporabnik* |
| **joze.fistrovic@hotmail.com** | test | *premium uporabnik* |
| **ad.min@hotmail.com** | admin | *administrator* |


Vnos persistentnih podatkov v sveže kreirano podatkovno bazo:

>če so v bazi že podatki, lahko bazo pobrišemo z ukazom `npm run mongo-drop`
   
Vnos treh uporabnikov `npm run mongo-import`

# Produkcijsko (Docker) okolje
Za simulacijo produkcijskega okolja izvedemo naslednje ukaze:
1. premaknemo se v mapo `app_production`
2. `docker-compose down` (ukaza **ne** izvajamo, če bomo simulacijo izvajali **prvič**)
3. `docker-compose build --force-rm`
4. `docker-compose up -d` ali `docker-compose up dw-api`, če želimo slediti izpisu vsebnika, ki izvaja zaledni del aplikacije
