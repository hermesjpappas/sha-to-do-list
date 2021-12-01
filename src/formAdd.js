const addButton = document.getElementById("add-project");
const cancelButton = document.getElementById("form-cancel");
const popUp = document.getElementById("pop-up");


function buttonListeners() {
    addButton.addEventListener("click", (e) => {
        popUp.style.display = "flex";
    });

    cancelButton.addEventListener("click", (e) => {
        popUp.style.display = "none";
    });
}

export { buttonListeners };