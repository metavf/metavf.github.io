var IntroState = new Kiwi.State('IntroState');

/**
* We have included the IntroState just to detail that if you wanted to have a main-menu then this would be the place to put it.
* 
* Currently we just switch straight to the 'play' state.
* 
*/

IntroState.create = function () {
	
	//Add bg
    this.bg = new Kiwi.GameObjects.Sprite(IntroState, IntroState.textures.bg_intro, 0, 0);
    this.addChild(this.bg);
	
	this.addPlayButton(252,350)
}

IntroState.addPlayButton = function (objX, objY) {

    this['playButton'] = new Kiwi.GameObjects.Sprite(IntroState, IntroState.textures['playButton'], objX, objY);
    this['playButton'].input.onDown.add(this.clickObject, this);
    this.addChild(this['playButton']);
}

IntroState.clickObject = function () {
	setTimeout(this.continueExecution, 200) //wait 0.2 seconds before continuing
}

IntroState.continueExecution = function ()
{
   //finish doing things after the pause
   this.game.states.switchState( "PlayState" );
}