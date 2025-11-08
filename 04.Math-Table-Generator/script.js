// Math Table Generator JavaScript Logic

(function () {
  "use strict";

  // --- DOM Element References ---
  const form = document.getElementById("tableForm");
  const numberInput = document.getElementById("numberInput");
  const limitInput = document.getElementById("limitInput");
  const outputSection = document.getElementById("outputSection");
  const outputContent = document.getElementById("outputContent");
  const resetBtn = document.getElementById("resetBtn");
  const downloadBtn = document.getElementById("downloadBtn");
  const messageBox = document.getElementById("messageBox");

  let currentTableText = ""; // Stores the generated text for download

  // --- Utility Functions ---

  /**
   * Displays a user message (error or success) in the message box.
   * @param {string} message - The message text.
   * @param {string} type - 'error' or 'success'.
   */
  function showMessage(message, type) {
    // Reset classes
    messageBox.classList.remove("error", "success", "hidden");
    messageBox.classList.add("visible");

    messageBox.textContent = message;

    if (type === "error") {
      messageBox.classList.add("error");
    } else if (type === "success") {
      messageBox.classList.add("success");
    }

    // Hide message after 5 seconds
    setTimeout(() => {
      messageBox.classList.remove("visible");
      // Use setTimeout to fully hide the box after transition
      setTimeout(() => {
        messageBox.classList.add("hidden");
      }, 300);
    }, 5000);
  }

  /**
   * Toggles the visibility of the output elements with the CSS animation class.
   * @param {boolean} show - true to show, false to hide.
   */
  function toggleOutput(show) {
    if (show) {
      outputSection.classList.add("visible");
      outputSection.classList.remove("hidden");
      downloadBtn.classList.remove("hidden");
      resetBtn.classList.remove("hidden");
    } else {
      outputSection.classList.remove("visible");
      outputSection.classList.add("hidden");
      downloadBtn.classList.add("hidden");
      resetBtn.classList.add("hidden");
    }
  }

  /**
   * Generates the multiplication table text.
   * @param {number} number - The base number.
   * @param {number} limit - The upper limit of multiplication.
   * @returns {string} - The formatted table content.
   */
  function generateTable(number, limit) {
    let table = `--- Multiplication Table of ${number} up to ${limit} ---\n\n`;
    // Determine the required padding width for results based on the max possible result
    const maxResult = number * limit;
    const resultWidth = String(maxResult).length;
    const numberWidth = String(number).length;
    const limitWidth = String(limit).length;

    for (let i = 1; i <= limit; i++) {
      const result = number * i;

      // Format the equation to align nicely using dynamic padding
      const equation = `${String(number).padStart(numberWidth, " ")} × ${String(
        i
      ).padStart(limitWidth, " ")} = ${String(result).padStart(
        resultWidth,
        " "
      )}`;
      table += equation + "\n";
    }

    return table;
  }

  // --- Event Handlers ---

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // 1. Clear previous state
    toggleOutput(false);
    messageBox.classList.add("hidden");

    const number = parseInt(numberInput.value, 10);
    const limit = parseInt(limitInput.value, 10);

    // 2. Input Validation
    if (isNaN(number) || isNaN(limit)) {
      showMessage("Both fields must be valid numbers.", "error");
      return;
    }
    if (number < 1 || limit < 1) {
      showMessage(
        "Both number and limit must be positive integers (1 or greater).",
        "error"
      );
      return;
    }
    if (limit > 500) {
      // Slightly tighter limit for responsiveness
      showMessage("Please use a limit less than or equal to 500.", "error");
      return;
    }

    try {
      // 3. Generate and Display
      currentTableText = generateTable(number, limit);
      outputContent.textContent = currentTableText;

      // 4. Update UI state
      toggleOutput(true);
      showMessage(
        `Successfully generated the table for ${number} up to ${limit}.`,
        "success"
      );
    } catch (error) {
      console.error("Table generation error:", error);
      showMessage(
        "An unexpected error occurred during table generation.",
        "error"
      );
    }
  });

  downloadBtn.addEventListener("click", function () {
    if (!currentTableText) {
      showMessage(
        "Please generate a table first before attempting to download.",
        "error"
      );
      return;
    }

    const number = numberInput.value || "X";
    // Create a Blob containing the text data
    const blob = new Blob([currentTableText], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Multiplication_Table_of_${number}.txt`;

    // Programmatically click the link to trigger the download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url); // Clean up the object URL

    showMessage("Download started successfully!", "success");
  });

  resetBtn.addEventListener("click", function () {
    form.reset();
    toggleOutput(false);
    messageBox.classList.add("hidden");
    currentTableText = "";
    showMessage("Inputs cleared.", "success");
  });

  // Initial check to ensure output is hidden on load
  toggleOutput(false);
})();
