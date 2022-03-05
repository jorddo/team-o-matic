function generateHTML(data) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team-O-Matic</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
  </head>

  <header>
    <h1>Team-O-Matic</h1>
  </header>

  <body>
    <main>
      <!-- beginning of cards -->
      <div class="row row-cols-1 row-cols-md-3 g-4">
        ${data.employees
          .map((employee) => {
            let addtlInfo;

            if (employee.office)
              addtlInfo = `Office Number: ${employee.office}`;
            if (employee.github) addtlInfo = `Github: ${employee.github}`;
            if (employee.college) addtlInfo = `College: ${employee.college}`;
            return `
            <div class='col'>
              <div class='card h-100'>
                <div class='card-body background'>
                  <h5 class='card-title'>${employee.name}</h5>
                  <p class='card-text'>${employee.employeeType}</p>
                  <div class='card'>
                    <div class='card-body'>
                      <div class='card'>
                        <div class='card-body'>ID: ${employee.id}</div>
                      </div>
                      <div class='card'>
                        <div class='card-body'>Email: ${employee.email}</div>
                      </div>
                      <div class='card'>
                        <div class='card-body'>
                          ${addtlInfo}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
          })
          .join('')}
      </div>
    </main>
  </body>
</html>
`;
}

module.exports = generateHTML;
