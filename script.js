// select all color squares
const boxes = document.querySelectorAll(".color");

// change background when a square is clicked
boxes.forEach(function(box){
    box.addEventListener("click", function(e){
        const color = e.target.id;   // get the id of clicked square
        document.body.style.backgroundColor = color;
    });
});

// select heading
const h1 = document.querySelector("h1");

// change text color when heading is clicked
h1.addEventListener("click", function(){
    document.body.style.color = "red";
});
h1.addEventListener("click", function(){
    document.body.style.color = "purple";
});
h1.addEventListener("click", function(){
    document.body.style.color = "blue";
});
h1.addEventListener("click", function(){
    document.body.style.color = "green";
});
h1.addEventListener("click", function(){
    document.body.style.color = "white";
});




