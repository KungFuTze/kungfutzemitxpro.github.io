// Soccer manager activity
//Create the function getPlayingStyle, return the team you think it has the best playing style.

//Run the code in the console to find out what's the secondTeam final playing style.

/////////////////////////
//your code here
function getPlayingStyle() {

let firstTeam = [3,3,1,3];
console.log(firstTeam);
let secondTeam = firstTeam;
console.log(secondTeam);

 firstTeam[0] = 4
 firstTeam[1] = 1
 firstTeam[2] = 4
 firstTeam[3] = 1
console.log(firstTeam);
console.log(secondTeam)
return secondTeam;
}
/////////////////////////
//Uncomment this line to see the results in the browser console
console.log("results = " + getPlayingStyle())

/////////////////////////
//don't change the code under this line
if (typeof module !== 'undefined') {
  module.exports = getPlayingStyle;
}
