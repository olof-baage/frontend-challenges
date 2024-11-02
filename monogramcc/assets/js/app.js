// all elements
const btnWorkflows = document.getElementById("btn--workflows");
const btnCurrencies = document.getElementById("btn--currencies");
const listWorkflows = document.getElementById("list--workflows");
const listCurrencies = document.getElementById("list--currencies");

// functions
function toggleListWorkflows() {
    listWorkflows.classList.toggle("ul--hidden");
}

function toggleListCurrencies() {
    listCurrencies.classList.toggle("ul--hidden");
}

function toggleSelectedCurrency() {
    /*
    remove class li--selected from item that was selected before
    add class to new selected item
    change parent node
    */
}

// event listeners
btnWorkflows.addEventListener('click', toggleListWorkflows, false);
btnCurrencies.addEventListener('click', toggleListCurrencies, false);