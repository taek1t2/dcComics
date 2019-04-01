
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

    //choosing the characters after choosing a character
    let sparringPartner =[];

    //characters that the player DIDNT select
    let combatants = [];

    //laying out the player options: player chooses the opponent
    let defender;

    //counting how many attacks made.
    let attack;

    //calculating the player's damage or health points
    let turnCounter = 1;

    //Track number of defeats
    let killCount = 0;

    //Rendering characters into the html.
    let createChar = function(renderingSection, characters) {
        let charDiv = $("<div class='pickCharacter' data-name='" + pickCharacter.name + "'>");
        let charName = $("<div class='character-name'>").text(pickCharacter.name);
        let charImage = $("<img alt='image' class='character-image'>").attr("src", pickCharacter.imageURL);
        let charHealth = $("<div class='character-health'>").text(pickCharacter.health);
        charDiv.append(charName).append(charImage).append(charHealth);
        $(renderingSection).append(charDiv);

        return charDiv;
    };

    //possibly reset the game function here.

    //this particular function would load all the characters into the characterSection to be selected.
    var startGame = function() {

        //Use FOR loop through the characters object and call the createChar on each character to their html card.
        for (var key in pickCharacter) {
            createChar(pickCharacter[key], "#pickCharacter");
        }
    };

    //run the startGame function again
    startGame();


    //This function handles updating the selected player or the current defender. If there is no selected player/defender this function will place the character based on the render area chosen.
    let updateChar = function (charObj, sparringArea) {
        
        //Empty the area so that we can re-render the new object.
        $(sparringArea).empty();
        createChar(charObj, sparringSection);
    }

    //This function will render the available-to-attack enemies. This should be run once after a character has been selected.
    let renderSparring = function (sparringArr) {
        for (var i=0; i < sparringArr.length; i++) {
            createChar(sparringArr[i], "#sparringPartner");
        }
    };

    //Function to handle rendering game messages.
    var renderMessage = function(message) {
        //Builds the message and appends it to the page.
        var gameMessageSet = $("#gameMessage");
        var newMessage = $("<div>").text(message);
        gameMessageSet.append(newMessage);
    };

    //Function which handles restarting the game after victory or defeat.
    var restartGame = function(resultMessage) {
        //When the 'Restart' button is clicked, reload the page.
        var restart = $("<button>Restart</button>").click(function() {
            location.reload();
        });

        //Build div that will display the victory/defeat message.
        var gameState= $("<div>").text(resultMessage);

        //Render the restart button and victory/deffeat message to the page.
        $("body").append(gameState);
        $("body").append(restart);
    };

    //Function to clear the game message section
    var clearMessage = function() {
        var gameMessage = $("#gameMessage");

        gameMessage.text("");
    }

})

