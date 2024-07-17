import kaplay, { type Key } from "kaplay";
import "kaplay/global";

kaplay({
  background: [153, 204, 255],
  font: "pixel",
  debugKey: "b",
});
//load sprites
loadSprite("sandExclamation", "sprites/sand_question.png");
//load font
loadFont("pixel", "fonts/PixelOperator8.ttf");
//load audio
loadSound("coin", "sounds/coin.wav");
loadSound("music", "sounds/time_for_adventure.mp3");
loadSound("jump", "sounds/jump.wav");
loadSound("hurt", "sounds/hurt.wav");
//load assets
loadSpriteAtlas("sprites/knight.png", {
  hero: {
    x: 0,
    y: 0,
    width: 256,
    height: 256,
    sliceX: 8,
    sliceY: 8,
    anims: {
      idle: { from: 0, to: 3 },
      run: { from: 16, to: 31 },
      hit: 8,
    },
  },
});
loadSpriteAtlas("sprites/elements.png", {
  dirtCrate: {
    x: 0,
    y: 0,
    width: 48,
    height: 32,
    sliceX: 3,
    sliceY: 2,
    anims: {
      normal: 0,
    },
  },
  dirtSign: {
    x: 16,
    y: 0,
    width: 48,
    height: 32,
    sliceX: 3,
    sliceY: 2,
    anims: {
      normal: 1,
    },
  },
  dirtFence: {
    x: 32,
    y: 0,
    width: 48,
    height: 32,
    sliceX: 3,
    sliceY: 2,
    anims: {
      normal: 2,
    },
  },
  goldCrate: {
    x: 0,
    y: 16,
    width: 48,
    height: 32,
    sliceX: 3,
    sliceY: 2,
    anims: {
      normal: 3,
    },
  },
  goldSign: {
    x: 16,
    y: 16,
    width: 48,
    height: 32,
    sliceX: 3,
    sliceY: 2,
    anims: {
      normal: 4,
    },
  },
  goldFence: {
    x: 32,
    y: 16,
    width: 48,
    height: 32,
    sliceX: 3,
    sliceY: 2,
    anims: {
      normal: 5,
    },
  },
});
loadSpriteAtlas("sprites/slime_purple.png", {
  slime_purple: {
    x: 0,
    y: 0,
    width: 96,
    height: 72,
    sliceX: 4,
    sliceY: 3,
    anims: {
      spawn: { from: 0, to: 3 },
      move: { from: 4, to: 7 },
      die: { from: 8, to: 11 },
    },
  },
});

