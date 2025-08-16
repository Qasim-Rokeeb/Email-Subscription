const scriptURL =
        "https://script.google.com/macros/s/AKfycbwuAajr-fYfUAfg3ZGYSf8J4eT2n46U2gcX7GY_8aTSHKxNhv5VF3JpZoOdpypm6VU/exec";
      const form = document.forms["submit-to-google-sheet"];
      const message = document.getElementById("msg");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            console.log("Success!", response);
            message.innerHTML = "Thank you for subscribing";
            setTimeout(()=>{
                message.innerHTML = ""
            },5000)
            form.reset();
          })
          .catch((error) => console.error("Error!", error.message));
      });