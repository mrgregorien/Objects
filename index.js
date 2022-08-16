//great white shark
const greatWhiteShark = {
    myKingdom: 'Anamalia',
    myPhylum: 'Chordata',
    myClass: 'Chondrichthyes',
    myOrder: 'Lamniformes',
    myFamily: 'Lamnidae',
    myGenus: 'Charcharodon',
    mySpecies: 'Charcharias',
    getScientificName: function () {
        scientificName = this.myGenus + ' ' + this.mySpecies;
        return (scientificName);
    }
}
//console.log(greatWhiteShark.getScientificName());
//console.log("Object Calling: " + greatWhiteShark.myClass + " | " + " Char Length: " + greatWhiteShark.myClass.length);

greatWhiteShark.objStatus = 'Start';
//console.log(greatWhiteShark);

greatWhiteShark.objStatus = 'Updating';
//console.log(greatWhiteShark);

const newUser = {
    isNew: true,
}

newUser.username = 'nullUser';
newUser.password = '123Null';
newUser.id = '1'
//console.log(newUser)

const newObject = {
    greetMethod: function () {
        console.log('Hello world');
    }
}
//console.log(newObject.greetMethod());

const user = {
    username: 'Vulmito',
    password: '123pass',
    last_login: 'Null',
    dob: 'mm/dd/yyyy',
    usersayHi: function () {
        console.log(this.username + " says hi!");
    },
    status: 'Member'
}

//loops
//for (let key in user) {
//    //console.log(user);
//    console.log(user[key]);
//}

//console.log(user.usersayHi());
//if (user.status !== 'Member') {
//    console.log('Not a memeber');
//} else if (user.status === 'Member') {
//    console.log("Status: " + user.status)
//}

const dog1 = {
    name: 'Johnny',
    age: 4,
    food: ['wet food', 'kibble', 'scrambled eggs'],
    favToy: {
        type: 'squeaky ball',
        color: 'red'
    }
}

//console.log(dog1);

//accessing a key
//dot syntax
//console.log("Dog name is " + dog1.name);

//accessing an array with objects
//console.log(dog1.food[0]);

//accessing objects
//console.log(dog1.favToy.color);


//updates
dog1.breed = 'muut'
//dog1['breed'] = 'mutt';
dog1.age = 5;
//del practice >>
dog1.name = null;
//console.log(dog1)


const bestLocations = [
    { city: 'Oak Ville', country: 'US', region: 'North America' },
    { city: 'Orlando', country: 'US', region: 'North East' },
    { city: 'Seattle', country: 'USA', region: 'North America' },
    { city: 'Quito', country: 'US', region: 'Middle East' },
    { city: 'Toronto', country: 'US', region: 'North America' },
    { city: 'Jango', country: 'US', region: 'South America' },
    { city: 'Tango', country: 'US', region: 'Middle East' },
    { city: 'Wango', country: 'US', region: 'South America' }
]
//add neighbor key with the value of params string at the prim 
bestLocations[0].neighborhood = 'Central Park';
console.log(bestLocations);
console.log('OLD ^')
const result = [];
const addNeighbor = function (n, param) {
    const inputN = n;
    if (inputN < bestLocations.length) {
        //we move
        for (let i = 0; i < bestLocations.length; i++) {
            bestLocations[inputN].neighborhood = param;
            result.push(bestLocations)
        }
    } else {
        console.log('Not a valid entry')
    }
}
addNeighbor(5, 'City Mania')

console.log(result[5])
