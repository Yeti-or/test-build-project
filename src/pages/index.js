// css of main page
import './index.css';

// components of main page
import { print as printHeader } from '../components/Header/header';
import { print as printFooter } from '../components/Footer/footer';

// logic of main page
console.log('hello index.js');
printHeader();
printFooter();

if (process.env.NODE_ENV === 'development') {
  console.log('Hello dear dev');
}

// NOTE: VERSION is set inside webpack.config.js
// eslint-disable-next-line no-undef
console.log(VERSION);
console.log(process.env.NODE_ENV);
// console.log(UPS);
