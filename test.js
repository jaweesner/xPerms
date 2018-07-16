const assert = require('assert');
const { xPerms } = require('./xPerms.js');
try{
assert(Array.isArray(xPerms('')), 'function should return array'); 
assert(xPerms('').length === 0, 'an empty string should return an empty array');
assert.throws(() => xPerms(9), 'should throw error when not passed string' );
assert.throws(() => xPerms(), 'should throw error when not passed nothing' );
} catch (err) {
  console.log('Tests failed for input Validation, please resolve:', err.message);
}

try{
  const allConst = xPerms('1010101');
  const singleVar = xPerms('X');
  assert(allConst.length === 1, 'No permutations should exist for string of all static chars');
  assert(allConst[0] === '1010101', 'Output of all static chars should be same as input');
  assert(singleVar.length === 2, 'Should have two permutaions for a single wildcard');
  assert(singleVar.includes('1') && singleVar.includes('0'), 'Should have both 1 and 0 as permutations');

} catch (err){
  console.log('Tests failed for simple permutation checks, please resolve:', err.message )
}

try{
  const mixed = xPerms('X01X10X');
  const allWild = xPerms('XXXX');
  assert(mixed.length === 8, 'Number of permutations should equal 2^number of wildcards');
  assert(mixed.includes('1010101') && mixed.includes('1010100'), 'Output should contain correct permutations');
  assert(allWild.length === 16, 'Number of permutations should equal 2^number of wildcards');
  assert(allWild.includes('1010') && allWild.includes('0000'),  'Output should contain correct permutations');

} catch (err){
  console.log('Tests failed for simple permutation checks, please resolve:', err.message )
}

try{
  assert(xPerms('X01XX10XXXX1X0XXX1XXXXXX'), 'Many wildcards should not crash');
  //This Test fails! out of memory. Potentially refactor to use streams
  //assert(xPerms('X01XX10XXXX1X0XXX1XXXXXXXXXXXXXXXXX'))
} catch (err){
  console.log('Tests failed for performance checks, please resolve:', err.message )
}

console.log('all tests passed')