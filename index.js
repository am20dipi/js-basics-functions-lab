// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    // returns the number of blocks given a value
    if (blockNumber > 42) {
        return blockNumber - 42;
    } else {
        return 42 - blockNumber;
    }
}

function distanceFromHqInFeet(blockNumber) {
    // returns the number of feet given a value
    return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(starting, destination) {
    // returns the number of feet given a value
    if ( starting < destination){
        return (destination - starting) * 264; 
    } else {
        return (starting - destination) * 264;
    }
}

function calculatesFarePrice(starting, destination) {
    const distance = distanceTravelledInFeet(starting, destination)
    if (distance <= 400) {
        return 0; 
    } else if (distance > 400 && distance <= 2000) {
        return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}