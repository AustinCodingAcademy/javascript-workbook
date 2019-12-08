const pets = ['cat', 'dog', 'rat'];
for (let i = 0, length = pets.length; i < length; i++) {
  pets[i] = pets[i] + 's';
}
console.log(pets);