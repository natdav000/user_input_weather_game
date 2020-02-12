scene.setBackgroundColor(8)
let weatherDude = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 9 9 . . . . . . . 
. . . . . 9 6 6 6 9 . . . . . . 
. . . . 9 6 6 6 6 6 9 . . . . . 
. . . . 9 6 6 6 6 6 9 . . . . . 
. . . . . 9 6 6 6 9 . . . . . . 
. . . . . . 9 9 9 . . . . . . . 
. . . . . 9 . 9 . 9 . . . . . . 
. . . . . . 9 9 9 . . . . . . . 
. . . . . . . 9 . . . . . . . . 
. . . . . . . 9 . . . . . . . . 
. . . . . . 9 9 9 . . . . . . . 
. . . . . 9 9 . 9 9 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(weatherDude)
scene.cameraFollowSprite(weatherDude)
let weather = game.askForString("what is your weather prediction?")
game.splash("so you think that it's going to be " + weather)
let weatherEffects = Math.randomRange(0, 5)
if (weatherEffects == 0) {
    weatherDude.say("Snow!")
    effects.blizzard.startScreenEffect(100)
} else if (weatherEffects == 1) {
    effects.confetti.startScreenEffect(100)
    weatherDude.say("Confetti")
} else if (weatherEffects == 2) {
    weatherDude.say("Hearts")
    effects.hearts.startScreenEffect(100)
} else if (weatherEffects == 3) {
    weatherDude.say("Happy Day")
    effects.smiles.startScreenEffect(100)
} else if (weatherEffects == 4) {
    weatherDude.say("Soap Time")
    effects.bubbles.startScreenEffect(100)
} else if (weatherEffects == 5) {
    weatherDude.say("Cloudy")
    effects.clouds.startScreenEffect(100)
} else {
	
}
