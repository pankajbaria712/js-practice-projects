const loginBtn = document.getElementById("loginBtn");
const output = document.getElementById("output");

// Demo login credentials
const VALID_USERNAME = "admin";
const VALID_PASSWORD = "12345";

loginBtn.addEventListener("click", () => {
  output.className = "output info";
  output.textContent = "🕵️ Starting login process...";

  setTimeout(() => {
    try {
      // Step 1️⃣ - Ask for username
      const username = prompt("Enter your username:");

      if (username === null)
        throw { type: "cancel", msg: "❌ Login cancelled by user." };
      if (username.trim() === "")
        throw { type: "empty", msg: "⚠️ Username cannot be empty!" };

      // Step 2️⃣ - Ask for password
      const password = prompt("Enter your password:");

      if (password === null)
        throw { type: "cancel", msg: "❌ Login cancelled at password step." };
      if (password.trim() === "")
        throw { type: "empty", msg: "⚠️ Password cannot be empty!" };

      // Step 3️⃣ - Validate credentials
      if (username !== VALID_USERNAME && password !== VALID_PASSWORD) {
        throw {
          type: "both",
          msg: "🚫 Both username and password are incorrect!",
        };
      } else if (username !== VALID_USERNAME) {
        throw { type: "username", msg: "🚫 Invalid username!" };
      } else if (password !== VALID_PASSWORD) {
        throw { type: "password", msg: "🔒 Wrong password! Try again." };
      }

      // ✅ Success
      output.className = "output success";
      output.textContent = `✅ Welcome back, ${username}! Login successful.`;
    } catch (err) {
      output.className = "output error";
      output.textContent = err.msg || "❗ Unexpected error occurred.";
    }
  }, 600);
});
