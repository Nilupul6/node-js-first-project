const event = require('events');


module.exports = class extends event.EventEmitter{
    constructor(){
        super();
    }
}