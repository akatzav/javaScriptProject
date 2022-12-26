import { Utils } from "./utils.js";
import { Status } from "./status.js";

export class Task {
    status: Status;
    description: string;
    timeStamp = Utils.currentDateString();

    constructor( description: string,status: Status = Status.Uncompleted) {
        this.status = status;
        this.description = description;
    }

    toString() {
        return `description: ${this.description} status: ${this.status}`;
    }
}