# Forms - Gyakorlat

**_Instrukciók_**: tedd lehetővé, hogy kattintásra egy külön oldalon megnyíló űrlapon lehessen szerkeszteni az eseményeket.

## Kezdő lépések
- Lépj be a letöltött mappába, és állítsd be a projektet:
- `cd <repo_name>`
- `code . -r`
- Telepítsd a függőségeket:
- `npm i`
- Indítsd el az Angular Development Server-t:
- `npm start`

## Bevezetés
> Az alkalmazás főoldala már készen van. Itt a listában való kattintásra kell 
megnyitni a másik oldalt, ahol egy esemény részletei vannak betöltve egy 
űrlapon.  
Az űrlapon lehet szerkeszteni az esemény részleteit.

## Feladatok
1. Hozz létre egy gombot minden eseményhez a táblázat adott sorában, az utolsó 
cellában. Erre a gombra kattintva navigáljon el az alkalmazás az `event/:id` 
oldalra, ahol az `:id` az adott esemény id-je.  
(A listát az EventsListComponent-ben találod.)

1. Hozd létre az EventEditor komponenst a page mappában:  
 `ng g c page/event-editor`.  
Injektáld be a constructor-ben az EventService és az ActivatedRoute szolgáltatásokat.

1. Iratkozz fel az ActivatedRoute params-ra, és ha változik a params, 
akkor olvasd ki belőle az id változót, és ez alapján kérd le az EventService-ből 
az adott eseményt.  
Segítségképpen elkészítettem erre a célra a get metódust, amely egy 
`Observable<Event>`-et ad vissza.  
[Segítség](https://github.com/Training360/str-angular-004/blob/3a165b952b7ee6a0ca091b8dd80a57ad0ffc1c01/str-angular-routing-and-form/src/app/page/product-editor/product-editor.component.ts#L22)

1. Az EventEditor komponensben hozz létre egy űrlapot. Az űrlap jelenítse meg 
szerkeszthető formában az Event összes tulajdonságát.  
Minden adat kitöltése legyen kötelező, az event.name-nek pedig legalább 
8 karakter hosszúnak kell lennie.  
[Segítség](https://github.com/Training360/str-angular-004/blob/3a165b952b7ee6a0ca091b8dd80a57ad0ffc1c01/str-angular-routing-and-form/src/app/page/product-editor/product-editor.component.html#L6)

1. Ha valamelyik adat nem megfelelően van megadva, jelenjen meg hibaüzenet.  
Fontos: a hibaüzenet osztálya `error-message` legyen!
[Segítség](https://github.com/Training360/str-angular-004/blob/3a165b952b7ee6a0ca091b8dd80a57ad0ffc1c01/str-angular-routing-and-form/src/app/page/product-editor/product-editor.component.html#L8)

1. Ha az űrlap nem valid, ne lehessen elküldeni, ne működjön a mentés gomb.  
Fontos: a tesztek miatt az űrlapon csak egy darab gomb legyen.
[Segítség](https://github.com/Training360/str-angular-004/blob/3a165b952b7ee6a0ca091b8dd80a57ad0ffc1c01/str-angular-routing-and-form/src/app/page/product-editor/product-editor.component.html#L22)

1. Ha a mentésre kattintanak, és valid az űrlap, fusson le az
`EventEditor.onUpdate` metódus.
Legyen átadva neki az ngForm objektumra mutató változó, és 
ez a metódus hívja meg az update metódust az EventService-ből.  
Fontos: tehát ne az event változót, hanem az ngForm-ot add át a minta alapján!
[Segítség](https://github.com/Training360/str-angular-004/blob/3a165b952b7ee6a0ca091b8dd80a57ad0ffc1c01/str-angular-routing-and-form/src/app/page/product-editor/product-editor.component.html#L3)

> A metódusok meg vannak írva az EventService-ben, csak a megfelelő 
paraméterekkel meg kell őket hívni a komponens osztályából.

## Sok sikert!
