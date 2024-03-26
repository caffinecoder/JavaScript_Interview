/* Closure : Closure is a combination of functions 
and lexecal environment within which that function was decleared. */
//Counter Function
function counter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());

//Private Variables

function createPerson(name) {
  let age = 0;
  return {
    getName: function () {
      return name;
    },
    getAge: function () {
      return age;
    },
    increaseAge: function () {
      return ++age;
    },
  };
}
const person = createPerson("john");
console.log(person.getName());
console.log(person.getAge());
console.log(person.increaseAge());

//Callback Functions:

function fetchData(url, callback) {
  //its takes url & callback function as arguments
  setTimeout(function () {
    const data = "Some data fetched from" + " " + url;
    callback(data);
  }, 1000);
}

function processData(data) {
  console.log("Processed data: ", data);
}

fetchData("example.com", processData); // Output : Processed data:  Some data fetched from example.com
