//great white shark
const greatWhiteShark = {
    myKingdom: 'Anamalia',
    myPhylum: 'Chordata',
    myClass: 'Chondrichthyes',
    myOrder: 'Lamniformes',
    myFamily: 'Charcharodon',
    mySpecies: 'Charcharias'
}

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

console.log(user.usersayHi());
if (user.status !== 'Member') {
    console.log('Not a memeber');
} else if (user.status === 'Member') {
    console.log("Status: " + user.status)
}