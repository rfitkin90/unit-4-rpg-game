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
    var playerCharacterInitialAttackPoints = null;
    var playerCharacterCurrentAttackPoints = null;
    var enemyCharacterHitPoints = null;
    var enemyCharacterCounterAttackPoints = null;
    var killCount = 0;

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
            $(this).hover(function () {
                $(this).css({ 'cursor': 'default' });
            });

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
            playerCharacterInitialAttackPoints = terra.attackPoints;
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
            $(this).hover(function () {
                $(this).css({ 'cursor': 'default' });
            });

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

    // locke onclick
    locke.portrait.click(function () {

        if (playerCharacterSelectPhase === true && locke.hasBeenSelected === false) {

            $(this).css("opacity", "0.5");
            $(this).hover(function () {
                $(this).css({ 'cursor': 'default' });
            });

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
            playerCharacterInitialAttackPoints = locke.attackPoints;
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
            $(this).hover(function () {
                $(this).css({ 'cursor': 'default' });
            });

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

    // cyan onclick
    cyan.portrait.click(function () {

        if (playerCharacterSelectPhase === true && cyan.hasBeenSelected === false) {

            $(this).css("opacity", "0.5");
            $(this).hover(function () {
                $(this).css({ 'cursor': 'default' });
            });

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
            playerCharacterInitialAttackPoints = cyan.attackPoints;
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
            $(this).hover(function () {
                $(this).css({ 'cursor': 'default' });
            });

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

    // kefka onclick
    kefka.portrait.click(function () {

        if (playerCharacterSelectPhase === true && kefka.hasBeenSelected === false) {

            $(this).css("opacity", "0.5");
            $(this).hover(function () {
                $(this).css({ 'cursor': 'default' });
            });

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
            playerCharacterInitialAttackPoints = kefka.attackPoints;
            playerCharacterCurrentAttackPoints = kefka.attackPoints;

            var playerOnScreenHitPoints = $('<span />', {
                "class": 'player-on-screen-hit-points',
                text: `HP: ${playerCharacterHitPoints}`,
            });
            $("#player-position").append(playerOnScreenHitPoints);
            playerOnScreenHitPoints.css({
                "top": `${-113}px`,
                "left": `${7}px`,
                "width": `${120}px`,
            });

            playerCharacterSelectPhase = false;
            enemyCharacterSelectPhase = true;

        } else if (enemyCharacterSelectPhase === true && kefka.hasBeenSelected === false) {

            $(this).css("opacity", "0.5");
            $(this).hover(function () {
                $(this).css({ 'cursor': 'default' });
            });

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
            enemyOnScreenHitPoints.css({
                "top": `${-111}px`,
            });

            enemyCharacterSelectPhase = false;
            battlePhase = true;

        }

    });


    // add onclick event to attack button to do attack/defense/counter-attack math
    // if player character hp reaches 0, add "lose" message and reset game button
    // else if enemy characters remaining = 0, add "win" message and reset game button
    $("#left-ui-text").click(function () {

        // player dies
        if (battlePhase === true && enemyCharacterHitPoints > playerCharacterCurrentAttackPoints && playerCharacterHitPoints <= enemyCharacterCounterAttackPoints) {

            enemyCharacterHitPoints -= playerCharacterCurrentAttackPoints;

            // end game
            $("#player-position").empty();
            battlePhase = false;
            $("#battlefield").append($('<div />').attr('id', 'game-end-popup-div'));
            $("#game-end-popup-div").append($('<span />').attr('id', 'game-end-popup-text'));
            $("#game-end-popup-text").text("You lose! Play again?");

            // reset game
            $("#game-end-popup-div").hover(function () {
                $(this).css({ 'cursor': 'pointer' });
            });
            $("#game-end-popup-div").click(function () {
                $("#player-position").empty();
                $("#game-end-popup-div").remove();
                $("#game-end-popup-text").remove();
                $(".portrait").hover(function () {
                    $(this).css({ 'cursor': 'pointer' });
                });
                $(".portrait").css("opacity", "1");
                playerCharacterSelectPhase = true;
                enemyCharacterSelectPhase = false;
                battlePhase = false;
                playerCharacterHitPoints = null;
                playerCharacterInitialAttackPoints = null;
                playerCharacterCurrentAttackPoints = null;
                enemyCharacterHitPoints = null;
                enemyCharacterCounterAttackPoints = null;
                killCount = 0;
                terra.hasBeenSelected = false;
                terra.playerCharacter = false;
                terra.currentEnemyCharacter = false;
                terra.defeated = false;
                locke.hasBeenSelected = false;
                locke.playerCharacter = false;
                locke.currentEnemyCharacter = false;
                locke.defeated = false;
                cyan.hasBeenSelected = false;
                cyan.playerCharacter = false;
                cyan.currentEnemyCharacter = false;
                cyan.defeated = false;
                kefka.hasBeenSelected = false;
                kefka.playerCharacter = false;
                kefka.currentEnemyCharacter = false;
                kefka.defeated = false;
            });

            // non killing-blow
        } else if (battlePhase === true && enemyCharacterHitPoints > playerCharacterCurrentAttackPoints) {

            // subtract player current AP from enemy HP
            enemyCharacterHitPoints -= playerCharacterCurrentAttackPoints;
            $(".enemy-on-screen-hit-points").text(`HP: ${enemyCharacterHitPoints}`);

            // buff player AP
            playerCharacterCurrentAttackPoints += playerCharacterInitialAttackPoints;
            console.log(`New player AP is: ${playerCharacterCurrentAttackPoints}`);

            // subtract enemy's counter AP from player HP
            playerCharacterHitPoints -= enemyCharacterCounterAttackPoints;
            $(".player-on-screen-hit-points").text(`HP: ${playerCharacterHitPoints}`);

            // killing blow(first 2 enemies)
        } else if (battlePhase === true && enemyCharacterHitPoints <= playerCharacterCurrentAttackPoints && killCount < 2) {

            // increment kill count
            killCount++;
            console.log(`Kill Count: ${killCount}`)

            // buff player AP
            playerCharacterCurrentAttackPoints += playerCharacterInitialAttackPoints;
            console.log(`New player AP is: ${playerCharacterCurrentAttackPoints}`);

            // empties enemy-position div
            $("#enemy-position").empty();

            // go back to enemy select phase
            $("#left-ui-text").text("Choose opponent");
            $("#left-ui-text").hover(function () {
                $(this).css({ 'cursor': 'default' });
            });
            battlePhase = false;
            enemyCharacterSelectPhase = true;

            // killing blow(final enemy)
        } else if (battlePhase === true && enemyCharacterHitPoints <= playerCharacterCurrentAttackPoints && killCount >= 2) {

            // end game
            $("#enemy-position").empty();
            battlePhase = false;
            $("#battlefield").append($('<div />').attr('id', 'game-end-popup-div'));
            $("#game-end-popup-div").append($('<span />').attr('id', 'game-end-popup-text'));
            $("#game-end-popup-text").text("You win! Play again?");

            // reset game
            $("#game-end-popup-div").hover(function () {
                $(this).css({ 'cursor': 'pointer' });
            });
            $("#game-end-popup-div").click(function () {
                $("#player-position").empty();
                $("#game-end-popup-div").remove();
                $("#game-end-popup-text").remove();
                $(".portrait").hover(function () {
                    $(this).css({ 'cursor': 'pointer' });
                });
                $(".portrait").css("opacity", "1");
                playerCharacterSelectPhase = true;
                enemyCharacterSelectPhase = false;
                battlePhase = false;
                playerCharacterHitPoints = null;
                playerCharacterInitialAttackPoints = null;
                playerCharacterCurrentAttackPoints = null;
                enemyCharacterHitPoints = null;
                enemyCharacterCounterAttackPoints = null;
                killCount = 0;
                terra.hasBeenSelected = false;
                terra.playerCharacter = false;
                terra.currentEnemyCharacter = false;
                terra.defeated = false;
                locke.hasBeenSelected = false;
                locke.playerCharacter = false;
                locke.currentEnemyCharacter = false;
                locke.defeated = false;
                cyan.hasBeenSelected = false;
                cyan.playerCharacter = false;
                cyan.currentEnemyCharacter = false;
                cyan.defeated = false;
                kefka.hasBeenSelected = false;
                kefka.playerCharacter = false;
                kefka.currentEnemyCharacter = false;
                kefka.defeated = false;
            });
        }
    });

});