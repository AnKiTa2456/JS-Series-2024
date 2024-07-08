const coding = ["js", "rb", "py", "java", "cpp"]

coding.forEach(function (val){
    //console.log(val)
})

//with arrow function
coding.forEach(   (item)  => {
    //console.log(item);
})

// function referance
function printMe(item){
   //console.log(item)
}
//coding.forEach(printMe)

coding.forEach(  (item , index, arr)=> {
    console.log(item, index, arr)
})
/*
js 0['js', 'rb', 'py', 'java', 'cpp']
rb 1['js', 'rb', 'py', 'java', 'cpp']
py 2['js', 'rb', 'py', 'java', 'cpp']
java 3['js', 'rb', 'py', 'java', 'cpp']
cpp 4['js', 'rb', 'py', 'java', 'cpp']  */


const myCoding = [
    {
        launguageName : "javascript",
        launguageFileName : "Js"
    },
    {
        launguageName: "C++",
        launguageFileName: "cpp"
    },
    {
        launguageName: "pps",
        launguageFileName: "c"
    },
    {
        launguageName: "javascript",
        launguageFileName: "Java"
    }
    
]

myCoding.forEach( (item) => {
    console.log(item.launguageFileName)       /*Js
                                                cpp
                                                c
                                                Java*/
})

