// put portraits and background in html
$(document).ready(function () {
    // assign attack, defense, and counter-attack points to each character
    var terra = {
        attackPoints: 10,
        hitPoints: 100,
        counterAttackPoints: 24,
        hasBeenSelected: false,
        portrait: $("#terra-portrait"),
        sprite: $('<img id="terra-sprite" src="assets/images/terra-sprite.png">'),
    };

    var locke = {
        attackPoints: 12,
        hitPoints: 104,
        counterAttackPoints: 18,
        hasBeenSelected: false,
        portrait: $("#locke-portrait"),
        sprite: $('<img id="locke-sprite" src="assets/images/locke-sprite.png">'),
    };

    var cyan = {
        attackPoints: 10,
        hitPoints: 110,
        counterAttackPoints: 16,
        hasBeenSelected: false,
        portrait: $("#cyan-portrait"),
        sprite: $('<img id="cyan-sprite" src="assets/images/cyan-sprite.png">'),
    };

    var kefka = {
        attackPoints: 9,
        hitPoints: 116,
        counterAttackPoints: 16,
        hasBeenSelected: false,
        portrait: $("#kefka-portrait"),
        sprite: $('<img id="kefka-sprite" src="assets/images/kefka-sprite.png">'),
    };

    // set global variables
    var playerCharacterSelectPhase = true;
    var enemyCharacterSelectPhase = false;
    var battlePhase = false;
    var playerCharacterHitPoints = null;
    var playerCharacterInitialAttackPoints = null;
    var playerCharacterCurrentAttackPoints = null;
    var enemyCharacterHitPoints = null;
    var enemyCharacterCounterAttackPoints = null;
    var killCount = 0;

    // create audio elements
    var decisiveBattle = document.createElement("audio");
    decisiveBattle.setAttribute("src", "./assets/music/decisive-battle.mp3");
    decisiveBattle.loop = true;
    var fanfare = document.createElement("audio");
    fanfare.setAttribute("src", "./assets/music/fanfare.mp3");
    var restInPeace = document.createElement("audio");
    restInPeace.setAttribute("src", "./assets/music/rest-in-peace.mp3");

    // add onclick events to portraits to select player and computer characters and create battle-sprite images and attack button
    $(".portrait").hover(function () {
        $(this).css({ 'cursor': 'pointer' });
    });
    terra.portrait.click(function () {
        selectCharacter(terra);
    });
    locke.portrait.click(function () {
        selectCharacter(locke);
    });
    cyan.portrait.click(function () {
        selectCharacter(cyan);
    });
    kefka.portrait.click(function () {
        selectCharacter(kefka);
    });

    function selectCharacter(chr) {
        // if we're in player select phase and chr hasn't been selected already
        if (playerCharacterSelectPhase === true && chr.hasBeenSelected === false) {

            // make portrait transparent
            $(chr.portrait).css("opacity", "0.5");
            $(chr.portrait).hover(function () {
                $(chr.portrait).css({ 'cursor': 'default' });
            });

            // append chr's sprite to player position
            chr.sprite.appendTo($("#player-position"));
            if (chr === kefka) {
                chr.sprite.css({
                    "position": "absolute",
                    "bottom": `${-20}px`,
                    "left": `${-30}px`,
                });
            } else {
                chr.sprite.css({
                    "transform": "scaleX(-1)",
                    "position": "absolute",
                    "bottom": 0,
                });
            };

            // change hud text
            $("#left-ui-text").text("Choose opponent");

            chr.hasBeenSelected = true;

            // set chr's stats to playerCharacter variables
            playerCharacterHitPoints = chr.hitPoints;
            playerCharacterInitialAttackPoints = chr.attackPoints;
            playerCharacterCurrentAttackPoints = chr.attackPoints;

            // put hp stats on screen
            var playerOnScreenHitPoints = $('<span />', {
                "class": 'player-on-screen-hit-points',
                text: `HP: ${playerCharacterHitPoints}`,
            });
            $("#player-position").append(playerOnScreenHitPoints);
            if (chr === kefka) {
                playerOnScreenHitPoints.css({
                    "top": `${-113}px`,
                    "left": `${7}px`,
                    "width": `${120}px`,
                });
            };

            // transition to next phase
            playerCharacterSelectPhase = false;
            enemyCharacterSelectPhase = true;

            // if we're in enemy select phase and chr hasn't been selected already
        } else if (enemyCharacterSelectPhase === true && chr.hasBeenSelected === false) {

            // play battle music
            if (killCount === 0) {
                decisiveBattle.play();
            }

            $(chr.portrait).css("opacity", "0.5");
            $(chr.portrait).hover(function () {
                $(chr.portrait).css({ 'cursor': 'default' });
            });

            chr.sprite.appendTo($("#enemy-position"));
            if (chr === kefka) {
                chr.sprite.css({
                    "transform": "scaleX(-1)",
                    "position": "absolute",
                    "bottom": -20,
                    "right": -30,
                });
            } else {
                chr.sprite.css({
                    "position": "absolute",
                    "bottom": 0,
                });
            };

            $("#left-ui-text").text("Click to Attack");
            $("#left-ui-text").hover(function () {
                $(this).css({ 'cursor': 'pointer' });
            });
            $("#left-ui-text").addClass("attack-button");

            chr.hasBeenSelected = true;

            enemyCharacterHitPoints = chr.hitPoints;
            enemyCharacterCounterAttackPoints = chr.counterAttackPoints;

            var enemyOnScreenHitPoints = $('<span />', {
                "class": 'enemy-on-screen-hit-points',
                text: `HP: ${enemyCharacterHitPoints}`,
            });
            $("#enemy-position").append(enemyOnScreenHitPoints);
            if (chr === kefka) {
                enemyOnScreenHitPoints.css({
                    "top": `${-111}px`,
                    "width": `${110}px`,
                });
            };

            enemyCharacterSelectPhase = false;
            battlePhase = true;
        }
    };


    // add onclick event to attack button to do attack/defense/counter-attack math
    // if player character hp reaches 0, add "lose" message and reset game button
    // else if enemy characters remaining = 0, add "win" message and reset game button
    $("#left-ui-text").click(function () {

        // if player dies
        if (battlePhase === true && enemyCharacterHitPoints > playerCharacterCurrentAttackPoints && playerCharacterHitPoints <= enemyCharacterCounterAttackPoints) {

            // play game over music
            decisiveBattle.pause();
            decisiveBattle.currentTime = 0;
            restInPeace.play();

            // subtract player current AP from enemy HP
            playerAttack();

            // end game
            endGame(player, lose);

            // reset game
            resetPrompt();

            // non killing-blow
        } else if (battlePhase === true && enemyCharacterHitPoints > playerCharacterCurrentAttackPoints) {

            // subtract player current AP from enemy HP
            playerAttack();

            // subtract enemy's counter AP from player HP
            enemyCounterAttack();

            // killing blow(first 2 enemies)
        } else if (battlePhase === true && enemyCharacterHitPoints <= playerCharacterCurrentAttackPoints && killCount < 2) {

            // increment kill count
            killCount++;
            console.log(`Kill Count: ${killCount}`)

            // buff player AP
            playerAttack();

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

            // play victory fanfare
            decisiveBattle.pause();
            decisiveBattle.currentTime = 0;
            fanfare.play();

            // end game
            endGame(enemy, win);

            // reset game
            resetPrompt();
        }
    });

    function resetPrompt() {
        $("#game-end-popup-div").hover(function () {
            $(this).css({ 'cursor': 'pointer' });
        });
        $("#game-end-popup-div").click(function () {
            resetGame();
        });
    }

    function playerAttack() {
        enemyCharacterHitPoints -= playerCharacterCurrentAttackPoints;
        $(".enemy-on-screen-hit-points").text(`HP: ${enemyCharacterHitPoints}`);

        // buff player AP
        playerCharacterCurrentAttackPoints += playerCharacterInitialAttackPoints;
        console.log(`New player AP is: ${playerCharacterCurrentAttackPoints}`);
    }

    function enemyCounterAttack() {
        playerCharacterHitPoints -= enemyCharacterCounterAttackPoints;
        $(".player-on-screen-hit-points").text(`HP: ${playerCharacterHitPoints}`);
    }

    function endGame(emptyPos, outcome) {
        $(`#${emptyPos}-position`).empty();
        battlePhase = false;
        $("#battlefield").append($('<div />').attr('id', 'game-end-popup-div'));
        $("#game-end-popup-div").append($('<span />').attr('id', 'game-end-popup-text'));
        $("#game-end-popup-text").text(`You ${outcome}! Play again?`);
    }

    function resetGame() {
        $("#player-position").empty();
        $("#enemy-position").empty();
        $("#game-end-popup-div").remove();
        $("#game-end-popup-text").remove();
        $(".portrait").hover(function () {
            $(this).css({ 'cursor': 'pointer' });
        });
        $(".portrait").css("opacity", "1");
        $("#left-ui-text").text("Choose your character");
        $("#left-ui-text").hover(function () {
            $(this).css({ 'cursor': 'default' });
        });
        playerCharacterSelectPhase = true;
        enemyCharacterSelectPhase = false;
        battlePhase = false;
        playerCharacterHitPoints = null;
        playerCharacterInitialAttackPoints = null;
        playerCharacterCurrentAttackPoints = null;
        enemyCharacterHitPoints = null;
        enemyCharacterCounterAttackPoints = null;
        killCount = 0;
        resetCharacter(terra);
        resetCharacter(locke);
        resetCharacter(cyan);
        resetCharacter(kefka);
        fanfare.pause();
        fanfare.currentTime = 0;
        restInPeace.pause();
        restInPeace.currentTime = 0;
    };

    function resetCharacter(chr) {
        chr.hasBeenSelected = false;
        chr.sprite.removeAttr('style');
    };

});