//SHOW ERROR IF USERNAME EXIST
document
  .getElementById("registerForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault(); // stops page reload

    const form = e.target;

    const data = {
      accountUsername: form.accountUsername.value,
      accountEmail: form.accountEmail.value,
      accountPassword: form.accountPassword.value,
    };

    const res = await fetch("/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // If duplicate username or fail
    if (res.status === 400) {
      document.getElementById("error").innerText = "Username already taken.";
      return;
    }

    if (res.status === 201 || res.redirected) {
      window.location.href = "/auth/login"; // successful register
    }
    if (res.ok) {
      // any 2xx (including final 200 after redirect)
      window.location.href = "/auth/login";
    } else if (errorEl) {
      errorEl.textContent = "Something went wrong. Please try again.";
    }
  });
