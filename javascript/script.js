function updateDate() {
    const present = new Date();

    const optionsDay = { weekday: "short" }; 
    const optionsDate = { month: "short", day: "2-digit", year: "numeric" }; 
    document.getElementById("day").innerText = present.toLocaleDateString("en-US", optionsDay) + ",";
    document.getElementById("full-date").innerText = present.toLocaleDateString("en-US", optionsDate);
}

document.addEventListener("DOMContentLoaded", updateDate);