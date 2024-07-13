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

loadSpriteAtlas("sprites/tileAtlas.png",{
	"grass":{
		x:0,
		y:0,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			grassAnim:0,
		}
	},
	"dirtCrack":{
		x:16,
		y:0,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			crackAnim:1,
		},
	},
		"sandTop":{
		x:32,
		y:0,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			sandAnim:2,
		},
	},
	"sandCrack":{
		x:48,
		y:0,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			sandCrackAnim:3
		}
	},
	"goldTop":{
		x:64,
		y:0,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			goldTopAnim:4
		}
	},
	"goldCrack":{
		x:80,
		y:0,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			goldCrackAnim:5
		}
	},
	"iceRock":{
		x:96,
		y:0,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			iceRockAnim:6
		}
	},
	"snowIce":{
		x:112,
		y:0,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			snowIceAnim:7
		}
	},
	"rockCrack":{
		x:128,
		y:0,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			rockCrackAnim:8
		}
	},
	"dirt":{
		x:0,
		y:16,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			dirtAnim:9
		}
	},
   "dirtCrack2":{
		x:16,
		y:16,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			dirtCrack2Anim:10
		}
	},
	"sand":{
		x:32,
		y:16,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			samdAnim:11
		}
	},
    "sandCrack2":{
		x:48,
		y:16,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			sandCrack2Anim:12
		}
	},
    "goldDirt":{
		x:64,
		y:16,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			goldDirtAnim:13
		}
	},
	"goldCrack2":{
		x:80,
		y:16,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			goldCrack2Anim:14
		}
	},
	"rock":{
		x:96,
		y:16,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			rockAnim:15
		}
	},
	"snowRock":{
		x:112,
		y:16,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			snowRockAnim:16
		}
	},
	"rockCrack2":{
		x:128,
		y:16,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			dirtAnim:17
		}
	},
	"question":{
		x:0,
		y:31,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			questionAnim:18
		}
	},
	"exclamation":{
		x:16,
		y:31,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			exclamationAnim:19
		}
	},
	"sandTop2":{
		x:32,
		y:31,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			sandTop2Anim:20
		}
	},
	"sandQuestion":{
		x:48,
		y:31,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			sandQuestionAnim:21
		}
	},
	"goldQuestion":{
		x:64,
		y:31,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			goldQuestionAnim:22
		}
	},
	"goldExclamation":{
		x:80,
		y:31,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			goldExclamationAnim:23
		}
	},
	"ice":{
		x:96,
		y:31,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			iceAnim:24
		}
	},
	"rockQuestion":{
		x:112,
		y:31,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			dirtAnim:25
		}
	},
	"rockExclamation":{
		x:128,
		y:31,
		height:48,
        width: 144,
		sliceX:9,
		sliceY:3,
		anim:{
			rockExclamationAnim:26
		}
	},


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
//start displaying the sprites
const grass = add([
	pos(400,100),
	scale(5,5),
	sprite("grass"),
])
const dirtCrack = add([
	pos(500,100),
	scale(5,5),
	sprite("dirtCrack"),
])
const sandTop = add([
	pos(600,100),
	scale(5,5),
	sprite("sandTop"),
])
const sandCrack = add([
	pos(700,100),
	scale(5,5),
	sprite("sandCrack"),
])
const goldTop = add([
	pos(800,100),
	scale(5,5),
	sprite("goldTop"),
])
const goldCrack = add([
 pos(900,100),
 sprite("goldCrack"),
 scale(5,5),
])
const iceRock = add([
	pos(1000,100),
	sprite("iceRock"),
	scale(5,5),
   ])
const snowIce = add([
 pos(1100,100),
 sprite("snowIce"),
 scale(5,5),
])
const rockCrack = add([
	pos(1200,100),
	sprite("rockCrack"),
	scale(5,5),
   ])
const dirt = add([
  pos(400,200),
  sprite("dirt"),
  scale(5,5),
])
const dirtCrack2 = add([
	pos(500,200),
	sprite("dirtCrack2"),
	scale(5,5),
  ])
const sand = add([
	pos(600,200),
	sprite("sand"),
	scale(5,5),
])
const sandCrack2 = add([
	pos(700,200),
	sprite("sandCrack2"),
	scale(5,5),
   ])
   const goldDirt = add([
	pos(800,200),
	sprite("goldDirt"),
	scale(5,5),
   ])
   const goldCrack2 = add([
	pos(900,200),
	sprite("goldCrack2"),
	scale(5,5),
   ])
   const rock = add([
	pos(1000,200),
	sprite("rock"),
	scale(5,5),
   ])
   const snowRock = add([
	pos(1100,200),
	sprite("snowRock"),
	scale(5,5),
   ])
   const rockCrack2 = add([
	pos(1200,200),
	sprite("rockCrack2"),
	scale(5,5),
   ])
   const question = add([
	pos(400,300),
	sprite("question"),
	scale(5,5),
   ])
   const exclamation = add([
	pos(500,300),
	sprite("exclamation"),
	scale(5,5),
   ])
   const sandTop2 = add([
	pos(600,300),
	sprite("sandTop2"),
	scale(5,5),
   ])
   const sandQuestion = add([
	pos(700,300),
	sprite("sandQuestion"),
	scale(5,5),
   ])
slime_purple.play("move", {loop: true, })
slime_green.play("spawn", {loop: true, })
coin.play("spin",{loop: true,})
knight.play("die",{loop:false,})
