var i = 0


do{
    console.log(i)
    i++;
}

while (i < 1000);

let person = [{
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1928",
    gender: "female"



},
// {
//     firstName: "lane",
//     lastName: "poe",
//     birthDate: "Jan 5, 1945",
//     gender: "male"
// },
// {
//     firstName: "pane",
//     lastName: "loe",
//     birthDate: "Jan 5, 1924",
//     gender: "female"
// },
// {
//     firstName: "kane",
//     lastName: "jole",
//     birthDate: "Jan 5, 1975",
//     gender: "male"
// }
]
var text = "";
var x = birthDate
for (x in person) {
  text += person[x] + " ";
}