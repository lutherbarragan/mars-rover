var rover = {
  direction: "N",
  x: 5,
  y: 5,
  travelLog: []
}


var log = []


function turnLeft(rover){

  if ( rover.direction == "N") {
    console.log("Rover is now facing West");
    rover.direction = "W";
  } else if (rover.direction == "W") {
    console.log("Rover is now facing South");
    rover.direction = "S";
  } else if (rover.direction == "S") {
    console.log("Rover is now facing East");
    rover.direction = "E";
  } else if (rover.direction == "E") {
    console.log("Rover is now facing North");
    rover.direction = "N"
  }
  
  log.push("L");
  console.log(log);

  
}

function turnRight(rover){

  switch (rover.direction) {
    case "N":
      console.log("Rover is now facing East");
      rover.direction = "E";
      break;

    case "E":
      console.log("Rover is now facing South");
      rover.direction = "S"; 
      break;

    case "S":
    console.log("Rover is now facing West");
    rover.direction = "W";
    break;

    case "W":
    console.log("Rover is now facing North");
    rover.direction = "N";
    break;
  }

  log.push("R");
  console.log(log);

  
}

function moveForward(rover){

  if (rover.direction == "N") {
    
    if (rover.y <= 0) {
      console.log("It can't go!");
      return
    } else {
      rover.y -=  1;
      console.log("x: " + rover.x + " y: " + rover.y);
    }
  } else if (rover.direction == "S") {

    if (rover.y >= 10) {
      console.log("It can't go!");
      return
    } else {
      rover.y += 1;
      console.log("x: " + rover.x + " y: " + rover.y);
    }
  } else if (rover.direction == "E") {
    
      if (rover.x >= 10) {
        console.log("It can't go!");
        return
      } else {
        rover.x += 1;
    console.log("x: " + rover.x + " y: " + rover.y);
    }
  } else if (rover.direction =="W") {
      if (rover.x <= 0) {
        console.log("It can't go!");
        return
      } else {
        rover.x -= 1;
        console.log("x: " + rover.x + " y: " + rover.y);
      }
    
  }

  log.push("F");
  rover.travelLog.push(rover.x + ", " + rover.y);
  console.log(rover.travelLog);
  console.log(log);


}

function moveBackward(rover){

  if (rover.direction == "N") {
    
    if (rover.y >= 10) {
      console.log("It can't go!");
      return
    } else {
      rover.y +=  1;
      console.log("x: " + rover.x + " y: " + rover.y);
    }
  } else if (rover.direction == "S") {
      if (rover.y <= 0) {
        console.log("It can't go!");
        return
      } else {
        rover.y -=  1;
      console.log("x: " + rover.x + " y: " + rover.y);
      }
  } else if (rover.direction == "E") {
    if (rover.x <= 0) {
      console.log("It can't go!");
      return
    } else {
      rover.x -= 1;
      console.log("x: " + rover.x + " y: " + rover.y);
    }
  } else if (rover.direction == "W") {
    if (rover.x >= 10) {
      console.log("It can't go!");
      return
    } else {
      rover.x += 1;
      console.log("x: " + rover.x + " y: " + rover.y);
    }
  }

  log.push("B");
  rover.travelLog.push(rover.x + ", " + rover.y);
  console.log(rover.travelLog);
  console.log(log);
}

function commands () {
}


