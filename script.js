document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const circle = document.createElement("span");
      circle.classList.add("ripple");

      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      circle.style.left = x + "px";
      circle.style.top = y + "px";
      circle.style.width = circle.style.height = Math.max(rect.width, rect.height) + "px";

      btn.appendChild(circle);

      setTimeout(() => {
        circle.remove();
      }, 600);
    });
  });
});

