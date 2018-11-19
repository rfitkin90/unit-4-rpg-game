// put portraits and background in html
$(document).ready(function () {
    // assign attack, defense, and counter-attack points to each character
    var terra = {
        attackPoints: 6,
        hitPoints: 100,
        counterAttackPoints: 4,
        selected: false,
        portrait: $("#terra-portrait"),
        sprite: $('<img id="terra-sprite" src="assets/images/terra-sprite.png">'),
    };

    var locke = {
        attackPoints: 8,
        hitPoints: 120,
        counterAttackPoints: 8,
        selected: false,
        portrait: $("#locke-portrait"),
        sprite: $('<img id="locke-sprite" src="assets/images/locke-sprite.png">'),
    };

    var cyan = {
        attackPoints: 10,
        hitPoints: 140,
        counterAttackPoints: 12,
        selected: false,
        portrait: $("#cyan-portrait"),
        sprite: $('<img id="cyan-sprite" src="assets/images/cyan-sprite.png">'),
    };

    var kefka = {
        attackPoints: 12,
        hitPoints: 160,
        counterAttackPoints: 16,
        selected: false,
        portrait: $("#kefka-portrait"),
        sprite: $('<img id="kefka-sprite" src="assets/images/kefka-sprite.png">'),
    };

    var characterArray = [terra, locke, cyan, kefka];

    var playerCharacterSelectPhase = true;
    var enemyCharacterSelectPhase = false;
    var battlePhase = false;

    // add onclick event to portraits to select player and computer characters and create battle-sprite images and attack button

    $(".portrait").hover(function () {
        $(this).css({ 'cursor': 'pointer' });
    });

    terra.portrait.click(function () {
        if (playerCharacterSelectPhase === true) {
            $(this).css("opacity", "0.5");
            terra.sprite.appendTo($("#player-position"));
            terra.sprite.css({
                "transform": "scaleX(-1)",
                "position": "absolute",
                "bottom": 0,
            });
            $("#choose-character").text("Choose opponent");
            playerCharacterSelectPhase = false;
            enemyCharacterSelectPhase = true;
        } else if (enemyCharacterSelectPhase === true) {

        }
    });
    locke.portrait.click(function () {
        if (playerCharacterSelectPhase === true) {
            $(this).css("opacity", "0.5");
            locke.sprite.appendTo($("#player-position"));
            locke.sprite.css({
                "transform": "scaleX(-1)",
                "position": "absolute",
                "bottom": 0,
            });
            $("#choose-character").text("Choose opponent");
            playerCharacterSelectPhase = false;
            enemyCharacterSelectPhase = true;
        }
    });
    cyan.portrait.click(function () {
        if (playerCharacterSelectPhase === true) {
            $(this).css("opacity", "0.5");
            cyan.sprite.appendTo($("#player-position"));
            cyan.sprite.css({
                "transform": "scaleX(-1)",
                "position": "absolute",
                "bottom": 0,
            });
            $("#choose-character").text("Choose opponent");
            playerCharacterSelectPhase = false;
            enemyCharacterSelectPhase = true;
        }
    });
    kefka.portrait.click(function () {
        if (playerCharacterSelectPhase === true) {
            $(this).css("opacity", "0.5");
            kefka.sprite.appendTo($("#player-position"));
            kefka.sprite.css({
                "position": "absolute",
                "bottom": -20,
                "left": -30,
            });
            $("#choose-character").text("Choose opponent");
            playerCharacterSelectPhase = false;
            enemyCharacterSelectPhase = true;
        }
    });

    // how to make this work?
    characterArray[i].portrait.click(function () {
        if (playerCharacterSelectPhase === true) {
            $(this).css("opacity", "0.5");
            characterArray[i].sprite.appendTo($("#player-position"));
            characterArray[i].sprite.css({
                "transform": "scaleX(-1)",
                "position": "absolute",
                "bottom": 0,
            });
            kefka.sprite.css({
                "transform": "scaleX(1)",
                "bottom": -20,
                "left": -30,
            });
            $("#choose-character").text("Choose opponent");
            playerCharacterSelectPhase = false;
            enemyCharacterSelectPhase = true;
        } else if (enemyCharacterSelectPhase === true) {

        }
    });


    // add onclick event to attack button to do attack/defense/counter-attack math

    // if player character hp reaches 0, add "lose" message and reset game button

    // else if enemy characters remaining = 0, add "win" message and reset game button

});