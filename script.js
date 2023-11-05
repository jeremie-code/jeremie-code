// Funciton to get data per languages from Json.
function displayContent(language, config) {
    displayContentDescription(language, config);
    displayContentExperience(language, config);
    displayContentSkills(language, config);
    displayContentEducation(language, config);
    displayContentLanguages(language, config);
    displayContentHobbies(language, config);
};

// Description sections.
function displayContentDescription(language, config) {
    // document.getElementById('name').innerText = config.name[language];
    document.getElementById('intro').innerText = config.intro[language];
    document.getElementById('presentation').innerText = config.presentation[language];
};

// Experience sections.
function displayContentExperience(language, config) {
    var experienceList = '';
    config.experience[language].forEach(function (exp) {
        experienceList += '<li class=""><strong>' + exp.position + '</strong> - ' + '<em>' + exp.duration + ' at ' + exp.company + '</em>' + '<ul>';
        exp.description.forEach(function (desc) {
            experienceList += '<li>' + desc + '</li>';
        });
        experienceList += '</ul></li>';
    });
    document.getElementById('experienceList').innerHTML = experienceList;
};

// Skills sections.
function displayContentSkills(language, config) {
    var skillsList = '';
    config.skills[language].forEach(function (ski) {
        skillsList += '<li class=""><strong>' + ski.knowlegde + '</strong> - ' + '<em>' + ski.level + '</em>' + '<ul>';
        ski.description.forEach(function (desc) {
            skillsList += '<li>' + desc + '</li>';
        });
        skillsList += '</ul></li>';
    });
    document.getElementById('skillsList').innerHTML = skillsList;
};

// Education sections.
function displayContentEducation(language, config) {
    var educationList = '';
    config.education[language].forEach(function (edu) {
        educationList += '<li class=""><strong>' + edu.degree + '</strong>, ' + '<em>' + edu.duration + ' at ' + edu.university + '</em>' + '</li>';
    });
    document.getElementById('educationList').innerHTML = educationList;
};

// Languages sections.
function displayContentLanguages(language, config) {
    var languageList = '';
    config.languages[language].forEach(function (lang) {
        languageList += '<li class=""><strong>' + lang.language + '</strong>: ' + lang.level + '</li>';
    });
    document.getElementById('languagesList').innerHTML = languageList;
};

// Hobbies sections.
function displayContentHobbies(language, config) {
    var hobbiesList = '';
    config.hobbies[language].forEach(function (hobby) {
        hobbiesList += '<li class=""><strong>' + hobby.name + '</strong>: ' + hobby.description + '</li>';
    });
    document.getElementById('hobbiesList').innerHTML = hobbiesList;
};

// Function to switch to French
function switchToFrench() {
    fetch('./data.json')
        .then(response => response.json())
        .then(data => displayContent('fr', data));
    unSelectElement("flagEn");

    alert("Bientot disponible, Travaux en cours!" + "\n" + "Soon available, work in progress!");
    switchToEnglish();
}

// Function to switch to English
function switchToEnglish() {
    fetch('./data.json')
        .then(response => response.json())
        .then(data => displayContent('en', data));
    unSelectElement("flagFr");
}

function unSelectElement(id) {
    const elements = document.querySelectorAll('.unselected');
    elements.forEach(element => {
        element.classList.remove('unselected');
    });
    elementToSelect = document.getElementById(id);
    elementToSelect.classList.add('unselected');
}

// Display content in English by default
switchToEnglish();
