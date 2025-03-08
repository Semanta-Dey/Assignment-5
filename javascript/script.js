// Real-Time Update

function updateDate() {
    const present = new Date();
    const optionsDay = { weekday: "short" }; 
    const optionsDate = { month: "short", day: "2-digit", year: "numeric" }; 
    document.getElementById("day").innerText = present.toLocaleDateString("en-US", optionsDay) + ",";
    document.getElementById("full-date").innerText = present.toLocaleDateString("en-US", optionsDate);
}

document.addEventListener("DOMContentLoaded", updateDate);

// Completed Button Function

document.addEventListener("DOMContentLoaded", function() {
    // the message box empty at the start
    document.getElementById("message").innerHTML = "";
});

document.querySelectorAll(".groupA").forEach(function(button) {
    button.addEventListener("click", function(){
        const remainTask = parseInt(document.getElementById("task-number").innerText);
        if (remainTask > 0) {
            alert("Board updated Successfully");
            const remainingTask = Math.max(0, remainTask - 1);
            const completedTask = parseInt(document.getElementById("task-completed-num").innerText) + 1;
            document.getElementById("task-number").innerText = String(remainingTask).padStart(2, '0');
            document.getElementById("task-completed-num").innerText = completedTask;

            //Disable the  button when it is clicked
            this.disabled = true;
            let taskName = this.closest(".h-52").querySelector(".taskName").innerText;
            let currentTime = new Date().toLocaleTimeString();
            let messageBox = document.getElementById("message");
            let newMessage = document.createElement("p");
            newMessage.classList.add("mb-3", "p-2","rounded-md","bg-[rgb(220,236,255)]");
            newMessage.innerText = `You have completed the task ${taskName} at ${currentTime}`;
            messageBox.appendChild(newMessage);
            if (remainingTask === 0) {
                alert("Congrates!!! You have completed all the current task.");
            }
        }
    });
});


// document.addEventListener("DOMContentLoaded", function() {
//     // the message box empty at the start
//     document.getElementById("message").innerHTML = "";
// });

// document.querySelectorAll(".groupA").forEach(function(button) {
//     button.addEventListener("click", function(){
//         const remainTask = parseInt(document.getElementById("task-number").innerText);
//         if (remainTask > 0) {
//             // alert("Board updated Successfully");
//             const remainingTask = Math.max(0, remainTask - 1);
//             const completedTask = parseInt(document.getElementById("task-completed-num").innerText) + 1;
//             document.getElementById("task-number").innerText = String(remainingTask).padStart(2, '0');
//             document.getElementById("task-completed-num").innerText = completedTask;

//             // Disable the button when it is clicked
//             this.disabled = true;
//             let taskName = this.closest(".h-52").querySelector(".taskName").innerText;
//             let currentTime = new Date().toLocaleTimeString();
//             let messageBox = document.getElementById("message");
//             let newMessage = document.createElement("p");
//             newMessage.classList.add("mb-3", "p-2", "rounded-md", "bg-[rgb(220,236,255)]");
//             newMessage.innerText = `You have completed the task ${taskName} at ${currentTime}`;
//             messageBox.appendChild(newMessage);

//             // Check if all tasks are completed
//             if (remainingTask === 0) {
//                 alert("Congrats! All tasks have been completed.");
//             }
//         }
//     });
// });



