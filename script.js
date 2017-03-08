TinyTurtle.apply(window, [undefined, 550, 550]);

function square(b){
forward(b);
right(90);
forward(b);
right(90);
forward(b);
right(90);
forward(b);
right(90);
forward(b);
}

// Type your function call below

function triangle(a){
    right(60); 
    forward(a);
    right(60);
    forward(a);
    right(60);
    right(a);
    forward(150)
//    penup();
    forward(a);
//    pendown();
    stamp();
}
function house(){
    square(155);
    triangle(90);
}
//house();

stamp();

function rectangle(z){
  
    forward(78);
    left(90);
    forward(z);
    left(90); 
    forward(78);
    left(90);
    forward(z);
    left(90);
    forward(159);
 
   
   
}
rectangle(159);

function hexagon(size){
    
right(60);
forward(size);
right(60);
forward(size);
right(60);
forward(size);
right(60);z
forward(size);
right(60);
forward(size


}


    hexagon(120);

function shape
(type, size)
{
    if (type=== 'rectangle')({rectangle(x)}
    else if (type=== 'hexangon')({hexangon(size)}
}


stamp();
