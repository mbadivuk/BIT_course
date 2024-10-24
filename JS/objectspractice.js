var person = {
    name: "Marko",
    surname: "Badivuk",
    age: 33,
    height: 188,
    siblings: "Marija",
    married: true,
    hobbies: ["djing", "quizes", "basketball", "movies"],
    sayName: function () {
        console.log(person.name);
    },
    changeName: function (changedName) {
        person.name = changedName;
    }
}
console.log(person.hobbies);

person.sayName()
person.changeName("Bada")
console.log(person.name);

person.name = "Aragorn";
person.sayName()

person.new = "Novo";
console.log(person);
