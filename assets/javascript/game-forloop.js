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

    // add onclick event to portraits to select player and computer characters
    // and create battle-sprite images and attack button

    $(".portrait").hover(function () {
        $(this).css({ 'cursor': 'pointer' });
    });

    for (var i = 0; i < characterArray.length; i++) {
        $(characterArray[i].portraitID).attr("data-sprite-id", characterArray[i].spriteID);
        $(characterArray[i].portraitID).attr("data-sprite-src", characterArray[i].spriteSrc);
        $(characterArray[i].portraitID).click(function () {
            if (playerCharacterSelectPhase === true) {

                $(this).css("opacity", "0.5");

                var sprite = $(`<img id = "${$(this).attr("data-sprite-id")}" src = "${$(this).attr("data-sprite-src")}">`);

                $("#player-position").append(sprite);
                sprite.css({
                    "transform": "scaleX(-1)",
                    "position": "absolute",
                    "bottom": 0,
                });
                $("#kefka-sprite").css({
                    "transform": "scaleX(1)",
                    "bottom": -20,
                    "left": -30,
                });
                $("#left-ui-text").text("Choose opponent");
                playerCharacterSelectPhase = false;
                enemyCharacterSelectPhase = true;
            } else if (enemyCharacterSelectPhase === true) {

            }
        });
    }


    // add onclick event to attack button to do attack/defense/counter-attack math

    // if player character hp reaches 0, add "lose" message and reset game button

    // else if enemy characters remaining = 0, add "win" message and reset game button

});