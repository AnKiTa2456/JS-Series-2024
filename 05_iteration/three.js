// for of loop

// ["", "", ""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
    //     console.log(num)
}

const greetings = "Hello world!"
for (const greet of greetings) {
    if (greet == " ") {
        break;
    }
    //console.log(greet)
}

//Map

const map = new Map()
map.set('In', "India") //'In' => 'India',
map.set('Fr', "France") // 'Fr' => 'France',
map.set('USA', "United State of America")// 'USA' => 'United State of America',
map.set('UK', "United Kingdom") // 'UK' => 'United Kingdom'
map.set('UK', "United Kingdom") // Map function is not storing repeate value its give UNIQE value
// usi Order me return karti hai


//console.log(map);

for (const key of map) {
    //console.log(key)
}
// ['In', 'India']
// ['Fr', 'France']
// ['USA', 'United State of America']
// ['UK', 'United Kingdom']
// value Array me aa gyi isko agr key me lena hai to bottom approch follow kro

for (const [key, value] of map) {
    //console.log(key, ":- " , value)
}
//Output  
// In: -  India
// Fr: -  France
// USA: -  United State of America
// UK: -  United Kingdom


// const myObject = {
//     game1 : 'NFS',
//     game2 : 'Spiderman'
// }
// for( const [key, value] of myObject){
//     console.log(key, ':-' , value);
// }
// myObject is not iterable

