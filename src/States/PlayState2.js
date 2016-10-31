var PlayState2 = new Kiwi.State('PlayState2');

/**
* The PlayState2 in the core state that is used in the game. 
*
* It is the state where majority of the functionality occurs 'in-game' occurs.
* 
*
* @class PlayState2
* @extends State
* @namespace Kiwi.BluePrints.HiddenObject
* @constructor
*/


/**
* Since we have loaded all the graphics in the LoadingState, the we can skip adding in a preload method to this state and just  start at the create. 
*
* @method create
* @public
*/
PlayState2.create = function () {


    //Create our Hidden Object Arrays, This will store all of our hidden objects.
    this.hiddenObjects = [];
    this.gameComplete = false;


    //Add bg
    this.bg = new Kiwi.GameObjects.Sprite(PlayState2, PlayState2.textures.bg_l2, 0, 0);
    this.addChild(this.bg);

    //Add all the hidden objects and their corresponding UI preview images. Give the item random coordinates but inside of the game space.
    this.addHiddenObject('1', Math.random() * 600, Math.random() * 100);
    this.addHiddenObject('2', Math.random() * 600, Math.random() * 100 + 200);
    this.addHiddenObject('3', Math.random() * 600, Math.random() * 100 + 400);
    this.addHiddenObject('4', Math.random() * 600, Math.random() * 100 + 600);
	
	this.addBaseButton('1',1);
	this.addBaseButton('2',2);
	this.addBaseButton('3',3);
	this.addBaseButton('4',4);
	
}


/**
* This method adds a new hidden object and its preview image onto the game.
* 
* @method addHiddenObject
* @public
* @param objName{String}
* @param objX{Number}
* @param objY{Number}
*/
PlayState2.addHiddenObject = function (objName, objX, objY) {

    //Object hidden on the stage
    this['hiddenObject' + objName] = new Kiwi.GameObjects.Sprite(PlayState2, PlayState2.textures['hidden_' + objName+ '_l2'], objX, objY);
    this['hiddenObject' + objName].objName = objName;
    this['hiddenObject' + objName].input.onDown.add(this.clickObject, this);
    this.addChild(this['hiddenObject' + objName]);

	this.hiddenObjects.push(this['hiddenObject' + objName]);
}

PlayState2.addBaseButton = function (objName, objIndex) {
    //UI Base of each preview button
    this['UIBase' + objName] = new Kiwi.GameObjects.Sprite(PlayState2, PlayState2.textures.UI_btn, 100 * objIndex + 100, 900);
    this.addChild(this['UIBase' + objName])

    //UI preview image
    this['UIButton' + objName] = new Kiwi.GameObjects.Sprite(PlayState2, PlayState2.textures['UI_' + objName + '_l2'], 100 * objIndex + 100, 900);
    this.addChild(this['UIButton' + objName]);
}


/**
* This method removes located object from the background image and UI, for when they have found a image. 
*
* @method clickObject
* @public
* @param hiddenObj{Sprite}
*/
PlayState2.clickObject = function (hiddenObj) {
    //remove object and associated UI btn
    hiddenObj.visible = false;
    this['UIButton' + hiddenObj.objName].visible = false;

    //check completion
    var allFound = true;
    for (var i in this.hiddenObjects) {
        if (this.hiddenObjects[i].visible) {
            allFound = false;
        }
    }

    //completion
    if (allFound) {
		setTimeout(this.continueExecution, 1000) //wait one seconds before continuing
    }
}

PlayState2.continueExecution = function ()
{
   //finish doing things after the pause
   this.game.states.switchState( "PlayState3" );
}