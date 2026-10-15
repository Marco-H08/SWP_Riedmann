interface Person {
    firstname: string;
    lastname: string;
    age: number;
    isMale?: boolean;
    friends?: Person[]
}

const person: Person = {
    firstname: "Hermann",
    lastname: "Maier",
    age: 55,
    friends: [{
        firstname: "Kai",
        lastname: "müller",
        age: 14,

    }, {
        firstname: "Kai",
        lastname: "müller",
        age: 14,

    }]
}

function printName(person: any) {
    console.log(person.firstname);
}

console.log("test1");

console.log(person.friends);
