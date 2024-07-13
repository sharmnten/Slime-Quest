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

