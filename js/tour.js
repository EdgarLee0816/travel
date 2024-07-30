document.addEventListener("DOMContentLoaded", ()=>{


    const slide = document.getElementById("slide");

    
    const toDown = () => {

        slide.style.top = 0;
        slide.style.transition = "top 0.5s";

        
        setTimeout(zz, 1000 );        
    };
      
    const zz = () => {
        slide.style.top = "-300px";
        slide.style.transition = "none";
        slide.prepend( slide.children[2] );
    };
    
    setInterval(toDown, 2500);


/***************팝업******************/
const notice_li = document.querySelectorAll("#notice li:not(:first-child)");
const black = document.getElementById("black");
const popbtn = document.querySelector("#popup button");

const popup = i => {

    if (i == "닫기"){
        black.style.display = "none";

    }
    else
    {
        black.style.display = "flex";
    }
}

notice_li.forEach( i => {

    i.children[0].addEventListener("click", popup)

});

popbtn.addEventListener("click", ()=>{popup("닫기");})


});/////////////////////////끝;