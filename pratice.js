var dojo ={};      // WHY CREATE AN EMPTY BRACKET?
dojo = {
    name: 'Coding Dojo',        // property can store a string
    number_of_students: 13,     // property can store a number
    instructors: ['Sparos','Greg','Eli'],       // property can store arrays
    location: {                                 // property can even store another object!
        city: 'San Jose',
        state: 'CA',
        zipcode: 95112
    }
}                                                   // access object properties with dot (.) notation
console.log(dojo.name, dojo.number_of_students, dojo.instructors, dojo.location);
console.log(dojo["name"]);                     // or bracket [] notation (note: specify key in quotes)
dojo.snacks = ['Fig Bars', 'Bagels', 'Popcorn', 'Apples'];             // DOES THIS GO IN THE CURLY BRACKET?
dojo.number_of_students = 40;         // we can reassign any of the properties
dojo.location.city = "Bellevue";
dojo.location.state = "Washington";
dojo.location.zipcode = "unknown";

console.log (dojo);

