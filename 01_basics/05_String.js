const name = " Ankita"
const repocount = 23

//console.log(name + repocount + "Calu") // do not follow this syntax

console.log(`Hello my name is ${name} and my RepoCount is ${repocount}`)
//Hello my name is Ankita and my RepoCount is 23


//obj
const gameName = new String("    Ankita-hc-com    ")
console.log(gameName[0])              //A
console.log(gameName.__proto__);     // {}

/*
const newString = gameName.substring(0, 4);
console.log(newString);                        //Anki
console.log(gameName.substring(-2, 3));       // Ank
console.log(gameName.toLowerCase());         // ankita-hc
console.log(gameName.toUpperCase());        //ANKITA-HC
console.log(gameName.charAt(3));           // i
console.log(gameName.indexOf('t'));       // 4
console.log(gameName.slice(0, 3));       // Ank
console.log(gameName.slice(-6, 6));     // ita
*/

const anotherString = gameName.trim();
console.log(anotherString)


const url = "https://github.com/AnKiTa2456/JS%20Series-2024k"

console.log(url.replace('%20', '-'))
console.log(url.includes('AnKiTa2456'))
const gameName1 = new String("Ankita-hc-com")
console.log(gameName1.split('-'))