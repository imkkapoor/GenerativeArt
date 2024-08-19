let waveStars = [];

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('waves-canvas');
    noStroke();

    for (let i = 0; i < 500; i++) {
        waveStars.push({
            x: random(width),
            y: random(height),
            size: random(1, 3),
            twinkle: random(100)
        });
    }
}

function draw() {
    background(0);

    for (let y = 0; y < height; y += 5) {
        let wave = sin(frameCount * 0.01 + y * 0.05) * 50;
        fill(150 + wave, 50 + wave / 2, 200 + wave / 4);
        rect(0, y, width, 5);
    }

    for (let star of waveStars) {
        fill(255, 255, 255, 200 + sin(star.twinkle + frameCount * 0.05) * 55);
        ellipse(star.x, star.y, star.size, star.size);
    }
}
