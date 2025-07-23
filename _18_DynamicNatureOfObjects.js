const circle = {
    radius: 1
};

circle.color = "Yellow";
circle.draw = function () {};
delete circle.draw;

console.log(circle);


