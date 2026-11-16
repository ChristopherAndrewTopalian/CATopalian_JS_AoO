# CODE BOOK

---

<details>
<summary><b>Section: filter</b></summary>


### `filterByLastName.js`

```javascript
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
```

### `for_if_first_name_return_array_show_object.js`

```javascript
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
```

### `for_if_last_name_return_aoo.js`

```javascript
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
```


</details>

---

<details>
<summary><b>Section: find</b></summary>


### `find_by_first_name_returns_object.js`

```javascript
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
```

### `for_if_first_name_return_object_break_.js`

```javascript
// for_if_first_name_return_object_break_.js

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

let result = null;

for (let i = 0; i < people.length; i++)
{
    if (people[i].first_name === 'Jane')
    {
        result = people[i];
        break; // Stops the loop immediately, saving CPU cycles
    }
}

console.log(result);

//----//


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
```


</details>


---
