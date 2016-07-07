/**
 * Created by itc_user on 7/6/2016.
 */


var minecraft = {};

minecraft.init = function (){
    minecraft.creatBoard();
    minecraft.tool = $('#axe');
    minecraft.clickedBox = "";
    minecraft.currentBox = "";

    minecraft.tools =$('.tools');
    minecraft.tools.on('click',minecraft.getClickedTool);

    minecraft.board =$('.box');
    minecraft.board.on('click',minecraft.getClickedBoxes);
    minecraft.checkIfValidSelection()

};

minecraft.creatBoard = function () {

    minecraft.matrix= [
        ["sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky"],
        ["sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky"],
        ["sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky"],
        ["sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky"],
        ["sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky"],
        ["sky","sky","sky","sky","sky","sky","leaf","leaf","leaf","sky","sky","sky","sky","sky","sky","sky"],
        ["sky","sky","sky","sky","sky","sky","leaf","leaf","leaf","sky","sky","sky","sky","sky","sky","sky"],
        ["sky","sky","sky","sky","sky","sky","leaf","leaf","leaf","sky","sky","sky","sky","sky","sky","sky"],
        ["sky","sky","sky","sky","sky","sky","sky","tree","sky","sky","sky","sky","sky","sky","sky","sky"],
        ["sky","sky","sky","sky","sky","sky","sky","tree","sky","sky","sky","sky","sky","sky","sky","sky"],
        ["sky","sky","sky","sky","sky","sky","sky","tree","sky","sky","sky","sky","sky","sky","sky","sky"],
        ["sky","sky","rock","sky","sky","sky","sky","tree","sky","sky","sky","sky","sky","sky","sky","sky"],
        ["sky","sky","rock","rock","sky","sky","rock","tree","rock","sky","sky","sky","sky","sky","sky","sky"],
        ["earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth"],
        ["earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth"],
        ["earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth"],
        ["earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth"],
        ["earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth","earth"]
    ];
    for (var i = 0; i < minecraft.matrix.length; i++) {
        for (var j = 0; j < minecraft.matrix[i].length; j++) {
            $('<div/>').addClass(minecraft.matrix[i][j]).addClass('box').appendTo($('.board'));
        }
        $('.board').append($("<br/>"));
    }
};

minecraft.getClickedTool = function (event){
    minecraft.tool.on('onclick',.addClass(".blue"));
    minecraft.tool = event.target.id;
};

minecraft.getClickedBoxes = function (event){
    minecraft.clickedBox = event.target.className;
};

minecraft.checkIfValidSelection = function (){
    // check if proper tools are being used to select the proper boxes
    // id axe can select class tree

    if ((minecraft.tool === $('#axe')) && (minecraft.clickedBox === $('.tree'))){
        minecraft.clickedBox =  minecraft.currentBox;
    }
    else {
        minecraft.tool.on('onclick',.addClass(".red"));
    }

    // id pickaxe can select class rocks
    //id shovel can select class earth

}


minecraft.init();

//
// $('.current-player-color').toggleClass("blue-player");
// $(this).addClass()