// Put a parrameter "n" that says the sizes of the letter and parameter "times" that says how many times we want the M to be written
var n = 5;
var times = 2;

// Create a constant that is same as "n"to

const m = n;

//Create a variable that determines the middle of the letter "M"

var middle = (n + 1) / 2;

//We need two counters that will control the amount of symbols above the middle of the letter starIncrease the stars above the middle and
//two counters that will control the amount of symbols bellow the middle of the letter: "increase" for dashes up-down and "decrease" for stars up-down

var contourIncrease = 0;
var spaceDecrease = 0;
var spaceIncrease = 1;
var contourDecrease = 1;

// Define the symbols for easier use

var dash = "-";
var star = "*";

//Check the parrametter if it is odd or even

if (n % 2 != 0) {
  //If the condition is true come here

  //The first loop will draw the letter above the middle. The letter is created with two mirror oriented parts - frame and contour with empty space between them.

  for (var i = 0; i < middle; i++) {
    // We create the frame of the letter consisting of dashes that decrease with 1 symbol each line

    var frame = dash.repeat(n--);

    //While the frame decrease the contour will increase with 2 symbols - one to substitude a symbol from the frame and one to substitude a symbol from the space

    var contour = star.repeat(m + contourIncrease);

    //The empty space of decrease with 2 symbols - one to fit the content on his left side and one to fit the content on his right side

    var space = dash.repeat(m - spaceDecrease);

    //Assemble all the varialbles

    var Letter = frame + contour + space + contour + frame;

    // Increase the variables we used above to be ready for the next cycle

    contourIncrease += 2;
    spaceDecrease += 2;

    //Open the result in the console

    console.log(Letter.repeat(times));
  }

  //The second loop will draw the letter below the middle. Here we have two mirror oriented parts - frame,contour and space with contour between them.

  for (i = middle; i > 0; i--) {
    // The frame continue to be generated starting with the last amount generated of the previous loop

    var frame = dash.repeat(n--);

    //We have a part of the contour that stays static bellow the middle of the letter

    var sideContour = star.repeat(m);

    //The space between the contour increases with 2 symbols up-down one to substitude symbol taken from the frame on left and one to substitude symbol taken from the midContour

    var space = dash.repeat(spaceIncrease);

    //The contour in the middle of the letter decreases with 2 symbols

    var midContour = star.repeat(m * 2 - contourDecrease);

    //Assemble all the varialbles

    var Letter =
      frame + sideContour + space + midContour + space + sideContour + frame;

    // Increase the variables we used above to be ready for the next cycle

    spaceIncrease += 2;
    contourDecrease += 2;

    //Open the result in the console

    console.log(Letter.repeat(times));
  }
}
//Give feedback if the parammeter is even number
else {
  alert("Write down odd number");
}
