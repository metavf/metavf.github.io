var FinalState = new Kiwi.State('FinalState');

/**
* We have included the FinalState just to detail that if you wanted to have a main-menu then this would be the place to put it.
* 
* Currently we just switch straight to the 'play' state.
*
* 047 912
* 
*/

FinalState.create = function () {
	
	//Add bg
    this.bg = new Kiwi.GameObjects.Sprite(FinalState, FinalState.textures.bg_final, 0, 0);
    this.addChild(this.bg);
	
	this.addPlayButton(100,750)
}

FinalState.addPlayButton = function (objX, objY) {

    this['replayButton'] = new Kiwi.GameObjects.Sprite(FinalState, FinalState.textures['replayButton'], objX, objY);
    this['replayButton'].input.onDown.add(this.clickObject, this);
    this.addChild(this['replayButton']);
}

FinalState.clickObject = function () {
	setTimeout(this.continueExecution, 200) //wait 0.2 seconds before continuing
}

FinalState.continueExecution = function ()
{
   //finish doing things after the pause
   this.game.states.switchState( "PlayState" );
}