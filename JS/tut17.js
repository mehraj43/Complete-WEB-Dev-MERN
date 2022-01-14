console.log("Welcome to tut 17 on events");

document.getElementById("headin").addEventListener("click",function(e){
    let vari;
    console.log("You have clicked the heading");
    // location.href = "//codewithharry.com";
    console.log(e);
    vari = e.target;
    vari = e.target.className;
    vari = Array.from(e.target.classList).forEach(function(ele){
        console.log(ele)
    });
    vari = Array.from(e.target.classList)
    vari = e.offsetX;
    vari = e.offsetY;
    vari = e.clientX;
    vari = e.clientY;
    console.log(vari);
});

// document.getElementById("headin").addEventListener("mouseover",function(e){
//     let i;
//     console.log("Mouse hovering");
//     i = e.offsetX;
//     console.log(i);
// });
