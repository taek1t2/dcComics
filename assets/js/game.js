
//start the game
$(document).ready(function() {

    //Create a variable and add information within the array for each characters.
    let pickCharacter = {
        "Wonder Woman" : {
            name: "Wonder Woman",
            health: 250,
            attackMode: 20,
            imageURL: "assets/images/wonderwoman.jpeg",
            enemyAttackBack: 17,
        },
        "Superman" : {
            name: "Superman",
            health: 300,
            attackMod: 25,
            imageURL: "assets/images/superman.jpg",
            enemyAttackBack: 30,
        },
        "Cyborg" : {
            name: "Cyborg",
            health: 200,
            attackMode: 18,
            imageURL: "assets/images/cyborg.png",
            enemyAttackBack: 25,
        },
        "Batman" : {
            name: "Batman",
            health: 180,
            attackMode: 23,
            imageURL: "assets/images/batman.png",
            enemyAttackBack: 15,
        }
    };

    console.log(pickCharacter);

    //Adding my global variables
    //choosing the characters after choosing a character
    let sparringPartner =[];

    //laying out the player options: player chooses the opponent
    let defender;

    //counting how many attacks made.
    let attack;

    //calculating the player's damage or health points
    let turnCounter = 1;

    //Track number of defeats
    let killCount = 0;



})