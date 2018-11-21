// put portraits and background in html
$(document).ready(function () {
    // assign attack, defense, and counter-attack points to each character
    var terra = {
        attackPoints: 6,
        hitPoints: 100,
        counterAttackPoints: 4,
        selected: false,
        dead: false,
        portraitID: "#terra-portrait",
        spriteSrc: "assets/images/terra-sprite.png",
    };

    var locke = {
        attackPoints: 8,
        hitPoints: 120,
        counterAttackPoints: 8,
        selected: false,
        portraitID: "#locke-portrait",
        spriteSrc: "assets/images/locke-sprite.png",
        spriteID: "locke-sprite",

    };

    var cyan = {
        attackPoints: 10,
        hitPoints: 140,
        counterAttackPoints: 12,
        selected: false,
        portraitID: "#cyan-portrait",
        spriteSrc: "assets/images/cyan-sprite.png",
        spriteID: "cyan-sprite",
    };

    var kefka = {
        attackPoints: 12,
        hitPoints: 160,
        counterAttackPoints: 16,
        selected: false,
        portraitID: "#kefka-portrait",
        spriteSrc: "assets/images/kefka-sprite.png",
        spriteID: "kefka-sprite",
    };

    var characterArray = [terra, locke, cyan, kefka];

    var playerCharacterSelectPhase = true;
    var enemyCharacterSelectPhase = false;
    var battlePhase = false;


    $(".portrait").hover(function () {
        $(this).css({ 'cursor': 'pointer' });
    });

    // add onclick event to portraits to select player and computer characters
    // and create battle-sprite images and attack button
    for (var i = 0; i < characterArray.length; i++) {

        // directly links the spriteID/Src of each object to its sibling portraitId
        $(characterArray[i].portraitID).attr("data-sprite-id", characterArray[i].spriteID);
        $(characterArray[i].portraitID).attr("data-sprite-src", characterArray[i].spriteSrc);

        // when clicking the portrait
        $(characterArray[i].portraitID).click(function () {

            //checks if the player character select phase is active
            if (playerCharacterSelectPhase === true) {

                // fades out the portrait of the character picked
                $(this).css("opacity", "0.5");

                // creates the sprite w/ the ID and Src belonging to the same object as the clicked portrait
                var playerSprite = $(`<img id = "${$(this).attr("data-sprite-id")}" src = "${$(this).attr("data-sprite-src")}">`);

                // appends the sprite to player position(on the left)
                $("#player-position").append(playerSprite);

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

                var enemySprite = $(`<img id = "${$(this).attr("data-sprite-id")}" src = "${$(this).attr("data-sprite-src")}">`);

                $("#enemy-position").append(enemySprite);

                enemySprite.css({
                    "position": "absolute",
                    "bottom": 0,
                });
                
                $("#left-ui-text").hover(function () {
                    $(this).css({ 'cursor': 'pointer' });
                });
                $("#left-ui-text").text("Click Here to Attack");

                enemyCharacterSelectPhase = false;
                battlePhase = true;
            }
        });
    }


    // add onclick event to attack button to do attack/defense/counter-attack math

    // if player character hp reaches 0, add "lose" message and reset game button

    // else if enemy characters remaining = 0, add "win" message and reset game button

});