let starburstStars = [];

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);

    canvas.parent('starburst-canvas');
    noStroke();

    for (let i = 0; i < 1000; i++) {
        let angle = random(TWO_PI);
        let distance = random(50, min(width, height) / 2);
        starburstStars.push({
            x: width / 2 + cos(angle) * distance,
            y: height / 2 + sin(angle) * distance,
            speedX: cos(angle) * random(0.5, 2),
            speedY: sin(angle) * random(0.5, 2),
            size: random(2, 5),
            color: [random(100, 255), random(100, 255), random(100, 255), 150]
        });
    }
}

function draw() {
    background(0, 50);

    for (let star of starburstStars) {
        fill(star.color);
        ellipse(star.x, star.y, star.size, star.size);
        star.x += star.speedX;
        star.y += star.speedY;

        if (star.x > width || star.x < 0 || star.y > height || star.y < 0) {
            let angle = random(TWO_PI);
            star.x = width / 2;
            star.y = height / 2;
            star.speedX = cos(angle) * random(0.5, 2);
            star.speedY = sin(angle) * random(0.5, 2);
        }
    }
}
