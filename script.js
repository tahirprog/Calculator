let button = document.querySelectorAll(".btn");
let screen = document.getElementById("number");
button.forEach( btn => {
    btn.addEventListener('click' , ()=>{
        let screenvalue = screen.value;
        let values = btn.innerHTML;
         screen.value += values;
         
         if (values == "C"){
            screen.value = "";
      
         }
         else if (values == "="){
          screen.value = eval(screenvalue);

         }
         

    })
 });