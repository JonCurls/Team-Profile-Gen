const generateEmployees = (team) => {
  team.map((teamRole) => {
    const role = teamRole.getRole();
    console.log(role);
    }
    return `
      <div>
        <h3>JONATHAN</h3>
      </div>
    `;
  });
};

const generateManager = (team) => {};

module.exports = (team) => {
  //   console.log(team);
  //   const manager = team.splice(0, 1);
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
