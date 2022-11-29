let nameEngineer = require('../index.js');
const generateEngineerHtml = function (engineerObj) {

    return `

    <div class="col">
    <div class="card m-2" style="width: 18rem;">
        <div class="icon-space d-flex justify-content-center eng-div">
        <img src="./images/engineer.png" class="icon-2 card-img-top" alt="...">
        </div>
        <div class="card-body eng-div">
            <h4 class="card-title mb-3">${engineerObj.name}</h4>
            <p class="card-text lead">Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item py-2">Employee ID: ${engineerObj.id}</li>
            <li class="list-group-item py-2">Github: <a href="https://github.com/${engineerObj.github}"><small>https://github.com/${engineerObj.github}</small></a></li>
        </ul>
    </div>
</div>
`
}


module.exports = generateEngineerHtml
