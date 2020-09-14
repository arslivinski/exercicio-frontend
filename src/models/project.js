class Project {
  constructor(id, title, subtitle, description, picture, url) {
    /** @type {number} */
    this.id = id;

    /** @type {string} */
    this.title = title;

    /** @type {string} */
    this.subtitle = subtitle;

    /** @type {string} */
    this.description = description;

    /** @type {string} */
    this.picture = picture;

    /** @type {string} */
    this.url = url;
  }
}

export { Project };
