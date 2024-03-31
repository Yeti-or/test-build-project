// css of feedback page
require('./feedback.css');

// components of feedback page
const { print: printHeader } = require('../components/Header/header.js');
const { print: printFooter } = require('../components/Footer/footer.js');

// logic of feedback page
console.log('hello feedback.js');
printHeader();
printFooter();
