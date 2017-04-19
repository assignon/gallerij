window.addEventListener("load", function(){

     var bigIng = document.getElementById("big");
     var small = document.getElementById("small");
     var buttContainer = document.getElementById("buttContainer");

     var imgArray = ['img1.png', 'img2.jpg', 'img3.jpg', 'img4.jpg'];

     for (var i = 0; i < 4; i++) {

         var bolletjes = document.createElement("button");
         bolletjes.className = "bolletjes";
         bolletjes.id = i;
         bolletjes.innerHTML = i;
         buttContainer.appendChild(bolletjes);


           }

           var bols = document.querySelectorAll(".bolletjes");
           var bolsArray = [];

           for (var i = 0; i < bols.length; i++) {

               var bolsArr = bols[i];

               bolsArr.addEventListener("mouseover", function(e){

                  small.style.opacity = "1";


                  small.src = "images/"+imgArray[e.target.id];


               })


               bolsArr.addEventListener("click", function(e){

                  big.src = "images/"+imgArray[e.target.id];

               })

           }


})
