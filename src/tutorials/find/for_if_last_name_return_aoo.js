// for_if_last_name_return_aoo.js

let people = [
    {
        first_name: 'Jane',
        last_name: 'Lane',
        score: 98
    },

    {
        first_name: 'Tory',
        last_name: 'Lane',
        score: 87
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
    if (people[i].last_name === 'Lane')
    {
        result.push(people[i]);
    }
}

console.log(result);

/*
Array [ {…}, {…} ]
​
0: Object { first_name: "Jane", last_name: "Lane", score: 98 }

first_name: "Jane"

last_name: "Lane"

score: 98

<prototype>: Object { … }

1: Object { first_name: "Tory", last_name: "Lane", score: 87 }

first_name: "Tory"

last_name: "Lane"

score: 87

<prototype>: Object { … }

length: 2

<prototype>: Array []
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

