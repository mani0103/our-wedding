import React, { Component } from 'react';
import MapContainer from '../Home/Map'

export const TRANSLATIONS = {
    ourWedding: {
        eng: `Our Wedding`,
        hun: `Az Esküvőnk`,
        cz: `Naše Svatba `,
        sk: `Naša Svadba`
    },
    details: {
        eng: `Details`,
        hun: `Részletek`,
        cz: `Podrobnosti`,
        sk: `Podrobnosti`
    },
    photos: {
        eng: `Photos`,
        hun: `Képeink`,
        cz: `Naše Fotky`,
        sk: `Naše Fotky`
    },
    guests: {
        eng: `Guests Section`,
        hun: `Vendég Szekció`,
        cz: `Pro hosti`,
        sk: `Pre hostí`
    },
    locations: {
        eng: `Locations`,
        hun: `Helyszínek`,
        cz: `Mapa`,
        sk: `Mapa`
    },
    accomodation: {
        eng: `Accomodation`,
        hun: `Szálláshelyek`,
        cz: `Ubytování`,
        sk: `Ubytování`
    },
    'gift-information': {
        eng: `Gift Information`,
        hun: `Ajándék`,
        cz: `Svatební Dary`,
        sk: `Svadobné Dary`
    },
    'meal-options': {
        eng: `Meal Options`,
        hun: `Vacsora lehetőségek`,
        cz: `???`,
        sk: `???`
    },
    language: {
        eng: `Language`,
        hun: `Nyelv`,
        cz: `Jazyk`,
        sk: `Jazyk`
    },
    login: {
        eng: `Log In`,
        hun: `Bejelentkezés`,
        cz: `Přihlášení`,
        sk: `Prihlásenie`
    },
    logout: {
        eng: `Log Out`,
        hun: `Kijelentkezés`,
        cz: `Odhlášení`,
        sk: `Odhlásenie`
    },
    rsvp: {
        eng: `RSVP`,
        hun: `Részvétel visszaigazolása`,
        cz: `Potvrzení účasti`,
        sk: `Potvrdenie účasti`
    },
    ertesito: {
        eng: `TODO`,
        hun: `Örömmel értesítjük, hogy 2018.7.7-én 16 órakor 
        a komáromi Szent András bazilikában 
        kimondjuk egymásnak a boldogító igent.
        `,
        cz: `S radostí Vám oznamujeme, že 7.7.2018 v 16 hodin 
        v komárňanské bazilice svatého Ondřeje 
        si řekneme své „ano“.
        `,
        sk: `S radosťou Vám oznamujeme, že 7.7.2018 o 16.00 
        v komárňanskej bazilike svätého Ondreja 
        si povieme svoje „áno“.
        `
    },
    idezet: {
        eng: `TODO`,
        hun: `"Én a szerelmesemé vagyok, a szerelmesem az enyém."
        Énekek éneke 6,3`,
        cz: `"Já jsem milého mého, a milý můj jest můj."
        Píseň písní 6:2`,
        sk: `Môj milý je môj a ja som jeho.
        Pieseň piesní 6:3`,
    },
    detailslong: {
        eng: `TODO`,
        hun: `A „nagy napunk“ részletes programja: \n
        16.00- házassági szertartás a komáromi Szent András bazilikában
        {"lat": 47.7572284,"lng": 18.1267641, "name": "Szent Andás bazilika: Nádor u. 8 , Komárno"}\n
        17.00- gratulációk fogadása \n
        (kérjük a kedves násznépet, ne hozzanak a menyasszonynak virágcsokrokat, nagyobb örömöt okoz nekünk, hogy megtisztelnek minket a jelenlétükkel)
        17.15- közös fényképezkedés a Szent András bazilika előtt 
        (kérünk mindenkit, hogy maradjon a helyszínen és megörökíthessük a közösen átélt pillanatot) \n
        Csoportos fényképezkedés: szülőkkel, családokkal, barátokkal és ismerősökkel külön \n
        18.00- esküvői buli a perbetei kultúrházban \n
        {"lat": 47.900891,"lng": 18.313930, "name": "Perbetei kultúrház: Iskola u. 628/127, Pribeta"}`,
        cz: `Podrobný program našeho „velkého dne“: \n
        16.00- svatební obřad v komárňanské bazilice svatého Ondřeje \n
        {"lat": 47.7572284,"lng": 18.1267641,"name": "bazilika svatého Ondřeje: Palatínova 8 , Komárno"}\n
        17.00- přijímání gratulací \n
        (prosíme svatebčany aby nevěste nenosili kytky, pro nás je největší radost Vaše přítomnost)
        17.15- společné focení před bazilikou 
        (prosíme všechny z Vás, aby jste počkali na focení na místě) \n
        Focení skupinek: s rodiči, s rodinami, s příteli a známými zvlášť \n
        18.00- svatební party v kulturním domě obce Pribeta \n
        {"lat": 47.900891,"lng": 18.313930,"name": "Kulturní dom obce Pribeta: Školská 628/127, Pribeta"}`,
        sk: `Podrobný program nášho „velkého dňa“: \n
        16.00- svadobní obrad v komárňanskej bazilike svätého Ondreja \n
        {"lat": 47.7572284,"lng": 18.1267641,"name": "bazilika svätého Ondreja: Palatínova 8 , Komárno"}\n
        17.00- prijímánie gratulácií \n
        (prosíme svadobčanov aby neveste nenosili kytice, pre nás je nejväčšia radost Vaša prítomnosť)
        17.15- spoločné fotenie sa pred bazilikou 
        (prosíme všetkých z Vás, aby ste počkali na fotenie sa na mieste) \n
        Fotenie v skupinách: s rodičmi, s rodinami, s priatelmi a známymi zvlášť \n
        18.00- svadobná párty v kultúrnom dome obce Pribeta \n
        {"lat": 47.900891,"lng": 18.313930,"name": "Kultúrny dom obce Pribeta: Školská 628/127, Pribeta"}`
    
    },
    gifts: {
        eng: `TODO`,
        hun: `Számunkra a legnagyobb ajándék, 
        hogy megoszthatjuk Önokkel életünk e fontos pillanatát. 
        Ha mégis ezen kívül nászajándékon törné bárki a fejét, 
        kérjük a ránk szánt összeget ne költse semmi másra, 
        mi szívesen befektetjük egy közös házba.`,
        cz: `Pro nás je největším dárkem, 
        že můžeme spolu s Vámi zažít tento důležitý okamžik našeho života. 
        Kdyby jste i kromě toho nás chtěli něčím obdarovat, 
        prosím veďte, že vše vybavení do domácnosti už máme, 
        a příspěvek v jakékoli výši bychom rádi využili na společný domeček.`,
        sk: `Pre nás je nejväčším darom, 
        že môžeme spolu s Vami zažiť tento dôležitý okamih nášho života. 
        Keby ste aj okrem toho nás chceli niečim obdarovať, 
        prosím veďte, že všetko vybavenie do domácnosti už máme, 
        a príspevok v akejkoľvek výške by sme radi využili na spoločný domček.`
    },
    locationslong: {
        eng: `TODO`,
        hun: `Szent Andás bazilika: Nádor u. 8 , Komárno
        {"lat": 47.7572284,"lng": 18.1267641, "name": "Szent Andás bazilika: Nádor u. 8 , Komárno"}
        Perbetei kultúrház: Iskola u. 628/127, Pribeta
        {"lat": 47.900891,"lng": 18.313930, "name": "Perbetei kultúrház: Iskola u. 628/127, Perbete"}`,
        cz: `bazilika svatého Ondřeje: Palatínova 8 , Komárno
        {"lat": 47.7572284,"lng": 18.1267641,"name": "bazilika svatého Ondřeje: Palatínova 8 , Komárno"}\n
        Kulturní dom obce Pribeta: Školská 628/127, Pribeta
        {"lat": 47.900891,"lng": 18.313930,"name": "Kulturní dom obce Pribeta: Školská 628/127, Pribeta"}`,
        sk: `bazilika svätého Ondreja: Palatínova 8 , Komárno
        {"lat": 47.7572284,"lng": 18.1267641,"name": "bazilika svätého Ondreja: Palatínova 8 , Komárno"}\n
        Kultúrny dom obce Pribeta: Školská 628/127, Pribeta
        {"lat": 47.900891,"lng": 18.313930,"name": "Kultúrny dom obce Pribeta: Školská 628/127, Pribeta"}`
    
    },
    countdownToOurWedding: {
        eng: `Countdown To Our Wedding`,
        hun: `Visszaszámlálás az esküvőig`,
        cz: `Zbýva ještě`,
        sk: `Odpočítanie do svadby`
    },
    days: {
        eng: `Days`,
        hun: `Nap`,
        cz: `Dní`,
        sk: `Dní`
    },
    hours: {
        eng: `Hours`,
        hun: `Óra`,
        cz: `Hodin`,
        sk: `Hodín`
    },
    minutes: {
        eng: `Minutes`,
        hun: `Perc`,
        cz: `Minut`,
        sk: `Minút`
    },
    seconds: {
        eng: `seconds`,
        hun: `Másodperc`,
        cz: `Vteřin`,
        sk: `Sekúnd`
    },
    rsvpList: {
        eng: `RSVP List`,
        hun: `Résztvevők listája`,
        cz: `Seznam účastníků`,
        sk: `Zoznam účastníkov`
    },
    addYourNameToTheList: {
        eng: `Add your name to the list`,
        hun: `Kérjük írja be az Ön és családtagjai/kísérői nevét akikkel részt venni szándékoznak`,
        cz: `Prosíme potvrďte účast Vaší i Vašich blízkych připsáním se na seznam`,
        sk: `Prosíme potvrďte Vašu účast pridaním Vašeho mena na zoznam`
    },
    attendeeList: {
        eng: `Attendee List`,
        hun: `Résztvevők listája`,
        cz: `Attendee List`,
        sk: `Attendee List`
    },
    awesomePeopleAttending: {
        eng: `awesome people attending`,
        hun: `Várjuk Önöket:`,
        cz: `Těšíme se na Vás:`,
        sk: `Tešíme sa na Vás:`
    },
    program: {
        eng: `Program`,
        hun: `Program`,
        cz: `Program`,
        sk: `Program`
    },
    uploadPictures: {
        eng: `Upload Pictures`,
        hun: `Képfeltöltés`,
        cz: `Nahrát fotku`,
        sk: `Nahrať fotku`
    },
    deletePictures: {
        eng: `Delete pictures`,
        hun: `Képek törlése`,
        cz: `Smazat fotky`,
        sk: `Vymazať fotky`
    },
    deselectAll: {
        eng: `Deselect All`,
        hun: `Kijelölés visszavonása`,
        cz: `Zrušit výber`,
        sk: `Zrušiť výber`
    },
    music: {
        eng: `Music`,
        hun: `Zene`,
        cz: `Hudba`,
        sk: `Hudba`
    },
    musicList: {
        eng: `Music List`,
        hun: `Zenei Lista`,
        cz: `Seznam Hudby`,
        sk: `Zoznam Hudby`
    },
    musicListDescription: {
        eng: `Music List Description`,
        hun: `Írd ide, szerinted melyik számra fogunk együtt a legnagyobbat táncolni`,
        cz: `Napíšte nám, kterou skladbu by jste chtěli určitě slyšet`,
        sk: `Napíšte nám, ktorú pesničku by ste určite chceli počuť`,
    },
    artist: {
        eng: `Artist`,
        hun: `Előadó`,
        cz: `Interpret`,
        sk: `Interpret`,
    },
    title: {
        eng: `Title`,
        hun: `Szám címe`,
        cz: `Skladba`,
        sk: `Skladba`,
    },
    vegetarian: {
        eng: `Vegetarian/ Food allergy`,
        hun: `Különleges diéta (kommentben fejtse ki bővebben)`,
        cz: `Speciální dieta (prosím specifikujte do komentáře) `,
        sk: `Speciálna strava (prosím špecifikujte do komentu) `
    },
    comment: {
        eng: `Comment`,
        hun: `Hozzászólások`,
        cz: `Komentář`,
        sk: `Komentár`,
    },
    send: {
        eng: `Send`,
        hun: `Küldés`,
        cz: `Odeslat`,
        sk: `Poslať`,
    },
    placeCommentHere: {
        eng: `Place your comment here...`,
        hun: `Hozzászólás írása...`,
        cz: `Sem můžete psát...`,
        sk: `Sem môžete písať...`,
    } 
}