let mainContainer = document.getElementById("dummyData");

let url = "https://jsonplaceholder.typicode.com/todos/1";
fetch(url).then(function (response) {
    return response.json();
}).then(function (json) {
    appendData(json);
});

function appendData(json) {
    mainContainer.innerHTML = JSON.stringify(json);
}