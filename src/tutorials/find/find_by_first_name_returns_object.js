// find_by_first_name_returns_object.js

let people = [
    {
        first_name: 'Jane',
        last_name: 'Lane',
        score: 98
    },

    {
        first_name: 'Joan',
        last_name: 'Evans',
        score: 93
    }
];

// Look through the people array, and find the person whose first_name is Jane.
let jane = people.find(function(person)
{
    return person.first_name === 'Jane';
});

console.log(jane);

/*
Object { first_name: "Jane", last_name: "Lane", score: 98 }

first_name: "Jane"

last_name: "Lane"

score: 98

<prototype>: Object { … }
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

