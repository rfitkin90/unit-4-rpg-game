// put portraits and background in html
$(document).ready(function () {
    // assign attack, defense, and counter-attack points to each character
    var terra = {
        attackPoints: 6,
        hitPoints: 100,
        counterAttackPoints: 4,
        selected: false,
        playerCharacter: false,
        currentEnemyCharacter: false,
        defeated: false,
        portraitID: "#terra-portrait",
        spriteSrc: "assets/images/terra-sprite.png",
    };

    var locke = {
        attackPoints: 8,
        hitPoints: 120,
        counterAttackPoints: 8,
        selected: false,
        playerCharacter: false,
        currentEnemyCharacter: false,
        defeated: false,
        portraitID: "#locke-portrait",
        spriteSrc: "assets/images/locke-sprite.png",
        spriteID: "locke-sprite",

    };

    var cyan = {
        attackPoints: 10,
        hitPoints: 140,
        counterAttackPoints: 12,
        selected: false,
        playerCharacter: false,
        currentEnemyCharacter: false,
        defeated: false,
        portraitID: "#cyan-portrait",
        spriteSrc: "assets/images/cyan-sprite.png",
        spriteID: "cyan-sprite",
    };

    var kefka = {
        attackPoints: 12,
        hitPoints: 160,
        counterAttackPoints: 16,
        selected: false,
        playerCharacter: false,
        currentEnemyCharacter: false,
        defeated: false,
        portraitID: "#kefka-portrait",
        spriteSrc: "assets/images/kefka-sprite.png",
        spriteID: "kefka-sprite",
    };

    var characterArray = [terra, locke, cyan, kefka];

    var playerCharacterSelectPhase = true;
    var enemyCharacterSelectPhase = false;
    var battlePhase = false;
    var playerAttackPoints = null;
    var playerHitPoints = null;
    var enemyCounterAttackPoints = null;
    var enemyHitPoints = null;
    var playerSprite = null;
    var enemySprite = null;
    var characterSelected = null;


    $(".portrait").hover(function () {
        $(this).css({ 'cursor': 'pointer' });
    });

    // add onclick event to portraits to select player and computer characters
    // and create battle-sprite images and attack button
    for (var i = 0; i < characterArray.length; i++) {

        // directly links the other properties of each object to the corresponding portrait that is clicked
        $(characterArray[i].portraitID).attr("data-attack-points", characterArray[i].attackPoints);
        $(characterArray[i].portraitID).attr("data-hit-points", characterArray[i].hitPoints);
        $(characterArray[i].portraitID).attr("data-counter-attack-points", characterArray[i].counterAttackPoints);
        $(characterArray[i].portraitID).attr("data-selected", characterArray[i].selected);
        $(characterArray[i].portraitID).attr("data-player-character", characterArray[i].playerCharacter);
        $(characterArray[i].portraitID).attr("data-current-enemy-character", characterArray[i].currentEnemyCharacter);
        $(characterArray[i].portraitID).attr("data-defeated", characterArray[i].defeated);
        $(characterArray[i].portraitID).attr("data-sprite-src", characterArray[i].spriteSrc);
        $(characterArray[i].portraitID).attr("data-sprite-id", characterArray[i].spriteID);

        // when clicking the portrait
        $(characterArray[i].portraitID).click(function () {

            //checks if the player character select phase is active
            if (playerCharacterSelectPhase === true) {

                // fades out the portrait of the character picked
                $(this).css("opacity", "0.5");

                // creates the sprite w/ the ID and Src belonging to the same object as the clicked portrait
                playerSprite = $(`<img id = "${$(this).attr("data-sprite-id")}" src = "${$(this).attr("data-sprite-src")}">`);

                playerAttackPoints = $(this).attr("data-attack-points");
                playerHitPoints = $(this).attr("data-hit-points");
                characterSelected = $(this).attr("data-selected");
                this.characterSelected = true;
                console.log(`Selected value: ${characterSelected}`);
                console.log(`Selected value: ${terra.selected}`);

                // appends the sprite to player position(on the left)
                $("#player-position").append(playerSprite);

                // what the heck is this crap
                    // characterArray[i].selected = true;
                    // console.log(characterArray[i].selected);

                // gives some css to playerSprite
                playerSprite.css({
                    // flips image horizontally
                    "transform": "scaleX(-1)",
                    // positions sprite relative to parent div
                    "position": "absolute",
                    // puts sprite at bottom of div so sprites of different height are standing in the same spot
                    "bottom": 0,
                });
                // kefka requires unique css since his sprite is larger and facing the other direction compared to the 3 other sprites
                $("#kefka-sprite").css({
                    "transform": "scaleX(1)",
                    "bottom": -20,
                    "left": -30,
                });

                $("#left-ui-text").text("Choose opponent");

                // ends player select phase and begins enemy select phase
                playerCharacterSelectPhase = false;
                enemyCharacterSelectPhase = true;

                // if player has already selected a character
            } else if (enemyCharacterSelectPhase === true) {

                enemySprite = $(`<img id = "${$(this).attr("data-sprite-id")}" src = "${$(this).attr("data-sprite-src")}">`);

                enemyCounterAttackPoints = $(this).attr("data-counter-attack-points");
                enemyHitPoints = $(this).attr("data-hit-points");

                $("#enemy-position").append(enemySprite);

                enemySprite.css({
                    "position": "absolute",
                    "bottom": 0,
                });
                
                $("#left-ui-text").hover(function () {
                    $(this).css({ 'cursor': 'pointer' });
                });
                $("#left-ui-text").text("Click Here to Attack");
                $("#left-ui-text").addClass("attack-button");

                

                enemyCharacterSelectPhase = false;
                battlePhase = true;
                console.log(battlePhase);
                console.log(`Player attack points: ${playerAttackPoints}`);
                console.log(`Player hit points: ${playerHitPoints}`);
                console.log(`Enemy counter-attack points: ${enemyCounterAttackPoints}`);
                console.log(`Enemy hit points: ${enemyHitPoints}`);
            }
        });
    }


    // add onclick event to attack button to do attack/defense/counter-attack math

    // if player character hp reaches 0, add "lose" message and reset game button

    // else if enemy characters remaining = 0, add "win" message and reset game button

});