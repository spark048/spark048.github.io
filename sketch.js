  var circles = [];

  function setup() {
    createCanvas(windowWidth, windowHeight);

    //avoid infinit loop
    var protection = 0;

    //loop until the array get filled with cirtain number of objects
    while (circles.length < 300) {
      //create circle object each time to set random x and y values
      var circle = {
        x: random(width),
        y: random(height),
        r: random(10, 30)
      };

      //check if this circle is overlapped with the others created previously
      var overlapping = false;

      //go through all the previously created circles to compare
      for (var j = 0; j < circles.length; j++) {
        var another = circles[j];
        var d = dist(circle.x, circle.y, another.x, another.y);
        if (d < circle.r + another.r) {
          overlapping = true;
          //once overlapping is found this for loop doesn't need to continue any more
          break;
        }
      }

      //if there is no overlapping with this new circle push this circle object to array
      if (!overlapping) {
        circles.push(circle);
      } //this "circle" is the one just defined right before

      protection++;
      if (protection > 10000) {
        break
      }
    }

    for (var i = 0; i < circles.length; i++) {
      //draw this circle that is at [i] in the allay
      fill(255, 0, 50, 100);
      noStroke();
      ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
    }
  }