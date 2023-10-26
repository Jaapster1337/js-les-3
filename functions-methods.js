// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain(string){
    return string.slice(string.indexOf("@"))
}

console.log(getEmailDomain("t.mellink@novi.nl"))


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(email){
    if(email.includes("novi-education.nl")){
        console.log("student")
    } else if(email.includes("novi.nl")){
        console.log("medewerker")
    } else {
        console.log("extern")
    }
}

typeOfEmail("t.mellink@novi.nl")

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

// kreeg het niet voor elkaar met ternary operators omdat hierbij altijd valid anagepast wordt
// terwijl je met volledige if-statements valid uitsluitend naar false kan zetten ipv 1 van de 2
// function checkEmailValidity(email){
//     let valid = true
//     !email.includes("@") ? valid = false : valid = true
//     console.log("contains @ = "+valid)
//     email.charAt(email.length-1) === "." ? valid = false : valid = true
//     console.log("last char is . ="+valid)
//     email.includes(",") ? valid = true : valid = false
//     console.log("contains , = "+valid)
//
//     return valid
// }

function checkEmailValidity(email){
    let valid = true
    if(!email.includes("@")){
        valid = false
    }
    if(email.charAt(email.length-1) === "."){
        valid = false
    }
    if(email.includes(",")){
        valid = false
    }
    return valid
}

console.log(checkEmailValidity("n.eeken@novi.nl"))