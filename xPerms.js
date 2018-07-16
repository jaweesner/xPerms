#!/usr/bin/env node

const path  = require('path');
// could also have done this recursively, but time complexity the same (2^N)

//primary function
function xPerms(templateString){
  //this should never happen in command line utility
  // as args on process converted to strings
  if (typeof templateString != 'string'){
    throw new TypeError('Invalid input - must be a string');
  }
  if (templateString.length  === 0){
    return [];
  }
  let constArr = templateString.split('X');
  
  let stringPerms = [constArr[0]];
  for(let i = 1; i<constArr.length; i++){
    nextPiece = [];
    stringPerms.forEach(perm => {
      nextPiece.push(perm+'0'+constArr[i]);
      nextPiece.push(perm+'1'+constArr[i]);
    });
    stringPerms = nextPiece;
  }
  return stringPerms;
}

//commandline interface
if (path.basename(process.argv[1]) === 'xPerms.js'){
  const permArr = xPerms(process.argv[2]);
  permArr.forEach(perm => console.log(perm))
}

module.exports.xPerms = xPerms;

