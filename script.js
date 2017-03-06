TinyTurtle.apply(window, [undefined, 400, 400]);

function square(){
forward(155);
right(90);
forward(155);
right(90);
forward(155);
right(90);
forward(155);
right(90);
forward(155);
}

// Type your function call below

function triangle(){
    right(60); 
    forward(90);
    right(60);
    forward(90);
    right(60);
    right(90);
    forward(150)
    
}
function house(){
    square();
    triangle();
}
house();

function rectangle(){
    forward(30);
    left(90);
    forward(60);
    left(90); 
    forward(30);
    left(90);
    forward(60);
    left(90);
    
   
   
}
rectangle();

function pentagon(x){
    left(45);
    forward(x);
    left(45);
    forward(x);
    left(45);
    forward(x);
    right(45);
    forwward(x);
    left(45);
    forward(x);
    right(45);
    forward(x);
    right(45);
    forward(x);
    
}
pentagon(60);

stamp();
