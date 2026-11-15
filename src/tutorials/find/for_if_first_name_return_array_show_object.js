// for_if_first_name_return_array_show_object.js

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

let result = [];

for (let i = 0; i < people.length; i++)
{
    if (people[i].first_name === 'Jane')
    {
        result.push(people[i]);
    }
}

console.log(result[0]);

/*
Object { first_name: "Jane", last_name: "Lane", score: 98 }
​
first_name: "Jane"

last_name: "Lane"

score: 98
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

