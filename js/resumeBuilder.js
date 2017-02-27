var bio = {
  "name": "Jean Will",
  "role": "Front-End Developer",
  "age": 22,
  "contacts": {
    "mobile": "(46)98806-8596",
    "email": "jcarloswill@gmail.com",
    "github": "JeanCWill",
    "location": "Pato Branco, PR, BR",
    "latLong": "-26.227270, -52.671785"
  },
  "skills": ["HTML", "CSS", "JavaScript", "Java", "SQL", "Ruby"],
  "bioPic": "images/fry.jpg",
  "welcomeMsg": "Oi, eu sou o Jean!!"
};

var education = {
  "schools" : [
    {
      "name": "UTFPR-PB",
      "location": "Pato Branco, PR, BR",
      "degree": "Técnologia em Análise e Desenvolvimento de Sistemas",
      "dates": 2012,
      "url": "http://www.utfpr.edu.br/patobranco",
      "latLong": "-26.196597, -52.689064"
    }
  ]
};

var work = {
  "jobs": [
    {
      "employer": "Softfocus",
      "title": "Full-Stack Developer",
      "dates": "Abril 2014 - Hoje",
      "description": "Atuo como desenvolvedor em uma aplicação web para gestão de cooperativas de crédito rural, cuidando da parte de manutenção do sistema, tanto back-end quanto front-end, e também na implantação de novas funcionalidades.",
      "location": "Pato Branco, PR, BR",
      "latLong": "-26.231471, -52.675122"
    }
  ]
};

var project = {
  "projects": [
    {
      "title": "FindRestaurant",
      "dates": "Julho 2016 - Agora",
      "description": "Aplicativo mobile para encontrar restaurantes próximos a sua localização.",
      "images": ["images/fry.jpg", "images/fry.jpg"]
    }
  ]
};


bio.displayBio = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

  $("#header").prepend(formattedWelcomeMsg);
  $("#header").prepend(formattedPic);
  $("#header").prepend(HTMLcontactsStart);
  $("#contacts").prepend(formattedLocation);
  $("#contacts").prepend(formattedGithub);
  $("#contacts").prepend(formattedEmail);
  $("#contacts").prepend(formattedMobile);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
}

bio.displaySkills = function() {
  if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkills);
    }
  }
}

work.display = function() {
  if (work.jobs.length > 0) {

    for (var i = 0; i < work.jobs.length; i++) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

      var formattedWork = formattedEmployer + formattedTitle + formattedDates + formattedDescription;

      $(".work-entry:last").append(formattedWork);
    }
  }
}

project.display = function() {
  if (project.projects.length > 0) {

    for (var i = 0; i < project.projects.length; i++) {
      $("#projects").append(HTMLprojectStart);

      var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.projects[i].title);
      var formattedprojectDates = HTMLprojectDates.replace("%data%", project.projects[i].dates);
      var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.projects[i].description);

      var formattedProject = formattedprojectTitle + formattedprojectDates + formattedprojectDescription;

      if (project.projects[i].images.length > 0) {
        for (var j = 0; j < project.projects[i].images.length; j++) {
          var formattedprojectImage = HTMLprojectImage.replace("%data%", project.projects[i].images[j]);
          formattedProject = formattedProject + formattedprojectImage;
        }
      }

      $(".project-entry:last").append(formattedProject);
    }
  }
}

function inName(nameStr) {
  var nameArray = nameStr.trim().split(" ");
  var nameReturn = nameArray[0].slice(0,1).toUpperCase() +
    nameArray[0].slice(1).toLowerCase();

  for (i = 1; i < nameArray.length; i++) {
    nameReturn = nameReturn + " " + nameArray[i].toUpperCase();
  }

  return nameReturn;
}

bio.displayBio();
bio.displaySkills();
work.display();
project.display();
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
