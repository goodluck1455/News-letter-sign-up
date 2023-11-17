let subscribeButton = document.querySelector(".subscribeBtn");
let subscribeButtonB = document.querySelector(".subscribeBtnB");
let subscribeInput = document.querySelector(".subscribeInput");
let validation = document.querySelector(".validation");
let mainComponentB = document.querySelector(".mainComponent-B");
let mainComponentA = document.querySelector(".mainComponent");
let emailCollection = document.querySelector(".emailCollection");









subscribeButton.addEventListener("click", (email) => {

  /*------------------------------------------------
  email validation i.e the correctly email format 
  must be inputted before it moves to the next step
  ----------------------------------------------------*/
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //  emailRegex.test(email);

    // alert("are u working");
    if(subscribeInput.value.trim() === "" || !emailRegex.test(subscribeInput.value.trim())){

      subscribeInput.style.border = "1px solid red";
      validation.style.display = "block";
      subscribeInput.style.backgroundColor = "rgb(255, 98, 87, 0.2)";
      subscribeInput.classList.add("red-placeholder");
      console.log("subscribeInput");


    }else{
      mainComponentB.style.display = "block";
      mainComponentA.style.display = "none";
      emailCollection.innerHTML = subscribeInput.value;
    }
    
  });


  subscribeButtonB.addEventListener("click", ()=>{
    mainComponentB.style.display = "none";
      mainComponentA.style.display = "block";
      subscribeInput.value = " ";
      subscribeInput.style.border = "var(--bs-border-width) solid var(--bs-border-color);";
      validation.style.display = "none";
      subscribeInput.style.backgroundColor = "none";
  })