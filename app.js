const readFilePromise = require('./readFilePromise');

const resultPromise = readFilePromise('random.txt');

if (true) {
  console.log(resultPromise.then((result) => console.log(result)));
}
