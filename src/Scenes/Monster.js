class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = { sprite: {} };  // Create an object to hold sprite bindings

        // Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.monsterSpeed = 2;  // Movement speed
        this.showingSmile = true;  // Initially show a smiling face
    }

    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        this.load.setPath("./assets/");
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");

        // Update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>';
    }

    create() {
        let my = this.my;

        // Create the main body sprite
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_darkF.png");

        // Create legs and set their position relative to the body
        // Create left leg and set its position relative to the body
my.sprite.leftLeg = this.add.sprite(my.sprite.body.x - 50, my.sprite.body.y + 130, "monsterParts", "leg_blueC.png");

// Reflect the left leg sprite over the y-axis by setting a horizontal scaling factor of -1
my.sprite.leftLeg.setScale(-1, 1);

        
        my.sprite.rightLeg = this.add.sprite(my.sprite.body.x + 50, my.sprite.body.y + 130, "monsterParts", "leg_redC.png");

        // Create arms and set their position relative to the body
// Create left arm and set its position relative to the body
        my.sprite.leftArm = this.add.sprite(my.sprite.body.x - 100, my.sprite.body.y + 20, "monsterParts", "arm_redD.png");

// Flip the left arm sprite over the x-axis by setting a vertical scaling factor of -1
        my.sprite.leftArm.setScale(-1, 1);
        my.sprite.rightArm = this.add.sprite(my.sprite.body.x + 100, my.sprite.body.y + 20, "monsterParts", "arm_blueD.png");

        // Create eyes and set their position relative to the body
        my.sprite.leftEye = this.add.sprite(my.sprite.body.x - 40, my.sprite.body.y - 100, "monsterParts", "eye_yellow.png");
        my.sprite.rightEye = this.add.sprite(my.sprite.body.x + 40, my.sprite.body.y - 100, "monsterParts", "eye_yellow.png");

        // Create mouth and set its position relative to the body
        my.sprite.mouthSmile = this.add.sprite(my.sprite.body.x, my.sprite.body.y - 40, "monsterParts", "mouthB.png");
        my.sprite.mouthFangs = this.add.sprite(my.sprite.body.x, my.sprite.body.y - 40, "monsterParts", "mouth_closed_fangs.png");

        // Initially hide the fangs mouth
        my.sprite.mouthFangs.setVisible(false);

        // Create head accessories and set their position relative to the body
        my.sprite.antennaLeft = this.add.sprite(my.sprite.body.x - 30, my.sprite.body.y - 140, "monsterParts", "detail_green_antenna_large.png");
        my.sprite.antennaRight = this.add.sprite(my.sprite.body.x + 30, my.sprite.body.y - 140, "monsterParts", "detail_green_antenna_large.png");

        // Add keyboard input listeners
        this.input.keyboard.on("keydown-S", () => {
            this.showingSmile = true;
            my.sprite.mouthSmile.setVisible(true);
            my.sprite.mouthFangs.setVisible(false);
        });

        this.input.keyboard.on("keydown-F", () => {
            this.showingSmile = false;
            my.sprite.mouthSmile.setVisible(false);
            my.sprite.mouthFangs.setVisible(true);
        });
    }

    update() {
        let my = this.my;

        // Move the monster left when 'A' is pressed
        if (this.input.keyboard.checkDown(this.input.keyboard.addKey('A'), 1)) {
            for (let part in my.sprite) {
                my.sprite[part].x -= this.monsterSpeed;
            }
        }

        // Move the monster right when 'D' is pressed
        if (this.input.keyboard.checkDown(this.input.keyboard.addKey('D'), 1)) {
            for (let part in my.sprite) {
                my.sprite[part].x += this.monsterSpeed;
            }
        }
    }
}
