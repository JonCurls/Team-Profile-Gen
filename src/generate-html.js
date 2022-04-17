const generateEmployees = (team) => {
  team.map((teamRole) => {
    const role = teamRole.getRole();
    switch (role) {
      case "manager":
        return generateManager(teamRole);
        break;
      case "engineer":
        return generateEngineer(teamRole);
        break;
      case "intern":
        return generateIntern(teamRole);
        break;
    }
  });
};

const generateManager = (role) => {
  console.log(role.name);
  console.log(role.id);
  console.log(role.email);
  console.log(role.officeNumber);
};

const generateEngineer = (role) => {
  console.log(role.name);
  console.log(role.id);
  console.log(role.email);
  console.log(role.github);
};

const generateIntern = (role) => {
  console.log(role.name);
  console.log(role.id);
  console.log(role.email);
  console.log(role.school);
};

module.exports = (team) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
    </head>
  
    <body>
    <main>
      ${generateEmployees(team)}
      </main>
    </body>
    </html>
    `;
};
