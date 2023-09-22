
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = document.querySelector("#app");
app.style.height = "100vh";
app.className = "row align-center justify-center";
var h1 = document.createElement("h1");
h1.textContent = "Welcome To Home";
app.appendChild(h1);
