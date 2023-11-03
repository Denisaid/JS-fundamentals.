function employees(nameArray) {
  let obj = {};

  for (const name of nameArray) {
    obj[name] = name.length;
  }

  for (const name in obj){
    
    console.log(`Name: ${name} -- Personal Number: ${obj[name]}`);
  }

}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
