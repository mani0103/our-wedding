import React, { Component } from 'react';
import MapContainer from '../Home/Map'

export const TRANSLATIONS = {
    ourWedding: {
        eng: `Our Wedding`,
        hun: `Az Esküvőnk`,
        cz: `Naše Svatba `,
    },
    details: {
        eng: `Details`,
        hun: `Részletek`,
        cz: `Podrobnosti`
    },
    photos: {
        eng: `Photos`,
        hun: `Képek`,
        cz: `Fotky`
    },
    guests: {
        eng: `Guests Section`,
        hun: `Vendég Szekció`,
        cz: `Host Sekce`
    },
    locations: {
        eng: `Locations`,
        hun: `Helyszínek`,
        cz: `Umístění`
    },
    accomodation: {
        eng: `Accomodation`,
        hun: `Szálláshelyek`,
        cz: `Ubytování`
    },
    'gift-information': {
        eng: `Gift Information`,
        hun: `Ajándék`,
        cz: `Dárek`
    },
    'meal-options': {
        eng: `Meal Options`,
        hun: `Vacsora lehetőségek`,
        cz: `???`
    },
    language: {
        eng: `Language`,
        hun: `Nyelv`,
        cz: `Jazyk`
    },
    login: {
        eng: `Log In`,
        hun: `Bejelentkezés`,
        cz: `Přihlášení`
    },
    logout: {
        eng: `Log Out`,
        hun: `Kijelentkezés`,
        cz: `Odhlášení`
    },
    ertesito: {
        eng: `TODO`,
        hun: `Örömmel értesítjük, hogy 2018.7.7-én 16 órakor 
        a komáromi Szent András bazilikában 
        kimondjuk egymásnak a boldogító igent.
        `,
        cz: `S radostí Vám oznamujeme, 
        že 7.7.2018 v 16 hodin 
        v komárňanské bazilice svatého Ondřeje 
        si řekneme své „ano“.
        `
    },
    idezet: {
        eng: `TODO`,
        hun: `"Én a szerelmesemé vagyok, a szerelmesem az enyém."
        Énekek éneke 6,3`,
        cz: `"Já jsem milého mého, a milý můj jest můj."
        Píseň písní 6:2`
    },
    detailslong: {
        eng: `TODO`,
        hun: `A „nagy napunk“ részletes programja: \n
        16.00- házassági szertartás a komáromi Szent András bazilikában
        {"lat": 47.7572284,"lng": 18.1267641, "name": "Szent Andás bazilika: Nádor u. 8 , Komárno"}\n
        17.00- gratulációk fogadása \n
        17.15- közös fényképezkedés a Szent András bazilika előtt 
        (kérünk mindenkit, hogy maradjon a helyszínen és megörökíthessük a közösen átélt pillanatot) \n
        Csoportos fényképezkedés: szülőkkel, családokkal, barátokkal és ismerősökkel külön \n
        18.00- esküvői buli a perbetei kultúrházban \n
        {"lat": 47.900891,"lng": 18.313930, "name": "Perbetei kultúrház: Iskola u. 628/127, Pribeta"}`,
        cz: `Podrobný program našeho „velkého dne“: \n
        16.00- svatební obřad v komárňanské bazilice svatého Ondřeje \n
        {"lat": 47.7572284,"lng": 18.1267641,"name": "bazilika svatého Ondřeje: Palatínova 8 , Komárno"}\n
        17.00- přijímání gratulací \n
        17.15- společné focení před bazilikou 
        (prosíme všechny z Vás, aby jste počkali na focení na místě) \n
        Focení skupinek: s rodiči, s rodinami, s příteli a známými zvlášť \n
        18.00- svatební party v kulturním domě obce Pribeta \n
        {"lat": 47.900891,"lng": 18.313930,"name": "Kulturní dom obce Pribeta: Školská 628/127, Pribeta"}`
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
        a příspěvek v jakékoli výši bychom rádi využili na společný domeček.`
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
        {"lat": 47.900891,"lng": 18.313930,"name": "Kulturní dom obce Pribeta: Školská 628/127, Pribeta"}`
    },

    


}