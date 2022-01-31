let mainContainer = document.getElementById("clientData");

let url = "../OpenJsonData.json";

fetchData().then(function (data) {
    console.log(data);
    appendData(data);
})

async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function appendData(json) {
    mainContainer.innerText = JSON.stringify(json);
}