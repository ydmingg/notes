let app = document.querySelector("#app") as HTMLElement;
app.style.height = "100vh"
app.className = "row align-center justify-center"

let h1 = document.createElement("h1");
h1.textContent = "Welcome To Home"

app.appendChild(h1)
