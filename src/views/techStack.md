Jeg har valgt at arbejde i react da jeg synes det er et overskueligt framework og det også er det vi er blevet undervist i. Du sparer også dig selv for en masse kode da react både er en spa - med en html og du kan bruge komponenter.
jeg bruger BEM som konvention og bruger variabler.
herudover bruger jeg et contentkomponent som renderer det indhold de får - children
- har brugt axios da den er mest kompatibel i forskkeliige browsere



kodeeksempel - 
 let randomassets = response.data[Math.floor(Math.random() * response.data.length)]
console.log(randomassets)
setRandom(randomassets)


her tager jeg mit array som er response.data putter en random funktion ind i arrayet og kan på den måde få et random holdbilled når siden reloader.

fungerer bedst ui mæssigt på pixel 2 xl telefon

har valgt at lave opgave c