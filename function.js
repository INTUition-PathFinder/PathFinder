function nextPage(){
    window.location = "index.html";
}

function lastPage(){
    window.location = "table.html";
}

function saveIncomeName() {
    let userRef = document.getElementById("username");
    let incomeRef = document.getElementById("income");
    


}

function updateData(key, data)
{
    let theData = JSON.stringify(data);
    localStorage.setItem(key, theData);
}