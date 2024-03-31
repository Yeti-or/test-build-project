// css of main page
import './index.css';

// components of main page
import { print as printHeader } from '../components/Header/header.js';
import { print as printFooter } from '../components/Footer/footer.js';

// logic of main page
console.log('hello index.js');
printHeader();
printFooter();

if (process.env.NODE_ENV === 'development') {
  console.log('Hello dear dev');
}
console.log(VERSION);
console.log(process.env.NODE_ENV);
// console.log(UPS);
