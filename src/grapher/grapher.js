import { evaluate } from 'mathjs';

export function calculateCoordinates(){
    console.log("calculate coords");

    let expression = document.getElementById("expression").value;

    let points = [];
    for(let x = -100; x < 100; x++){
        let expressionString = expression.replaceAll('x', '(' + x + ")");
        console.log("expression for " + x + ": " + expressionString);

        let y = evaluate(expressionString);
        console.log("evaulation: " + y);
        points.push({"x": x*20, "y": y});
    }

    console.log("points: " + JSON.stringify(points));
    draw(points);
}

function draw(points){
    let canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');

        drawPoints(ctx, points);
    }
}

/**
 * do some goofy stuff to make lines smoother (grabbed from stackoverflow)
 */
function drawPoints(ctx, points) {
    // draw a basic circle instead
    if (points.length < 6) {
        var b = points[0];
        ctx.beginPath();
        ctx.arc(b.x, b.y, ctx.lineWidth / 2, 0, Math.PI * 2, !0);
        ctx.closePath();
        ctx.fill();
        return
    }
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    let i = 0;
    // draw a bunch of quadratics, using the average of two points as the control point
    for (i = 1; i < points.length - 2; i++) {
        var c = (points[i].x + points[i + 1].x) / 2,
            d = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, c, d)
    }
    ctx.quadraticCurveTo(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    ctx.stroke()
}
