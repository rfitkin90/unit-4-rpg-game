// put portraits and background in html
$(document).ready(function () {
    // assign attack, defense, and counter-attack points to each character
    var terra = {
        attackPoints: 6,
        hitPoints: 100,
        counterAttackPoints: 4,
        hasBeenSelected: false,
        playerCharacter: false,
        currentEnemyCharacter: false,
        defeated: false,
        portrait: $("#terra-portrait"),
        sprite: $('<img id="terra-sprite" src="assets/images/terra-sprite.png">'),
    };

    var locke = {
        attackPoints: 8,
        hitPoints: 120,
        counterAttackPoints: 8,
        hasBeenSelected: false,
        playerCharacter: false,
        currentEnemyCharacter: false,
        defeated: false,
        portrait: $("#locke-portrait"),
        sprite: $('<img id="locke-sprite" src="assets/images/locke-sprite.png">'),
    };

    var cyan = {
        attackPoints: 10,
        hitPoints: 140,
        counterAttackPoints: 12,
        hasBeenSelected: false,
        playerCharacter: false,
        currentEnemyCharacter: false,
        defeated: false,
        portrait: $("#cyan-portrait"),
        sprite: $('<img id="cyan-sprite" src="assets/images/cyan-sprite.png">'),
    };

    var kefka = {
        attackPoints: 12,
        hitPoints: 160,
        counterAttackPoints: 16,
        hasBeenSelected: false,
        playerCharacter: false,
        currentEnemyCharacter: false,
        defeated: false,
        portrait: $("#kefka-portrait"),
        sprite: $('<img id="kefka-sprite" src="assets/images/kefka-sprite.png">'),
    };


    var playerCharacterSelectPhase = true;
    var enemyCharacterSelectPhase = false;
    var battlePhase = false;
    var playerCharacterHitPoints = null;
    var playerCharacterCurrentAttackPoints = null;
    var enemyCharacterHitPoints = null;
    var enemyCharacterCounterAttackPoints = null;

    // add onclick events to portraits to select player and computer characters and create battle-sprite images and attack button

    $(".portrait").hover(function () {
        $(this).css({ 'cursor': 'pointer' });
    });

    // terra onclick
    terra.portrait.click(function () {

        // if we're in player select phase and terra hasn't been selected already
        if (playerCharacterSelectPhase === true && terra.hasBeenSelected === false) {

            // make portrait transparent
            $(this).css("opacity", "0.5");

            // append terra's sprite to player position
            terra.sprite.appendTo($("#player-position"));
            terra.sprite.css({
                "transform": "scaleX(-1)",
                "position": "absolute",
                "bottom": 0,
            });
            
            // change hud text
            $("#left-ui-text").text("Choose opponent");

            terra.hasBeenSelected = true;
            terra.playerCharacter = true;

            // set terra's stats to playerCharacter variables
            playerCharacterHitPoints = terra.hitPoints;
            playerCharacterCurrentAttackPoints = terra.attackPoints;

            // put hp stats on screen
            var playerOnScreenHitPoints = $('<span />', {
                "class": 'player-on-screen-hit-points',
                text: `HP: ${playerCharacterHitPoints}`,
            });
            $("#player-position").append(playerOnScreenHitPoints);

            // transition to next phase
            playerCharacterSelectPhase = false;
            enemyCharacterSelectPhase = true;

            // if we're in enemy select phase and terra hasn't been selected already
        } else if (enemyCharacterSelectPhase === true && terra.hasBeenSelected === false) {

            $(this).css("opacity", "0.5");

            terra.sprite.appendTo($("#enemy-position"));
            terra.sprite.css({
                "position": "absolute",
                "bottom": 0,
            });

            $("#left-ui-text").text("Click to Attack");
            $("#left-ui-text").hover(function () {
                $(this).css({ 'cursor': 'pointer' });
            });
            $("#left-ui-text").addClass("attack-button");

            terra.hasBeenSelected = true;
            terra.currentEnemyCharacter = true;

            enemyCharacterHitPoints = terra.hitPoints;
            enemyCharacterCounterAttackPoints = terra.counterAttackPoints;

            var enemyOnScreenHitPoints = $('<span />', {
                "class": 'enemy-on-screen-hit-points',
                text: `HP: ${enemyCharacterHitPoints}`,
            });
            $("#enemy-position").append(enemyOnScreenHitPoints);

            enemyCharacterSelectPhase = false;
            battlePhase = true;
        }

    });

    locke.portrait.click(function () {

        if (playerCharacterSelectPhase === true && locke.hasBeenSelected === false) {

            $(this).css("opacity", "0.5");

            locke.sprite.appendTo($("#player-position"));
            locke.sprite.css({
                "transform": "scaleX(-1)",
                "position": "absolute",
                "bottom": 0,
            });

            $("#left-ui-text").text("Choose opponent");

            locke.hasBeenSelected = true;
            locke.playerCharacter = true;

            playerCharacterHitPoints = locke.hitPoints;
            playerCharacterCurrentAttackPoints = locke.attackPoints;

            var playerOnScreenHitPoints = $('<span />', {
                "class": 'player-on-screen-hit-points',
                text: `HP: ${playerCharacterHitPoints}`,
            });
            $("#player-position").append(playerOnScreenHitPoints);

            playerCharacterSelectPhase = false;
            enemyCharacterSelectPhase = true;

        } else if (enemyCharacterSelectPhase === true && locke.hasBeenSelected === false) {

            $(this).css("opacity", "0.5");

            locke.sprite.appendTo($("#enemy-position"));
            locke.sprite.css({
                "position": "absolute",
                "bottom": 0,
            });

            $("#left-ui-text").text("Click to Attack");
            $("#left-ui-text").hover(function () {
                $(this).css({ 'cursor': 'pointer' });
            });
            $("#left-ui-text").addClass("attack-button");

            locke.hasBeenSelected = true;
            locke.currentEnemyCharacter = true;

            enemyCharacterHitPoints = locke.hitPoints;
            enemyCharacterCounterAttackPoints = locke.counterAttackPoints;

            var enemyOnScreenHitPoints = $('<span />', {
                "class": 'enemy-on-screen-hit-points',
                text: `HP: ${enemyCharacterHitPoints}`,
            });
            $("#enemy-position").append(enemyOnScreenHitPoints);

            enemyCharacterSelectPhase = false;
            battlePhase = true;

        }

    });

    cyan.portrait.click(function () {

        if (playerCharacterSelectPhase === true && cyan.hasBeenSelected === false) {

            $(this).css("opacity", "0.5");

            cyan.sprite.appendTo($("#player-position"));
            cyan.sprite.css({
                "transform": "scaleX(-1)",
                "position": "absolute",
                "bottom": 0,
            });

            $("#left-ui-text").text("Choose opponent");

            cyan.hasBeenSelected = true;
            cyan.playerCharacter = true;

            playerCharacterHitPoints = cyan.hitPoints;
            playerCharacterCurrentAttackPoints = cyan.attackPoints;

            var playerOnScreenHitPoints = $('<span />', {
                "class": 'player-on-screen-hit-points',
                text: `HP: ${playerCharacterHitPoints}`,
            });
            $("#player-position").append(playerOnScreenHitPoints);
            
            playerCharacterSelectPhase = false;
            enemyCharacterSelectPhase = true;

        } else if (enemyCharacterSelectPhase === true && cyan.hasBeenSelected === false) {

            $(this).css("opacity", "0.5");

            cyan.sprite.appendTo($("#enemy-position"));
            cyan.sprite.css({
                "position": "absolute",
                "bottom": 0,
            });

            $("#left-ui-text").text("Click to Attack");
            $("#left-ui-text").hover(function () {
                $(this).css({ 'cursor': 'pointer' });
            });
            $("#left-ui-text").addClass("attack-button");

            cyan.hasBeenSelected = true;
            cyan.currentEnemyCharacter = true;

            enemyCharacterHitPoints = cyan.hitPoints;
            enemyCharacterCounterAttackPoints = cyan.counterAttackPoints;

            var enemyOnScreenHitPoints = $('<span />', {
                "class": 'enemy-on-screen-hit-points',
                text: `HP: ${enemyCharacterHitPoints}`,
            });
            $("#enemy-position").append(enemyOnScreenHitPoints);

            enemyCharacterSelectPhase = false;
            battlePhase = true;

        }

    });

    kefka.portrait.click(function () {

        if (playerCharacterSelectPhase === true && kefka.hasBeenSelected === false) {

            $(this).css("opacity", "0.5");

            kefka.sprite.appendTo($("#player-position"));
            kefka.sprite.css({
                "position": "absolute",
                "bottom": -20,
                "left": -30,
            });

            $("#left-ui-text").text("Choose opponent");

            kefka.hasBeenSelected = true;
            kefka.playerCharacter = true;

            playerCharacterHitPoints = kefka.hitPoints;
            playerCharacterCurrentAttackPoints = kefka.attackPoints;

            var playerOnScreenHitPoints = $('<span />', {
                "class": 'player-on-screen-hit-points',
                text: `HP: ${playerCharacterHitPoints}`,
            });
            $("#player-position").append(playerOnScreenHitPoints);
            
            playerCharacterSelectPhase = false;
            enemyCharacterSelectPhase = true;

        } else if (enemyCharacterSelectPhase === true && kefka.hasBeenSelected === false) {

            $(this).css("opacity", "0.5");

            kefka.sprite.appendTo($("#enemy-position"));
            kefka.sprite.css({
                "transform": "scaleX(-1)",
                "position": "absolute",
                "bottom": -20,
                "right": -30,
            });

            $("#left-ui-text").text("Click to Attack");
            $("#left-ui-text").hover(function () {
                $(this).css({ 'cursor': 'pointer' });
            });
            $("#left-ui-text").addClass("attack-button");

            kefka.hasBeenSelected = true;
            kefka.currentEnemyCharacter = true;

            enemyCharacterHitPoints = kefka.hitPoints;
            enemyCharacterCounterAttackPoints = kefka.counterAttackPoints;

            var enemyOnScreenHitPoints = $('<span />', {
                "class": 'enemy-on-screen-hit-points',
                text: `HP: ${enemyCharacterHitPoints}`,
            });
            $("#enemy-position").append(enemyOnScreenHitPoints);

            enemyCharacterSelectPhase = false;
            battlePhase = true;
            
        }

    });



    // add onclick event to attack button to do attack/defense/counter-attack math

    // if player character hp reaches 0, add "lose" message and reset game button

    // else if enemy characters remaining = 0, add "win" message and reset game button

});