loadSpriteAtlas("sprites/slime_green.png", {
  slime_green: {
    x: 0,
    y: 0,
    width: 96,
    height: 72,
    sliceX: 4,
    sliceY: 3,
    anims: {
      spawn: { from: 0, to: 3 },
      move: { from: 4, to: 7 },
      die: { from: 8, to: 11 },
    },
  },
});
loadSpriteAtlas("sprites/coin.png", {
  coin: {
    x: 0,
    y: 0,
    width: 192,
    height: 16,
    sliceX: 12,
    sliceY: 1,
    anims: {
      spin: { from: 0, to: 11 },
    },
  },
});
loadSpriteAtlas("sprites/knight.png", {
  knight: {
    x: 0,
    y: 0,
    width: 256,
    height: 256,
    sliceX: 8,
    sliceY: 8,
    anims: {
      idle: { from: 0, to: 3 },
      run: { from: 16, to: 31 },
      roll: { from: 41, to: 47 },
      hit: { from: 48, to: 51 },
      die: { from: 56, to: 59 },
    },
  },
});
loadSpriteAtlas("sprites/rope_tileset.png", {
  dirt_rope: {
    x: 0,
    y: 0,
    width: 48,
    height: 43,
    sliceY: 3,
    anims: {
      normal: 0,
    },
  },
  sand_rope: {
    x: 0,
    y: 16,
    width: 48,
    height: 43,
    sliceY: 3,
    anims: {
      normal: 1,
    },
  },
  gold_rope: {
    x: 0,
    y: 32,
    width: 48,
    height: 43,
    sliceY: 3,
    anims: {
      normal: 2,
    },
  },
});
loadSpriteAtlas("sprites/tileAtlas.png", {
  grass: {
    x: 0,
    y: 0,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      grassanims: 0,
    },
  },
  dirtCrack: {
    x: 16,
    y: 0,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      crackanims: 1,
    },
  },
  sandTop: {
    x: 32,
    y: 0,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      sandanims: 2,
    },
  },
  sandCrack: {
    x: 48,
    y: 0,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      sandCrackanims: 3,
    },
  },
  goldTop: {
    x: 64,
    y: 0,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      goldTopanims: 4,
    },
  },
  goldCrack: {
    x: 80,
    y: 0,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      goldCrackanims: 5,
    },
  },
  iceRock: {
    x: 96,
    y: 0,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      iceRockanims: 6,
    },
  },
  snowIce: {
    x: 112,
    y: 0,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      snowIceanims: 7,
    },
  },
  rockCrack: {
    x: 128,
    y: 0,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      rockCrackanims: 8,
    },
  },
  dirt: {
    x: 0,
    y: 16,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      dirtanims: 9,
    },
  },
  dirtCrack2: {
    x: 16,
    y: 16,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      dirtCrack2anims: 10,
    },
  },
  sand: {
    x: 32,
    y: 16,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      samdanims: 11,
    },
  },
  sandCrack2: {
    x: 48,
    y: 16,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      sandCrack2anims: 12,
    },
  },
  goldDirt: {
    x: 64,
    y: 16,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      goldDirtanims: 13,
    },
  },
  goldCrack2: {
    x: 80,
    y: 16,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      goldCrack2anims: 14,
    },
  },
  rock: {
    x: 96,
    y: 16,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      rockanims: 15,
    },
  },
  snowRock: {
    x: 112,
    y: 16,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      snowRockanims: 16,
    },
  },
  rockCrack2: {
    x: 128,
    y: 16,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      dirtanims: 17,
    },
  },
  question: {
    x: 0,
    y: 31,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      questionanims: 18,
    },
  },
  exclamation: {
    x: 16,
    y: 31,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      exclamationanims: 19,
    },
  },
  sandTop2: {
    x: 32,
    y: 31,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      sandTop2anims: 20,
    },
  },
  sandQuestion: {
    x: 48,
    y: 31,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      sandQuestionanims: 21,
    },
  },
  goldQuestion: {
    x: 64,
    y: 31,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      goldQuestionanims: 22,
    },
  },
  goldExclamation: {
    x: 80,
    y: 31,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      goldExclamationanims: 23,
    },
  },
  ice: {
    x: 96,
    y: 31,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      iceanims: 24,
    },
  },
  rockQuestion: {
    x: 112,
    y: 31,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      dirtanims: 25,
    },
  },
  rockExclamation: {
    x: 128,
    y: 31,
    height: 48,
    width: 144,
    sliceX: 9,
    sliceY: 3,
    anims: {
      rockExclamationanims: 26,
    },
  },
});
//patrol behavior for enemies
function patrol(speed = 60, dir = 1) {
  return {
    id: "patrol",
    require: ["pos", "area"],
    add() {
      this.on("collide", (obj, col) => {
        if (col.isLeft() || col.isRight()) {
          dir = -dir;
        }
        if (col.isLeft()) {
          this.flipX = false;
        }
        if (col.isRight()) {
          this.flipX = true;
        }
      });
      this.play("move", { loop: true });
    },
    update() {
      this.move(speed * dir, 0);
    },
  };
}

const SCALE_FACTOR = 4;
const JUMP_HEIGHT = 1000;
const FALL_DEATH = -24000;

const LEVELS = [
  [
    "    0       ",
    "   -- z =   ",
    "       $$   ",
    " %  <  ===   ",
    "            ",
    "- f x > = @",
    "============",
  ],
  [
    "                          $",
    "                          $",
    "                          $",
    "                          $",
    "                          $",
    "           $$         =   $",
    "  %      ====         =   $",
    "                      =   $",
    "                      =    ",
    "       ^^      = >    =   @",
    "===========================",
  ],
  [
    "     $    $    $    $     $",
    "     $    $    $    $     $",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    " ^^^^>^^^^>^^^^>^^^^>^^^^^@",
    "===========================",
  ],
];

// define what each symbol means in the level graph
const levelConf = {
  tileWidth: 64,
  tileHeight: 64,
  tiles: {
    "=": () => [
      sprite("grass"),
      area(),
      body({ isStatic: true }),
      offscreen({ hide: true }),
      scale(SCALE_FACTOR, SCALE_FACTOR),
      anchor("center"),
    ],
    "-": () => [
      sprite("dirt"),
      area(),
      body({ isStatic: true }),
      offscreen({ hide: true }),
      anchor("center"),
      scale(SCALE_FACTOR, SCALE_FACTOR),
    ],
    $: () => [
      sprite("coin"),
      area(),
      pos(0, -9),
      anchor("center"),
      offscreen({ hide: true }),
      "coin",
      scale(SCALE_FACTOR, SCALE_FACTOR),
    ],

    ">": () => [
      sprite("slime_green"),
      area({
        shape: new Polygon([
          vec2(5, 7),
          vec2(5, -7),
          vec2(-5, -7),
          vec2(-5, 7),
        ]),
        offset: vec2(0, 5),
      }),
      anchor("center"),
      body(),
      patrol(),

      offscreen({ hide: true }),
      "enemy",
      scale(SCALE_FACTOR, SCALE_FACTOR),
    ],
    "<": () => [
      sprite("slime_purple"),
      area({
        shape: new Polygon([
          vec2(5, 7),
          vec2(5, -7),
          vec2(-5, -7),
          vec2(-5, 7),
        ]),
        offset: vec2(0, 5),
      }),
      anchor("center"),
      body(),
      patrol(),
      offscreen({ hide: true }),
      "enemy",
      scale(SCALE_FACTOR, SCALE_FACTOR),
    ],
    z: () => [
      sprite("sand_rope"),
      scale(SCALE_FACTOR, SCALE_FACTOR),
      area({ scale: 0.9 }),
      body({ isStatic: true }),
      offscreen({ hide: true }),
      anchor("center"),
      "rope",
    ],
    x: () => [
      sprite("dirtCrate"),
      scale(SCALE_FACTOR, SCALE_FACTOR),
      area(),
      body(),
      offscreen({ hide: true }),
      anchor("center"),
    ],
    f: () => [
      sprite("dirtFence"),
      scale(SCALE_FACTOR, SCALE_FACTOR),
      area(),
      //body({isStatic:true}),
      offscreen({ hide: true }),
      anchor("center"),
    ],
  },
};

