function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('planets-canvas');
    noStroke();
}

function draw() {
    background(0);

    for (let i = 0; i < 200; i++) {
        let x = random(width);
        let y = random(height);
        let starSize = random(1, 3);
        fill(252);
        ellipse(x, y, starSize, starSize);
    }

    let numPlanets = 5;
    for (let i = 0; i < numPlanets; i++) {
        let planetX = width / 2 + cos(frameCount * 0.01 + i) * (200 + i * 70);
        let planetY = height / 2 + sin(frameCount * 0.01 + i) * (200 + i * 20);
        let planetSize = 20 + i * 20;
        fill(100 + i * 30, 100, 255 - i * 50);
        ellipse(planetX, planetY, planetSize, planetSize);
    }
}
