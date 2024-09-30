const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addtask() {
    if (inputBox.value === '') {
        alert("Please enter a task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Add the delete button (span)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for multiplication (×) symbol
        span.classList.add("close"); // You can style this class in your CSS
        li.appendChild(span);
    }

    // Clear input field after adding task
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e) {
    // Toggle checked class when clicking on an LI
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    // Remove task when clicking on the span (close button)
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);
