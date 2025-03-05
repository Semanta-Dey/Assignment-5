function updateDate() {
    const now = new Date();

    const optionsDay = { weekday: "short" }; // Example: "Wed"
    const optionsDate = { month: "short", day: "2-digit", year: "numeric" }; // Example: "Jul 28 2025"

    document.getElementById("day").innerText = now.toLocaleDateString("en-US", optionsDay) + ",";
    document.getElementById("full-date").innerText = now.toLocaleDateString("en-US", optionsDate);
}

document.addEventListener("DOMContentLoaded", updateDate);