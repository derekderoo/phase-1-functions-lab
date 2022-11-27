function distanceFromHqInBlocks(distance) {
if (distance > 42) {
    return distance - 42;
} else if (distance < 42) {
    return 42 - distance;
} else {
    return 0;
}
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264;
    } else if (start < destination) {
        return (destination - start) * 264;
    } else{
        return 0;
    }
}

function calculatesFarePrice (start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400){
        return 0;
    } else if (distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02;
    } else if (distanceTravelledInFeet(start, destination) <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}