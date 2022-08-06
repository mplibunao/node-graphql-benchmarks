const faker = require("faker");
const fs = require("fs");

// that way data is consistent
faker.seed(4321);

function genData() {
  const authors = [];
  for (let i = 0; i < 20; i++) {
    const books = [];

    for (let k = 0; k < 3; k++) {
      books.push({
        id: faker.datatype.uuid(),
        name: faker.internet.domainName(),
        numPages: faker.datatype.number(),
      });
    }

    authors.push({
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      company: faker.company.bs(),
      books,
    });
  }

  return JSON.stringify(authors);
}

const data = genData();

fs.writeFileSync("data.js", "module.exports.data = " + data, "utf8");