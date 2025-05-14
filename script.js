function parseCode(str) {
  // Split the string by '0' and filter out empty strings
  const parts = str.split('0').filter(part => part !== '');
  
  return {
    firstName: parts[0],
    lastName: parts[1],
    id: parts[2]
  };
}

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
 encodedstring prase