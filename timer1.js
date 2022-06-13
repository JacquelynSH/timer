/*Implement an alarm clock / timer which will beep after a specified amount of time has passed.
The user can specify an unlimited number of alarms using command line arguments
ex.
node timer1.js 10 3 5 15 9 <-- passed in terminal will make it beep at:
3 seconds
5 seconds
9 seconds
10 seconds
15 seconds
*/

// take in arguments from the terminal
const args = process.argv;
// slice off the 1st two, just leaving an array
let args1 = args.slice(2);
// arrange the array in order from smallest to largest
args1.sort(function(a, b) {
  return a - b;
});

// store in seconds as an array
const seconds = args1.slice();
// loop through the array
for (let i = 0; i < seconds.length; i++) {
// use the settimeout function to stagger the beeps
  setTimeout(() => {
    // activate the beeps!
    process.stdout.write('\x07');
    // multiply the array at each index by 1000 - 1000 = 1 second
  }, seconds[i] * 1000);
}
