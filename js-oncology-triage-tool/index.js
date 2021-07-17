
// cancer + fever ---> AOS red 
// cancer + vomting or constipation ---> AOS amber 
// cancer + rash or low temp ---> AOS green 
// no cancer ---> triage to 111

// let time = 10
// let cancer = true
// let fever = false
// let vomiting = false
// let constipation = false
// let rash = false 
// let lowtemp = true
// console.log(triageTime(cancer, fever, vomiting, constipation, rash, lowtemp, time));


// function triage(input) {
//     if (cancer && fever) {
//         return 'AOS red';
//     } else if (cancer && (rash || lowtemp)) {
//         return 'AOS green';
//     } else if (cancer && (vomiting || constipation)) {
//         return 'AOS amber';
//     } else {
//         return 'triage to 111';
//     }
// }

// function triageTime(cancer, fever, vomiting, constipation, rash, lowtemp, time) {
//     const aosTriage = triage(cancer, fever, vomiting, constipation, rash, lowtemp);
//     if (aosTriage === 'AOS amber' && time >= 4) {
//         return 'AOS red';
//     } else if (aosTriage === 'AOS green' && time >= 4) {
//         return 'AOS amber';
//     } else if (aosTriage === 'AOS red') {
//         return 'AOS red';
//     } else {
//         return 'AOS green';
//     }
// }

// function helloWorld(lang) {
//     if (lang == 'es') {
//         return 'Hola Mundo';
//     } else if (lang == 'de') {
//         return 'Hallo Welt';
//     } else {
//         return 'Hello world';
//     }
// }
// console.log(helloWorld('de'));

// A = 90 equal to or above 
// B = 80-89
// C = 70-79
// D = 60-69
// E = 50 or lower 

// function assignGrade(score) {
//     if (score >= 90 ) {
//         return 'A';
//     } else if (score >= 80) {
//         return 'B';
//     } else if (score >= 70) {
//         return 'C';
//     } else if (score >= 60) {
//         return 'D';
//     } else {
//         return 'E'
//     }
// }
//  console.log('you got grade ' + assignGrade(50)); 

// array of integers from 0-99 

// function missingNumbers =