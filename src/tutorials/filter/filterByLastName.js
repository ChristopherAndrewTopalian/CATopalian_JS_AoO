// filterByLastName.js

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

function filterByLastName(whichArray, whichLastName)
{
    let result = [];

    for (let i = 0; i < whichArray.length; i++)
    {
        if (whichArray[i].last_name === whichLastName)
        {
            result.push(whichArray[i]);
        }
    }
    return result;
}

let check = filterByLastName(people, 'Lane');

console.log(check);

//----//

/*
Array [ {…}, {…} ]

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

