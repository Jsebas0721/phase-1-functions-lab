// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    
    let hqLocation = 42;

    if(someValue > hqLocation){
        return someValue - hqLocation;
    }else{
        return hqLocation - someValue;
    }

}

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue)* 264;
}


function distanceTravelledInFeet(start, destination){
    
    let maxStreetNum = Math.max(start, destination);
    let minStreetNum = Math.min(start, destination);

    return (maxStreetNum - minStreetNum) * 264;

}

function calculatesFarePrice(start, destination){
    
    let distanceInFeet = distanceTravelledInFeet(start, destination);

    if(distanceInFeet < 400){
        return 0;
    }else if(distanceInFeet >= 400 && distanceInFeet <= 2000){
        return (distanceInFeet - 400)*.02;
    }else if(distanceInFeet > 2000 && distanceInFeet <= 2500){
        return 25;
    }else if(distanceInFeet > 2500){
        return 'cannot travel that far';
    }
  
}
