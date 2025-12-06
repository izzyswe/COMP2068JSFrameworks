const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      identifier: loginForm.identifier.value,
      accountPassword: loginForm.accountPassword.value,
    };

    const res = await fetch("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      document.getElementById("loginError").innerText = "Invalid login.";
      return;
    }

    window.location.href = "/home";
  });
}
