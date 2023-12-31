// @ts-nocheck
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouseX = 0;
let mouseY = 0;

let particles = [],
	properties = {
		bgColor: "rgba(17, 17, 19, 1)",
		particleColor: "rgba(255, 40, 40, 1)",
		particleRarius: 5,
		particleCount: 150,
		particleMaxVelocity: 1,
		particleLife: 6,
		lineLenght: 100,
		line_Width: 5,
	};

window.onresize = () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
};

canvas.addEventListener("mousemove", (e) => {
	mouseX = e.clientX;
	mouseY = e.clientY;
});

class Particle {
	constructor() {
		this.x = Math.random() * canvas.width;
		this.y = Math.random() * canvas.height;
		this.velocityX =
			Math.random() * (properties.particleMaxVelocity * 2) -
			properties.particleMaxVelocity;

		this.velocityY =
			Math.random() * (properties.particleMaxVelocity * 2) -
			properties.particleMaxVelocity;
		this.life = Math.random() * properties.particleLife * 60;
	}

	reLife() {
		if (this.life < 1) {
			this.velocityX =
				Math.random() * (properties.particleMaxVelocity * 2) -
				properties.particleMaxVelocity;

			this.velocityY =
				Math.random() * (properties.particleMaxVelocity * 2) -
				properties.particleMaxVelocity;
			this.life = Math.random() * properties.particleLife * 60;
		}
		this.life--;
	}

	position() {
		(this.x + this.velocityX > canvas.width && this.velocityX > 0) ||
		(this.x + this.velocityX < 0 && this.velocityX < 0)
			? (this.velocityX *= -1)
			: this.velocityX;

		(this.y + this.velocityY > canvas.height && this.velocityY > 0) ||
		(this.y + this.velocityY < 0 && this.velocityY < 0)
			? (this.velocityY *= -1)
			: this.velocityY;

		this.x += this.velocityX;
		this.y += this.velocityY;
	}

	reDraw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, properties.particleRarius, 0, Math.PI * 2);
		ctx.closePath();
		ctx.fillStyle = properties.particleColor;
		ctx.fill();
	}
}

function reDrawBackground() {
	ctx.fillStyle = properties.bgColor;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function reDrawParticles() {
	for (let i in particles) {
		particles[i].reDraw();
		particles[i].reLife();
		particles[i].position();
	}
}

function drawLines() {
	let x1, y1, x2, y2, length, opacity;

	for (let i in particles) {
		for (let j in particles) {
			x1 = particles[i].x;
			y1 = particles[i].y;
			x2 = particles[j].x;
			y2 = particles[j].y;

			length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

			if (length < properties.lineLenght) {
				opacity = 1 - length / properties.lineLenght;
				ctx.lineWidth = properties.line_Width;
				ctx.strokeStyle = `rgba(255, 40, 40, ${opacity})`;
				ctx.beginPath();
				ctx.moveTo(x1, y1);
				ctx.lineTo(x2, y2);
				ctx.closePath();
				ctx.stroke();
			}
		}
		x2 = mouseX;
		y2 = mouseY;
		length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

		if (length < properties.lineLenght) {
			opacity = 1 - length / properties.lineLenght;
			ctx.lineWidth = properties.line_Width;
			ctx.strokeStyle = `rgba(255, 40, 40, ${opacity})`;
			ctx.beginPath();
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			ctx.closePath();
			ctx.stroke();
		}
	}
}

function loop() {
	reDrawBackground();
	reDrawParticles();
	drawLines();
	requestAnimationFrame(loop);
}

function init() {
	for (let i = 0; i < properties.particleCount; i++) {
		particles.push(new Particle());
	}
	loop();
}
init();
