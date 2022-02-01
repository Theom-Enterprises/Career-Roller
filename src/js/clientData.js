let mainContainer = document.getElementById("clientData")

let url = "src/data/OpenJsonData.json"

function rollCareer() {
    fetchData().then(function (data) {
        appendData(data)
    })
}

async function fetchData() {
    const response = await fetch(url)
    if (response.ok) {
        return await response.json()
    } else {
        mainContainer.innerHTML += "<div class=\"alert alert-danger\" role=\"alert\">No jobs have been found.</div>"
    }
}

function appendData(json) {
    let randomCareer = Math.floor(Math.random() * (json.length - 1) + 1);

    mainContainer.innerHTML = "<div class=\"alert alert-success\" role=\"alert\">A job has been found.</div>"
    mainContainer.innerHTML += "<h1>" + json[randomCareer].Titel + "</h1>"
    mainContainer.innerHTML += "Place of work: <span style='font-weight: bold'>" + json[randomCareer].Place + "</span><br><br>"
    mainContainer.innerHTML += json[randomCareer].Description + "<br>"
}