//////////////////SETUP////////////////////
// Open javascripot-2/index.html in the browser. You should see "An Ode to Code" and a small box below it.

//////////////////STEP 1////////////////////
//Create a variable called lovesCode and set it true or false (as a boolean) depending on if you love code or not. It's okay if you don't, yet

// Code Here
const lovesCode = true;
//////////////////STEP 2////////////////////
//Create a variable called age that is your age as a number

// Code Here
const age = 35;
//////////////////STEP 3////////////////////
//Create a variable called name that is your name as a string

// Code Here
const name = 'Jared';
//////////////////STEP 4////////////////////
//Create a variable called phrase that is initially set as an empty string

// Code Here
const phrase = '';
//////////////////STEP 5////////////////////
//Create an if statement that checkes to see if the lovesCode variable is equal to true, if it is, set the phrase variable created above to 'I love code', it it's not true set the phrase variable to 'I do not love to code'

// Code Here
const toBeOrNot = () => {
    if(lovesCode ===true){
        return 'I love code'
    } else {
        return 'I do not love code'
    }
}
//////////////////Wrap Up////////////////////
// Refresh the index.html page in your browser. You should now see a poem that uses the variables from above.