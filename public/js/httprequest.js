const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = JSON.stringify(
    [...form.querySelectorAll("input")].reduce((object, curInput) => {
      object[curInput.name] = curInput.value;
      return object;
    }, {})
  );
  console.log(data)
  fetch("localhost/admin/post-user",{
      method:"POST"
  });
});

console.dir(form);
