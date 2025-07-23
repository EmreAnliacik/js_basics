function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log("draw");
        }
    };
}

const circle1 = createCircle(20);
const circle2 = createCircle(43);

circle1.draw();


