process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function (data) {
  input_stdin += data;
});

process.stdin.on("end", function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
  try {
    var t = parseInt(readLine());
    if (t >= 1 && t <= Math.pow(10, 5)) {
      for (var a0 = 0; a0 < t; a0++) {
        var n = parseInt(readLine());
        if (n >= 1 && n <= Math.pow(10, 9)) {
          console.log(
            `${sum_divisor(n, 3n) + sum_divisor(n, 5n) - sum_divisor(n, 15n)}`
          );
        }
      }
    }
  } catch (e) {
    console.error(e);
  }
}

function sum_divisor(n, divisor) {
  let counter = (BigInt(n) - 1n) / divisor;

  return (counter * ((counter + 1n) * divisor)) / 2n;
}
