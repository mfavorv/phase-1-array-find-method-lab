// code your solution here
function superbowlWin(games){
const finder = games.find(game => game.result === "W");

if (finder) {
    return finder.year;
} else {
    return undefined;
}
}

const games = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]

console.log(superbowlWin(games))

