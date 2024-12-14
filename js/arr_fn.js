// map , filter and reduce :

// Q1. Given an array of objects users, print fullname.
const users=[
    {firstName:"john",lastName:"Biden",age:26},
    {firstName:"jimmy",lastName:"cob",age:75},
    {firstName:"sam",lastName:"lewis",age:50},
    {firstName:"Ronald",lastName:"Mathew",age:26},  
];
const fullNamesOfUsers = users.map((user)=>{
    return user.firstName + " " + user.lastName
})
console.log(fullNamesOfUsers)

// Q2.  Given an array of user objects, return an array of users who are active.
const users2 = [
    { name: "Alice", active: true },
    { name: "Bob", active: false },
  ];

const filteredUsers = users2.filter((user => user.active == true))
console.log(filteredUsers)

