/**
 * Created by itc_user on 7/6/2016.
 */

// creating the nameSpace
var minecraft = {};
minecraft.savedTile = "";

//popup - taking out the landing sapce and beguiing the game
minecraft.startGame = function () {
    $('#popup').fadeOut();
};

//subsititute the numbers to the rigth tile
minecraft.tileCodes = {"0": "sky", "1": "earth", "2": "leaf", "3": "tree", "4": "rock", "5": "cloud", "6": "worm"};

// calling the fuction to start the game (the board, and the play button
minecraft.init = function () {
    $(document).ready(function () {
        minecraft.creatBoard();
        $('.tool').click(function () {
            $(".tool.selected").removeClass("selected");
            $(this).addClass("selected");
        });
        $("#play-btn").click(function () {
            minecraft.startGame();
        })
    });
};

//creating the board
minecraft.creatBoard = function () {

    minecraft.matrix = [
        ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "5", "5", "5", "5", "0", "0", "0", "0"],
        ["0", "0", "0", "5", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        ["0", "5", "5", "5", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "5", "5", "0", "0", "0", "0", "0", "0", "0", "0", "0", "5", "5", "5", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "5", "5", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "5", "5", "5", "5", "5", "5"],
        ["0", "0", "0", "0", "0", "0", "2", "2", "2", "0", "0", "0", "0", "0", "0", "0", "0", "2", "2", "2", "0", "0", "0", "0", "0", "0", "0", "0", "5", "5", "5", "5", "5"],
        ["0", "0", "0", "0", "0", "0", "2", "2", "2", "0", "0", "0", "0", "0", "0", "0", "0", "2", "2", "2", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "2", "2", "2", "0", "0", "0", "0", "0", "0", "0", "0", "2", "2", "2", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0", "3", "0", "0", "0", "0", "0", "0", "0", "0", "0", "2", "2", "2", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0", "3", "0", "0", "0", "0", "0", "0", "0", "0", "0", "2", "2", "2", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "2", "4"],
        ["0", "0", "0", "0", "0", "0", "0", "3", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "3", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "2", "4", "4"],
        ["0", "0", "4", "0", "0", "0", "0", "3", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "3", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "4", "4", "4"],
        ["0", "0", "4", "4", "0", "0", "4", "3", "4", "0", "0", "0", "0", "0", "0", "0", "0", "0", "3", "0", "0", "0", "0", "0", "0", "0", "0", "0", "4", "4", "4", "4", "4"],
        ["6", "6", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
        ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "6"],
        ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "6", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
        ["1", "1", "1", "1", "1", "1", "1", "1", "1", "6", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
        ["4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"]
    ];
    for (var i = 0; i < minecraft.matrix.length; i++) {
        for (var j = 0; j < minecraft.matrix[i].length; j++) {
            var tileName = minecraft.tileCodes[minecraft.matrix[i][j]];
            $('<div/>').addClass(tileName).addClass('box').appendTo($('.board')).click(minecraft.checkIfValidSelection);
        }
        $('.board').append($("<br/>"));
    }
};

//playing

minecraft.checkIfValidSelection = function () {
    // check if proper tools are being used to select the proper boxes

    var clickedTile = $(this);

    // id axe can select class tree
    if ($('.tool.selected').attr("id") == "axe" && clickedTile.hasClass("tree")) {
        clickedTile.removeClass("tree").addClass("sky");
        $('#currentbox').removeClass("rock sky leaf earth tree cloud worm");
        $('#currentbox').addClass("tree");
        minecraft.savedTile = "tree"
    }

    // id axe can select class leaf
    else if ($('.tool.selected').attr("id") == "axe" && clickedTile.hasClass("leaf")) {
        clickedTile.removeClass("leaf").addClass("sky");
        $('#currentbox').removeClass("rock sky leaf earth tree cloud worm");
        $('#currentbox').addClass("leaf");
        minecraft.savedTile = "leaf"
    }

    // id pickaxe can select class rock

    else if ($('.tool.selected').attr("id") == "pickaxe" && clickedTile.hasClass("rock")) {
        clickedTile.removeClass("rock").addClass("sky");
        $('#currentbox').removeClass("rock sky leaf earth tree cloud worm");
        $('#currentbox').addClass("rock");
        minecraft.savedTile = "rock"
    }

    // id shovel can select class 1

    else if ($('.tool.selected').attr("id") == "shovel" && clickedTile.hasClass("earth")) {
        clickedTile.removeClass("earth").addClass("sand");
        $('#currentbox').removeClass("rock sky leaf earth tree cloud worm");
        $('#currentbox').addClass("earth");
        minecraft.savedTile = "earth"
    }
    // id wind can select class clouf

    else if ($('.tool.selected').attr("id") == "wind" && clickedTile.hasClass("cloud")) {
        clickedTile.removeClass("cloud").addClass("sky");
        $('#currentbox').removeClass("rock sky leaf earth tree cloud worm");
        $('#currentbox').addClass("cloud");
        minecraft.savedTile = "cloud"
    }

    // id wind can select class clouf

    else if ($('.tool.selected').attr("id") == "bug" && clickedTile.hasClass("worm")) {
        clickedTile.removeClass("worm").addClass("sand");
        $('#currentbox').removeClass("rock sky leaf earth tree cloud worm");
        $('#currentbox').addClass("worm")
        minecraft.savedTile = "worm";
    }

    // putting value in the taken tile
    else if ($('.tool.selected').attr("id") == "currentbox" && minecraft.savedTile != "") {
        clickedTile.removeClass().addClass(minecraft.savedTile).addClass("box");
        $('.selected').removeClass();
        $('#currentbox').addClass("tool");
        minecraft.savedTile = "";
    }

    //error message
    else {
        $(".tool.selected").addClass("error");
        setTimeout(function () {
            $(".tool.error").removeClass("error")
        }, 500)

    }
};
//calling the function
minecraft.init();



