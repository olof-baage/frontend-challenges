// all elements
const btnWorkflows = document.getElementById("btn-workflows");
const list__submenuWorkflows = document.getElementById("list__submenuW-workflows");

// functions
function openSubmenuWorkflows() {
    list__submenuWorkflows.classList.toggle("ul__li__ul--invisbile");
}

// event listeners
btnWorkflows.addEventListener('click', openSubmenuWorkflows, false);