import { nanoid } from "nanoid"

export default class WalkObj {
  constructor(date, range) {
    this.id = nanoid();
    this.date = date;
    this.range = range;
  }
}