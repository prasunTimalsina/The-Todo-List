"use strict";
import nid from "nid";
const mynid = nid({ length: 4 });
export default class Project {
  constructor(title) {
    this.projectId = mynid();
    this.title = title;
  }

  getProjectId() {
    return this.projectId;
  }

  getProjectTitle() {
    return this.title;
  }
}
