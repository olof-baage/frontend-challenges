// all elements
const btnWorkflows = document.getElementById("btn-workflows");
const btnCurrency = document.getElementById("btn-currency");
const list__submenuWorkflows = document.getElementById("list__submenu-workflows");
const list__submenuCurrency = document.getElementById("list__submenu-currency");

// functions
function openSubmenuWorkflows() {
    list__submenuWorkflows.classList.toggle("ul__li__ul--invisbile");
}

function openSubmenuCurrency() {
    list__submenuCurrency.classList.toggle("ul__li__ul--invisbile");
}

// event listeners
btnWorkflows.addEventListener('click', openSubmenuWorkflows, false);
btnCurrency.addEventListener('click', openSubmenuCurrency, false);