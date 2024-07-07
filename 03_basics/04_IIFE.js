// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
} )(); //IIFE function does not where it stopped , for it we have to write ; after ()() to stop function

//()() ;// that is called IIFE 
// all function rap in () and execution with ()

// Global scope ke pollution se problem hoti hai many time isase bachane ke liye hm IIFE ka use karte hai aur yee immidiately execute ho jati hai


(  (name) => {
    //Unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})(`Ankita`) 