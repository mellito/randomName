import * as fs from "fs";
import { faker } from "./node_modules/@faker-js/faker";

const title = "List of Name";

/**
 *
 * @param {number} number number how many names will create
 * @returns  string with random name
 */
const createRandomNames = (number) => {
  try {
    if (!isNaN(number) && number > 0) {
      let listName = "";
      for (let index = 0; index < number; index++) {
        listName += ` ${faker.name.findName()}. \n`;
      }

      return listName;
    } else {
      throw "debes ingresar un numero positivo";
    }
  } catch (error) {
    console.log(error);
  }
};

fs.writeFileSync(`${title}.txt`, createRandomNames(1000));

console.log(`file ${title}.txt created`);
