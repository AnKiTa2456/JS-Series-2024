
const myObj = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'Swift by apple'
}
for (const key in myObj) {
    //console.log(myObj[key])
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

//js shortcut is for Javascript

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    //console.log(`${programming[key]} for check of programming launguage`);
}

for ( const key in map){
    console.log(key);  //map is not iteratiable 
}

