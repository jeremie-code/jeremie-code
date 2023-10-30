// Funciton to get data per languages from Json.
function displayContent(language, config) {

    // Description sections.
    // document.getElementById('name').innerText = config.name[language];
    document.getElementById('intro').innerText = config.intro[language];
    document.getElementById('presentation').innerText = config.presentation[language];

    // Experience sections.
    var experienceList = '';
    config.experience[language].forEach(function (exp) {
        experienceList += '<li class=""><strong>' + exp.position + '</strong> - ' + exp.duration + ' at ' + exp.company + '<ul>';
        exp.description.forEach(function (desc) {
            experienceList += '<li>' + desc + '</li>';
        });
        experienceList += '</ul></li>';
    });
    document.getElementById('experienceList').innerHTML = experienceList;

    // Skills sections.
    var skillsList = '';
    config.skills[language].forEach(function (ski) {
        skillsList += '<li class=""><strong>' + ski.knowlegde + '</strong> - ' + ski.level + '<ul>';
        ski.description.forEach(function (desc) {
            skillsList += '<li>' + desc + '</li>';
        });
        skillsList += '</ul></li>';
    });
    document.getElementById('skillsList').innerHTML = skillsList;

    // Education sections.
    var educationList = '';
    config.education[language].forEach(function (edu) {
        educationList += '<li class=""><strong>' + edu.degree + '</strong>, ' + edu.duration + ' at ' + edu.university + '</li>';
    });
    document.getElementById('educationList').innerHTML = educationList;

    // Languages sections.
    var languageList = '';
    config.languages[language].forEach(function (lang) {
        languageList += '<li class=""><strong>' + lang.language + '</strong>: ' + lang.level + '</li>';
    });
    document.getElementById('languagesList').innerHTML = languageList;

    // Hobbies sections.
    var hobbiesList = '';
    config.hobbies[language].forEach(function (hobby) {
        hobbiesList += '<li class=""><strong>' + hobby.name + '</strong>: ' + hobby.description + '</li>';
    });
    document.getElementById('hobbiesList').innerHTML = hobbiesList;
}

// Function to switch to French
function switchToFrench() {
    alert("Bientot disponible, Travaux en cours!" + "\n" + "Soon available, work in progress!");
    switchToEnglish();
    // fetch('./data.json')
    //     .then(response => response.json())
    //     .then(data => displayContent('fr', data));
}

// Function to switch to English
function switchToEnglish() {
    fetch('./data.json')
        .then(response => response.json())
        .then(data => displayContent('en', data));
}

// Display content in English by default
fetch('./data.json')
    .then(response => response.json())
    .then(data => displayContent('en', data));
