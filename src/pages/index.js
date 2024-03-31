// css of main page
import './index.css';

// components of main page
import { print as printHeader } from  '../components/Header/header.js';
import { print as printFooter } from '../components/Footer/footer.js';

// logic of main page
console.log('hello index.js');
printHeader();
printFooter();