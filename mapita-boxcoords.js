var coords = [
    [-74.11228547096252, 40.679808121244214],
    [-74.0110194683075, 40.878978206941586],
    [-74.01113748550415, 40.6789212516596],
    [-74.012371301651, 40.57970234842723],
    [-74.00228547096252, 40.679808121244214]
];

function box(coords) {
    let longCoords= [];
    let latCoords = [];

    //put long and lat on separate arrays
    coords.forEach(element => {
        latCoords.push(element[0]);
        longCoords.push(element[1]);
    });

   /*
   * Find min and max values for both long and lat coords. 
   * These will define the area of the box.
   * Remember that N/S is 90 to -90 and W/E -180 to 180
   */
   const northWestCoords = [findMaxValue(latCoords), findMinValue(longCoords)];
   const southEastCoords = [findMinValue(latCoords), findMaxValue(longCoords)];
   
   
   const result = {
        nw : northWestCoords,
        se : southEastCoords
   };
   
    return result;
}

function findMaxValue(arr) {
    return Math.max.apply(null, arr);
}

function findMinValue(arr) {
    return Math.min.apply(null, arr);
}

console.log(JSON.stringify(box(coords)));