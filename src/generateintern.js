let nameIntern = require('../index.js')

const generateInternHtml = function (internObj) {

    return `

    <div class="col">
    <div class="card m-2" style="width: 18rem;">
        <div class="icon-space d-flex  justify-content-center int-div">
        <img src="./images/intern.png" class="icon-2 card-img-top" alt="...">
        </div>
        <div class="card-body int-div">
            <h4 class="card-title mb-3">${internObj.name}</h4>
            <p class="card-text lead">Intern</p>
        </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item py-2">Employee ID: ${internObj.id}</li>
                <li class="list-group-item py-2">e-mail <a href="mailto:">${internObj.email}</a></li>
                <li class="list-group-item py-2">School: ${internObj.school}</li>
            </ul>
    </div>
</div>
    `
}

module.exports = generateInternHtml