const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = JSON.stringify(
    [...form.querySelectorAll("input")].reduce((object, curInput) => {
      object[curInput.name] = curInput.value;
      return object;
    }, {})
  );
  fetch("/stat", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: data
  }).then(response => response.json()).then(data => {
    if (JSON.parse(data).status === "ok") {
      form.querySelectorAll("input").forEach(el => {
        el.value = "";
      })
    }
  })
});