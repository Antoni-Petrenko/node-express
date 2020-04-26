const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = JSON.stringify(
    [...form.querySelectorAll("input")].reduce((object, curInput) => {
      object[curInput.name] = curInput.value;
      return object;
    }, {})
  );
  fetch("post-user",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:data
  });
});
