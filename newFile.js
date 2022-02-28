import * as fs from "fs";
import { faker } from "./node_modules/@faker-js/faker";

const title = "List of Name";

/**
 *
 * @param {number} number number how many names will create
 * @returns  string with random numbers
 */
const createRandomNames = (number) => {
  let listName = "";
  for (let index = 0; index < number; index++) {
    listName += ` ${faker.name.findName()}. \n`;
  }
  return listName;
};

fs.writeFileSync(`${title}.txt`, createRandomNames(100));

console.log(`file ${title}.txt created`);
