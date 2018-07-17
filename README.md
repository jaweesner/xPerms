# xPerms

The ```xPerms``` application will take a string as an argument that consists of 1s, 0s, and Xs.

The output from the application will be all permutations of the string where Xs have been replace with 1s or 0s

If values other than 1, 0, or X are in the input string, they will be treated as static characters and will not be replaced or error out. ('1AX' as input  will output ` 1A1 1A0`)  

### Limitations
At high numbers of wildcards, the heap space will be exceeded as the array of permutations will be larger than heap. Efforts were made to get around this issue by implementing an iterative rather than recursive solution to improve space complexity, however 2^N permutations would still need to be created for a correct solution. If large values of wildcards were to be expected (>24ish, AKA stringLength*2^N space complexity), to counter this issue, one solution could be to use read/write streams to store the current permutation array in disk space, then read/transform/write for each loop that we need to append onto the strings. This may be more time intensive as reading from disk is slow relative to memory, but could prevent the program from erroring out due to heap memory issues.

### Examples

```
$ xPerms '010'
010

$ xPerms '0X10X'
01101
01100
00101
00100

$ xPerms 'XXX'
000 
001 
010 
011 
100 
101 
110 
111

```

### To run: 
node.js must be installed. It can be downloaded here: https://nodejs.org/en/download/

Program can be run by navigating to file directory and running :
```
$ node xPerms.js <STRING>
```

If wanting to run globally, navigate to the directory and enter:
```
$ npm link
```
You can then access the utility from any location using the command:
```
xPerms <STRING>
```

To run the test suite,  navigate to the directory and enter:
```
node test
```


### Complexity Notes: 

Time complexity is O(2^N) where N is the number of wildcards in the string (if no wildcards, will have constant time);