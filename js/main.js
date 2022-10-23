
/* Functionalies bundled inside IIFE method */
(function(){
    let currentSlide = 0;   //Current slide number
    let totalSlidingValue = 0; //Initial slide position
    let elementMove = 100;  //Sliding value - here it is 100%(whole image)

    /* ELEMENT SELECTORS */
    let imgHolders = document.querySelector(".imgHolders");
    let leftArrow = document.querySelector(".leftArrow");
    let rightArrow = document.querySelector(".rightArrow");

    /* CLICK EVENT LISTENERS ADDED */
    leftArrow.addEventListener("click", leftButtonClicked);
    rightArrow.addEventListener("click", rightButtonClicked);

    function leftButtonClicked() {
        totalSlidingValue -= elementMove;    //Decreasing slide value to slide from left to right
        imgHolders.style.transform = "translateX(-" + totalSlidingValue + "%)"; //Sliding using transform css property
        currentSlide--; //Reducing current slide by 1
        disableClickElement();
    }

    function rightButtonClicked() {
        totalSlidingValue += elementMove;   //Increasing slide value to slide from right to left
        imgHolders.style.transform = "translateX(-" + totalSlidingValue + "%)"; //Sliding using transform css property
        currentSlide++; //Increasing current slide by 1
        disableClickElement();
    }

    function disableClickElement() {
        if(currentSlide == 0) { //Checking if it is first slide
            leftArrow.classList.add("disabled"); // Disabled class added to left arrow
        } else if (currentSlide == 4) { //Checking if it is last slide
            rightArrow.classList.add("disabled");   // Disabled class added to right arrow
        } else {
            leftArrow.classList.remove("disabled");
            rightArrow.classList.remove("disabled");
        }
    }
    disableClickElement();
})();