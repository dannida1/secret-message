let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//1.
secretMessage.pop();

//2.
console.log(secretMessage.length);

//3.
secretMessage.unshift('Your', 'Notice:');
secretMessage.push('to', 'Program');
console.log(secretMessage);

//4.
let theIndex = secretMessage.indexOf('easily');
secretMessage[theIndex] = 'right';
console.log(secretMessage);

//5.
secretMessage.shift();
console.log(secretMessage);

//6.
secretMessage.unshift('Programming');
console.log(secretMessage);