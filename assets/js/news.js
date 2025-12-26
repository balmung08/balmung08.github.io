document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".news-wrapper");
    if (!wrapper) return;

    const ul = wrapper.querySelector("ul");
    const items = Array.from(ul.children);
    const visibleCount = parseInt(wrapper.dataset.visibleCount || "10", 10);
    const toggleBtn = document.querySelector(".news-toggle");

    if (items.length <= visibleCount) {
        toggleBtn.style.display = "none";
        return;
    }

    items.slice(visibleCount).forEach(li => {
        li.style.display = "none";
    });

    toggleBtn.addEventListener("click", function () {
        const expanded = toggleBtn.classList.toggle("expanded");

        items.slice(visibleCount).forEach(li => {
            li.style.display = expanded ? "list-item" : "none";
        });

        toggleBtn.textContent = expanded
            ? "Show less ↑"
            : "Show more ↓";
    });
});