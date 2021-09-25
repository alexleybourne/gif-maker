
window.onload = () => {
    console.log('Loaded')

    let numFrames = 50;
    let width = 300;
    let height = 300;

    let canvas = document.querySelector("canvas");
    canvas.width = width;
    canvas.height = height;

    let gif = new GIF({
    workers: 2,
    quality: 10
    });

    //https://codepen.io/agar3s/pen/pJpoya
    let ctx = canvas.getContext("2d");
    ctx.lineJoin = "round";
    ctx.globalCompositeOperation = "lighter";

    let drawRectangle = function(x, y, w, h, border) {
    ctx.beginPath();
    ctx.moveTo(x + border, y);
    ctx.lineTo(x + w - border, y);
    ctx.quadraticCurveTo(x + w - border, y, x + w, y + border);
    ctx.lineTo(x + w, y + h - border);
    ctx.quadraticCurveTo(x + w, y + h - border, x + w - border, y + h);
    ctx.lineTo(x + border, y + h);
    ctx.quadraticCurveTo(x + border, y + h, x, y + h - border);
    ctx.lineTo(x, y + border);
    ctx.quadraticCurveTo(x, y + border, x + border, y);
    ctx.closePath();
    ctx.stroke();
    };
    let neonRect = function(x, y, w, h, r, g, b) {
    ctx.shadowColor = "rgb(" + r + "," + g + "," + b + ")";
    ctx.shadowBlur = 10;
    ctx.strokeStyle = "rgba(" + r + "," + g + "," + b + ",0.2)";
    ctx.lineWidth = 7.5;
    drawRectangle(x, y, w, h, 1.5);
    ctx.strokeStyle = "rgba(" + r + "," + g + "," + b + ",0.2)";
    ctx.lineWidth = 6;
    drawRectangle(x, y, w, h, 1.5);
    ctx.strokeStyle = "rgba(" + r + "," + g + "," + b + ",0.2)";
    ctx.lineWidth = 4.5;
    drawRectangle(x, y, w, h, 1.5);
    ctx.strokeStyle = "rgba(" + r + "," + g + "," + b + ",0.2)";
    ctx.lineWidth = 3;
    drawRectangle(x, y, w, h, 1.5);
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 1.5;
    drawRectangle(x, y, w, h, 1.5);
    };

    function draw(x, y) {
    neonRect(25 + x, 25 + y, 50, 50, 243, 243, 21);
    neonRect(225 - x, 25 + y, 50, 50, 193, 253, 51);
    neonRect(25 + x, 225 - y, 50, 50, 255, 153, 51);
    neonRect(225 - x, 225 - y, 50, 50, 252, 90, 184);
    neonRect(125, 125, 50, 50, 13, 213, 252);
    }
    let x = 0;
    let y = 0;
    let rendered = false;
    function loop() {
    x += 2;
    y += 2;
    if (x >= 300) {
        x = -50;
        y = -50;
        if (rendered === false) {
        console.log("not rendered");
        gif.render();
        } else {
        requestAnimationFrame(loop);
        }
    } else {
        if (rendered === false) {
            console.log("not rendered");
        gif.addFrame(canvas, {
            copy: true,
            delay: 50
        });
        }
        ctx.clearRect(0, 0, 300, 300);
        draw(x, y);
        requestAnimationFrame(loop);
    }
    }

    requestAnimationFrame(loop);

    gif.on("finished", function(blob) {
    var img = document.querySelector("img");
    img.src = URL.createObjectURL(blob);
    console.log("rendered");
    rendered = true;
    requestAnimationFrame(loop);
    });


}

