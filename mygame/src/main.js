import kaplay from "kaplay"

kaplay({
	background: [153, 204, 255],
})

//load assets
loadSprite("bean", "sprites/bean.png")
loadSpriteAtlas("sprites/knight.png", {
    "hero": {
        x: 8,
        y: 10,
        width: 256,
        height: 256,
        sliceX: 9,
        anims: {
            idle: { from: 0, to: 3 },
            run: { from: 4, to: 7 },
            hit: 8,
        },
    },
})

loadSpriteAtlas("sprites/slime_purple.png",{
	"slime_purple": {
		x: 0,
		y: 0,
		width: 96,
		height: 72,
		sliceX: 4,
		sliceY: 3,
		anims:{
			spawn: { from: 0, to: 3},
			move: {from: 4, to: 7},
			die: {from: 8, to: 11}
		}

	}
	
})

loadSpriteAtlas("sprites/slime_green.png",{
	"slime_green": {
		x: 0,
		y: 0,
		width: 96,
		height: 72,
		sliceX: 4,
		sliceY: 3,
		anims:{
			spawn: { from: 0, to: 3},
			move: {from: 4, to: 7},
			die: {from: 8, to: 11}
		}

	}
	
})
loadSpriteAtlas("sprites/coin.png",{
 "coin":{
	x:0,
	y:0,
	width:192,
	height:16,
	sliceX:12,
	sliceY:1,
	anims:{
		spin:{from: 0, to: 11}
	}
 }
})
loadSpriteAtlas("sprites/knight.png",{
	"knight":{
		x:0,
		y:0,
		width:256,
		height:256,
		sliceX:8,
		sliceY:8,
		anims:{
			idle:{from: 0, to: 3},
			run:{from: 16, to: 31},
			roll:{from: 41, to: 47},
			hit:{from:48, to: 51},
			die:{from: 56, to: 59},
		}
	}
})

const knight = add([
	pos(400, 100),
	scale(5,5),
	sprite("knight")
])
const slime_purple = add([
	pos(100, 100),
	scale(5,5),
    sprite("slime_purple"),
])

const slime_green = add([
	pos(200, 100),
	scale(5,5),
	sprite("slime_green")
])
const coin = add([
	pos(300, 100),
	scale(5,5),
	sprite("coin"),
])

slime_purple.play("move", {loop: true, })
slime_green.play("spawn", {loop: true, })
coin.play("spin",{loop: true,})
knight.play("idle",{loop:true,})