scene("game", ({ levelId, coins } = { levelId: 0, coins: 0 }) => {
  const audio = play("music", {
    volume: 1,
    loop: true,
  });
  //gravity
  setGravity(2400);
  //music
  // add level to scene
  const level = addLevel(LEVELS[levelId ?? 0], levelConf);
  const player = add([
    sprite("knight"),
    body(),
    anchor("center"),
    pos(10, 0),
    scale(4, 4),
    area({
      shape: new Polygon([vec2(0, 0), vec2(12, 0), vec2(12, 15), vec2(0, 15)]),
      offset: vec2(-5, -3),
    }),
  ]);
  player.play("idle");

  player.onGround(() => {
    if (!isKeyDown("left") && !isKeyDown("right")) {
      player.play("idle");
    } else {
      player.play("run");
    }
  });

  onKeyPress("up", () => {
    if (player.isGrounded()) {
      player.jump(JUMP_HEIGHT);
      player.play("roll");
    }
  });
  onKeyDown("left", () => {
    player.move(-200, 0);
    player.flipX = true;
    // .play() will reset to the first frame of the anim, so we want to make sure it only runs when the current animation is not "run"
    if (player.isGrounded() && player.curAnim() !== "run") {
      player.play("run");
    }
  });

  onKeyDown("right", () => {
    player.move(200, 0);
    player.flipX = false;
    if (player.isGrounded() && player.curAnim() !== "run") {
      player.play("run");
    }
  });
  ["left", "right"].forEach((key) => {
    onKeyRelease(key as Key, () => {
      // Only reset to "idle" if player is not holding any of these keys
      if (player.isGrounded() && !isKeyDown("left") && !isKeyDown("right")) {
        player.play("idle");
      }
    });
  });

  onKeyPress("left", () => {
    player.play("run", { loop: true });
    player.flipX = true;
  });

  onKeyDown("left", () => {
    player.move(-200, 0);
  });
  onKeyRelease("left", () => {
    player.play("idle", { loop: true });
  });
  //right movement
  onKeyPress("right", () => {
    player.play("run", { loop: true });
    player.flipX = false;
  });

  onKeyDown("right", () => {
    player.move(200, 0);
  });
  onKeyRelease("right", () => {
    player.play("idle", { loop: true });
  });
  /*onKeyPress("up", ()=>{
		if(player.grounded)
		player.play("roll")
		player.jump(JUMP_HEIGHT*2)
	})*/

  player.onUpdate(() => {
    // center camera to player
    camPos(player.pos);
    // check fall death
    if (player.pos.y <= FALL_DEATH) {
    }
  });
  //collisions
  player.onCollide("enemy", (e, col) => {
    // if it's not from the top, die
    if (!col.isBottom()) {
      player.destroy();
      play("hurt");
      shake(200);
    } else {
      player.jump(JUMP_HEIGHT * 1.5);
      e.play("die");
      coins += 1;
      coinsLabel.text = "Score: " + coins;
      shake(10);
      player.play("roll");
      play("hurt");
      e.onAnimEnd((anim) => {
        if (anim === "die") {
          e.destroy();
        }
      });
    }
  });

  player.onCollide("coin", (c) => {
    destroy(c);
    play("coin");
    coins += 1;
    coinsLabel.text = "Score: " + coins;
  });

  player.onBeforePhysicsResolve((collision) => {
    if (collision.target.is(["rope"]) && player.isJumping()) {
      collision.preventResolution();
    }
  });

  //ui
  const coinsLabel = add([text("Score: " + coins), pos(24, 24), fixed()]);
  //end game
});

//start game
go("game");
