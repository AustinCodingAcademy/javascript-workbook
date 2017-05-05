function loops() {
    //1. Write For Loop
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }

    //2. Write For..In Loop

    var person = {};
    person.firstName = 'Aaron';
    person.lastName = 'Hines'
    person.age = 35;

    var x;
    for (x in person) {
        console.log(x);
        console.log(person[x])
    }

    //3. Write While Loop

    var a = true;

    while (a === true) {
        console.log(a);
        a = false;
    }

    //4. Write Do While Loop

    i = 1

    do {
        console.log(i);
    }
    while (i < 10);
    i++
}
