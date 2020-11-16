/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Make a variable called votingAge and give it a value
   2. Return true if age is 18 or higher

   HINT: no function required
*/

let votingAge = 18;
let allowedToVote = false;

if (votingAge >= 18) { 

  console.log("Voting age is greater than or equal to 18!");
  allowedToVote = true;
}



/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Return the new value of the 1st variable

   HINT: no function required
*/

let var1 = 1;
let var2 = 2;

var1 = var2;

console.log(var1);





/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Return the result

   HINT: look up the Number method
*/


let myString = "1999";

let myInteger = parseInt(myString);

console.log(myInteger);


/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the numbers in the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(num1, num2)){
    return num1 * num2;
  }



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   3. Return the newly calculated age
*/

function dogYears(age){
   return age * 7;
}



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
  1. Invoke the hungryDog function below and pass it a weight value in pounds
  2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
  3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day
  
  REMEMBER: This program should handle correctly adult AND puppy ages and weights
  
  Feeding Requirements:

  Adult Dogs 1 year and older 
     up to 5 lbs - 5% of their body weight
     6 - 10 lbs - 4% of their body weight 
     11 - 15 lbs - 3% of their body weight 
     > 15lbs - 2% of their body weight 

  Puppies less than 1 year
     2 - 4 months 10% of their body weight
     4 - 7 months 5% of their body weight 
     7 - 12 months 4% of their body weight
    
  NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

function hungryDog(weight_lbs, age){
    
    if (age >1)
    {
      if (weight_lbs >= 5)
      {
        return weight_lbs * 0.5;
      }
      else if (weight_lbs >= 6)
      {
        return weight_lbs * 0.4;
      }
      else if (weight_lbs >= 11)
      {
        return weight_lbs * 0.3;
      }
      else { return weight_lbs * 0.15;}
      
    }
    else
    {
      if (age >= 4)
      {
        console.log("Feed your puppy 10 percent of it's weight!");
        return weight_lbs * 0.10;
      }
      else if (age >= 7)
      {
        console.log ("Feed your pupply 5% of its weight!");
        return weight_lbs *  0.5;
      }
      else 
      {
        console.log("Feed your puppy 4 percent of it's weight!");
        return weight_lbs / 0.4;
      }
    }


  }



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)

Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules of the game described below
   - win should return "you win!"
   - lose should return "you lose!"
   -tie should return "it's a tie"
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()
*/
let computer = Math.floor(Math.random() * 3) + 1; 


function game(user, computer){

  // Rock 1
  // Paper 2
  // Scissors = 3
  
  let computerChose = 0;
  let userChose = 0;

  let choice = parseInt(computer);

  if (choice == 1 )
  {
    computerChose = 1;
  }
  else if (choice == 2 )
  {
    computerChose = 2;
  }
  else
  {
    computerChose = 3;
  }

  if (user == 1)
  {
    userChose = 1;
  }
  else if (user == 2)
  {
    userChose =  2;
  }
  else 
  {
    userChose = 3;
  }


  if (userChose == computerChose)
  {
    console.log("It was a tie"); 
    return;
  }

  if (computerChose == 1) // Computer Chose Rock
  { 
    if (userChose == 2)
    {
      console.log("You win!");
    }
    else console.log("You lose!");

  }
  else if (computerChose == 2) // Computer chose paper
  {
    if (userChose == 3)
    {
      console.log("You win!");
    }
    else console.log("You lose!");


  }
  else  // computer Chose scissors
  {
    if (userChose == 1)
    {
      console.log("You win!");
    }
    else console.log("You lose!");

  }




}
  
  

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
  1. Receive a number of kilometers
  2. Convert the number of kiolmeters received to miles
  3. Return the number of miles
*/
// Divide by 8 then multiply by 5
function miles(kiloMeters)
{
  return kiloMeters / 8 * 5;   
} 






//Task 5b - Feet to CM
/*
Using the feet function below do the following:
  1. Receive a number of cm
  2. Convert the number of cm to feet
  3. Return number of feet
*/

function feet(cm){
   return cm / 30.48;
  }
 


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start to count down from the number received 
  2. At each iteration, it should return this string: 
      "(number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall"
*/

function annoyingSong(bottles){
    
  let tempHolder = bottles;
  for (let counter = 1; counter < bottles; counter++)
  {
    tempHolder = tempHolder - 1;

    console.log(tempHolder);
    console.log(" bottles of soda on the wall. Take one down pass it around ");
    console.log(tempHolder - 1);
    console.log(" bottles of beer on the wall.");

  }
  }


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 = A 
   80-89 = B 
   70-79 = C 
   60-69 =  D 
   below 60 = F
*/
  
function grade(grade){
     if (grade >= 90)
     {
       console.log("A");
     }
     if (grade <= 89 && grade >= 80)
     {
       console.log("B");
     }
     if (grade <= 79 && grade >= 70)
     {
       console.log("C");
     }
     if (grade <= 69 && grade >= 60)
     {
       console.log("D");
     }
     else
     {
       console.log("F");
     }
  }
  
  
  
  

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/


function vowelCounter(/*add your code here*/) {
    /*add your code here*/
}



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
    console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default{
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade
}
