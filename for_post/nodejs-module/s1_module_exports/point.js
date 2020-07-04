let parseAxis = (a) => {

    return a === undefined || typeof a != 'number' || String(a) === 'NaN' ? 0 : a;

};

// a Main method
let Point = (x, y) => {
    return {
        x: parseAxis(x),
        y: parseAxis(y)
    };
};

// a static method
Point.distance = (pt1, pt2) => {
    return Math.sqrt(Math.pow(pt1.x - pt2.x, 2) + Math.pow(pt1.y - pt2.y, 2));
};

module.exports = Point;
