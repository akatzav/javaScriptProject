import { Utils } from "./utils.js";
import { Status } from "./status.js";
export class Task {
    status;
    description;
    timeStamp = Utils.currentDateString();
    constructor(description, status = Status.Uncompleted) {
        this.status = status;
        this.description = description;
    }
    toString() {
        return `description: ${this.description} status: ${this.status}`;
    }
}
