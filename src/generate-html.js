// Filters input and send to each function for their column to get created
const generateEmployees = (team) => {
  return team
    .map((teamRole) => {
      const role = teamRole.getRole();
      switch (role) {
        case "Manager":
          return generateManager(teamRole);
          break;
        case "Engineer":
          return generateEngineer(teamRole);
          break;
        case "Intern":
          return generateIntern(teamRole);
          break;
      }
    })
    .join(""); // Removes "," from HTML
};

// Creates Manager column
const generateManager = (role) => {
  // console.log(role.name, role.id, role.email, role.officeNumber);
  return `
  <div class="column is-full has-text-centered">
  <div class= "media-content">
  <p class="title is-4">${role.role}</p>
  <p class="subtitle is-6">Employee Name: ${role.name}</br>
  Employee ID: ${role.id}</br>
  Employee Email: <a href= "mailto:${role.email}">${role.email}</a></br>
  Office Number: ${role.officeNumber}</p>
  </div>
  </div>
  `;
};

// Creates Engineer columns
const generateEngineer = (role) => {
  // console.log(role.name, role.id, role.email, role.github);
  return `
  <div class="column has-text-centered">
  <div class= "media-content">
  <p class="title is-4">${role.role}</p>
  <p class="subtitle is-6">Employee Name: ${role.name}</br>
  Employee ID: ${role.id}</br>
  Employee Email: <a href= "mailto:${role.email}">${role.email}</a></br>
  Github: <a href="https://www.github.com/${role.github}" target="_blank">${role.github}</a></p>
  </div>
  </div>
  `;
};

// Creates Intern columns
const generateIntern = (role) => {
  // console.log(role.name, role.id, role.email, role.school);
  return `
  <div class="column has-text-centered">
  <div class= "media-content">
  <p class="title is-4">${role.role}</p>
  <p class="subtitle is-6">Employee Name: ${role.name}</br>
  Employee ID: ${role.id}</br>
  Employee Email: <a href= "mailto:${role.email}">${role.email}</a></br>
  School: ${role.school}</p>
  </div>
  </div>
  `;
};

// Main HTML body
module.exports = (team) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css"/>
      <title>Team Profile</title>
    </head>
  
    <body>
    <section class="hero is-link">
  <div class="hero-body">
    <p class="title has-text-centered">
      My Team
    </p>
  </div>
</section>
    <main>
    <div class="columns is-multiline">
      ${generateEmployees(team)}
      </div>
      </main>
    </body>
    </html>
    `;
};
