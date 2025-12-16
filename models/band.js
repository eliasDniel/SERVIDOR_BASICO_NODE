const { randomUUID } = require('crypto');

class Band {
    constructor(name = 'no-name') {
        this.id = randomUUID();
        this.name = name;
        this.votes = 0;
    }
}

module.exports = Band;

