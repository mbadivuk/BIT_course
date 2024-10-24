//task1
// var favcoffee = {
//     name: "cafe noir",
//     bean: "arabica",
//     strength: "very strong",
//     preparation: "ground coffee beans steeped in hot water",
//     milk: false,
//     suggar: false,
//     quality: "especially important!"
// }
// console.log(favcoffee);

//task2
// var favmovie = {
//     title: "Lord of the Rings",
//     actors: ["Sean Astin", "Billy Boyd", "Viggo Mortensen", "Orlando Bloom", "Liv Tyler"],
//     director: "Peter Jackson",
//     genre: ["adventure epic", "fantasy epic", "quest", "sword & sorcery", "action", "adventure", "drama", "fantasy"],
//     popularity: true
// }
// console.log(favmovie.title);

//task3
function createProject(description, language, git, status) {
    var obj = {}
    obj.description = description;
    obj.language = language;
    obj.git = git;
    obj.status = status;
    obj.printGit = function () {
        console.log(obj.git);
    }
    obj.checkLanguage = function () {
        if (obj.language.toLowerCase() === "javascript" || obj.language.toLowerCase() === "js") {
            return true;
        }
        return false;
    }
    obj.checkStatus = function () {
        if (obj.status) {
            return true;
        }
        return false;
    }
    return obj;
}