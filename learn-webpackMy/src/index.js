import _ from 'lodash';
import './style.css';
import printMe from './print.js';


function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello, ', 'webpack'], ' ');
  element.classList.add('hello');
  
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

const { Uploader } = require("uploader");

// Get production API keys from Upload.io
const uploader = Uploader({
  apiKey: "free"
});

uploader.open({ multi: true }).then(files => {
  if (files.length === 0) {
    alert('No files selected.')
  } else {
    alert('Files uploaded:');
    alert(files.map(f => f.fileUrl));
  }
}).catch(err => {
  console.error(err);
});

open();

document.body.appendChild(component());


// var moment = require("moment");
// console.log(moment().format("MMM Do YY"));