import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    name: "All"
  },
  {
    _id: uuid(),
    name: "Classics"
  },
  {
    _id: uuid(),
    name: "Tutorials"
  }
];
