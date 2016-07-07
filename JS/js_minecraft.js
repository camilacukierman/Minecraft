/**
 * Created by itc_user on 7/6/2016.
 */


var minecraft = {};


minecraft.startGame = function(){
    $('#popup').addClass(popupOff)
};



minecraft.tileCodes = {"0": "sky", "1": "earth", "2": "leaf", "3": "tree", "4": "rock"};

minecraft.init = function () {
    $(document).ready(function () {
        minecraft.creatBoard();
        $('.tool').click(function () {
            $(".tool.selected").removeClass("selected");
            $(this).addClass("selected");
        });
    });
};

minecraft.creatBoard = function () {

    minecraft.matrix = [
        ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "2", "2", "2", "0", "0", "0", "0", "0", "0", "0", "0", "2", "2"],
        ["0", "0", "0", "0", "0", "0", "2", "2", "2", "0", "0", "0", "0", "0", "0", "0", "0", "2", "2"],
        ["0", "0", "0", "0", "0", "0", "2", "2", "2", "0", "0", "0", "0", "0", "0", "0", "0", "2", "2"],
        ["0", "0", "0", "0", "0", "0", "0", "3", "0", "0", "0", "0", "0", "0", "0", "0", "0", "2", "2"],
        ["0", "0", "0", "0", "0", "0", "0", "3", "0", "0", "0", "0", "0", "0", "0", "0", "0", "2", "2"],
        ["0", "0", "0", "0", "0", "0", "0", "3", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "3"],
        ["0", "0", "4", "0", "0", "0", "0", "3", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "3"],
        ["0", "0", "4", "4", "0", "0", "4", "3", "4", "0", "0", "0", "0", "0", "0", "0", "0", "0", "3"],
        ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
        ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
        ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
        ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
        ["4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"]
    ];
    for (var i = 0; i < minecraft.matrix.length; i++) {
        for (var j = 0; j < minecraft.matrix[i].length; j++) {
            var tileName = minecraft.tileCodes[minecraft.matrix[i][j]];
            $('<div/>').addClass(tileName).addClass('box').appendTo($('.board')).click(minecraft.checkIfValidSelection);
        }
        $('.board').append($("<br/>"));
    }
};


minecraft.checkIfValidSelection = function () {
    // check if proper tools are being used to select the proper boxes

    var clickedTile = $(this);

    // id axe can select class tree
    if ($('.tool.selected').attr("id") == "axe" && clickedTile.hasClass("tree")) {
        clickedTile.removeClass("tree").addClass("sky");
        $ ('#currentbox').removeClass("rock sky leaf earth tree");
        $('#currentbox').addClass("tree");
    }

    // id axe can select class leaf
    else if ($('.tool.selected').attr("id") == "axe" && clickedTile.hasClass("leaf")) {
        clickedTile.removeClass("leaf").addClass("sky");
        $ ('#currentbox').removeClass("rock sky leaf earth tree");
        $('#currentbox').addClass("leaf");
    }

    // id pickaxe can select class rock

    else if ($('.tool.selected').attr("id") == "pickaxe" && clickedTile.hasClass("rock")) {
        clickedTile.removeClass("rock").addClass("sky");
        $ ('#currentbox').removeClass("rock sky leaf earth tree");
        $('#currentbox').addClass("rock");
    }
    // id shovel can select class 1

   else if ($('.tool.selected').attr("id") == "shovel" && clickedTile.hasClass("earth")) {
        clickedTile.removeClass("earth").addClass("sky");
        $ ('#currentbox').removeClass("rock sky leaf earth tree");
        $('#currentbox').addClass("earth");
    }
    else {
        $(".tool.selected").addClass("error");
        setTimeout(function () {
            $(".tool.error").removeClass("error")
        }, 500)

    }
    };



minecraft.userTile = function () {

    var currentBox = $(this);
    
    if ($('#currentbox).hasClass("rock sky leaf earth tree"){


           }
};

//
// if ($('.tool.selected').attr("id") == "axe" && clickedTile.hasClass("tree")) {
//     clickedTile.removeClass("tree").addClass("sky");
//     $ ('#currentbox').removeClass("rock sky leaf earth tree");
//     $('#currentbox').addClass("tree");
// }



minecraft.startGame();
minecraft.init();



