const generateEmployees = (team) => {
  const employeeArr = team.map((employee) => {
    // console.log(employee.name);
    return `<section>
            <h3>built with: love</h3>
            </section>
            `;
  });
};

module.exports = (team) => {
  const manager = team.splice(0, 1);
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
      <h1>${manager[0].name}</h1>
      <h2>Employee ID: ${manager[0].id}</h2>
      <h2><a href="mailto: ${manager[0].email}" "target=_blank">Email: ${
    manager[0].email
  }</a></h2>
      <h2>Office Number: ${manager[0].officeNumber}</h2>
      ${generateEmployees(team)}
      </main>
    </body>
    </html>
    `;
};
