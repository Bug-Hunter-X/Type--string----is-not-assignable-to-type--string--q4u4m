function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane Doe", "John Smith"];
console.log(greeter(user[0])); //Fixed: Accessing the first element of the array

//Alternative solution: Modify the function to accept an array
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(", ");
}
console.log(greeterArray(user)); //Fixed: Using the modified function