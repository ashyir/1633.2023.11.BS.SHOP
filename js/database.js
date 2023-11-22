// Variable Examples.
var a1 = 1;
var a2 = 2;
var a = [1, 2, "a", [2, "a"]];
console.log(a[2]);
a[2] = [2, 4];
console.log(a[2]);

var p_name = "Trung";
var p_school = "Greenwich";
var p_email = "trung@greenwich.edu.vn";
var p_phone = "04324236564";

var person = {
    "name": "Trung",
    "school": "Greenwich",
    "email": "trung@greenwich.edu.vn",
    "phone": "04324236564"
};

console.log(person.name);
person.name = "ABC";
console.log(person.name);

var persons = [
    {
        "name": "Trung",
        "school": "Greenwich",
        "email": "trung@greenwich.edu.vn",
        "phone": "04324236564",
    },
    {
        "name": "Anh",
        "school": "Greenwich",
        "email": "anh@greenwich.edu.vn",
        "phone": "04535654767",
    }
];

console.log(persons[0]);
console.log(persons[0].name);

persons[0] = {
    "name": "Other",
    "school": "Greenwich",
    "email": "other@greenwich.edu.vn",
    "phone": "123",
};

console.log(persons[0]);
console.log(persons[0].name);

persons[0].name = "Another Other";
console.log(persons[0].name);
// End Variable Examples.

var accounts = [
    {
        "first_name": "",
        "last_name": "",
        "email": "test@test.com",
        "password": "abc",
    },
    {
        "first_name": "",
        "last_name": "",
        "email": "admin@test.com",
        "password": "abc",
    },
];