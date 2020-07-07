const starsElements = document.querySelectorAll('.stars');
        const ratingValue = document.querySelector("#rating-value");
        const background = document.querySelector(".globalBg");

        for(let i = 0; i<starsElements.length; i++) {
            starsElements[i].addEventListener("mouseover",function(){
                for(let j=0; j<starsElements.length; j++){
                    starsElements[j].classList.remove("starsSelected");
                    starsElements[j].classList.add("stars");
                }
                for(let j=0; j<=i; j++) {
                    starsElements[j].classList.remove("stars");
                    starsElements[j].classList.add("starsSelected");
                }
            })
            starsElements[i].addEventListener("click",function(){
                ratingValue.value = (i + 1) * 40 + "£";
                index = i;
            })
            background.addEventListener("click",function(){
                ratingValue.value = "???";
                for(let j=0; j<starsElements.length; j++){
                    starsElements[j].classList.remove("starsSelected");
                    starsElements[j].classList.add("stars");
                }
            })
            starsElements[i].addEventListener("mouseout",function(){
                for(let j=0; j<starsElements.length; j++){
                    starsElements[j].classList.remove("starsSelected");
                    starsElements[j].classList.add("stars");
                }
                for(let j=0; j<=index; j++) {
                    starsElements[j].classList.remove("stars");
                    starsElements[j].classList.add("starsSelected");
                }
            })
        }