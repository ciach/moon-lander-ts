const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let lander = {
    x: canvas.width / 2,
    y: 50,
    width: 50,
    height: 50,
    dy: 0,
    thrust: .5,
    gravity: 0.01
};

function drawLander() {
    ctx.fillStyle = 'gray';
    ctx.fillRect(lander.x, lander.y, lander.width, lander.height);
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply gravity
    lander.dy += lander.gravity;

    // Move the lander
    lander.y += lander.dy;

    // Draw the lander
    drawLander();

    // Check for landing
    if (lander.y + lander.height >= canvas.height) {
        lander.dy = 0;
        lander.y = canvas.height - lander.height;
    }

    requestAnimationFrame(update);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        lander.dy -= lander.thrust;
    }
});

update();
