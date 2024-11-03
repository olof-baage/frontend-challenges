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

// event listeners
btnWorkflows.addEventListener('click', toggleListWorkflows, false);
btnCurrencies.addEventListener('click', toggleListCurrencies, false);