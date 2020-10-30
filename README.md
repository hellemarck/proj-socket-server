## Introduktion (redovisningstext krav 3)

Det här är en realtids-mikroservice för livepris-simulering som hör ihop med `proj-backend` och `proj-frontend` för ett projekt i kursen jsramverk (BTH).

Express och socket.io (npm) används här kombinerat för att kommunicera realtids-data till klienten. Objekten och dess priser ligger i app.js och kopplas via dess namn ihop med rätt objekt i databastabellen i proj-backend. Priset räknas fram via en randomiserad matematisk uträkning i stock.js som gör att värdet över tid ökar mer än det minskar. För att kursen inte ska springa iväg helt satte jag ett tak på 1500 kr, när den nivån nås återgår priset till att vara närmare sin ursprungssiffra. Jag har också avrundat siffran till två decimaler för mer användarvänlig hantering av saldot i webbklienten. Var femte sekund "emittas" det nya priset till klienten som ritar ut det i chartjs-grafen. När ett köp eller en försäljning görs i webbklienten uppdateras trading-tabellen i databasen med aktuellt pris, som alltså kommunicerats via socket.io genom denna mikroservice.

Socket.io har varit smidigt att jobba med för realtids-uppdateringar som går båda vägar - från servern till klienten och omvänt - vi återser ju sådan teknik överallt idag så det var nyttigt och roligt att få testa på och se hur det kan fungera, och hur snabbt det går! Jag har inga liknande verktyg att relatera till, men förstår att socket.io är väletablerat, också i kombination med Express såklart, och jag tycker att det har fungerat smidigt både i projektet och för chatten i kmom06.

## Klona repot

`git clone https://github.com/hellemarck/proj-socket-server.git`

## Kom igång

`npm install`

`npm start`

Snurrar i development mode på http://localhost:3004/.
