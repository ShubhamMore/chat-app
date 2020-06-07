// Bring in the room class
const Namespace = require('./classes/namespace');
const Room = require('./classes/room');
const images = require('./images');
// Set up the namespaces
let namespaces = [];
let Institute1NS = new Namespace(0, 'Institute-1', images.image1, '/Institute-1');

let Institute2NS = new Namespace(1, 'Institute-2', images.image2, '/Institute-2');

namespaces.push(Institute1NS, Institute2NS);

// Make the main room and add it to rooms. it will ALWAYS be 0
Institute1NS.addRoom(new Room(0, 'Class 1', 'Institute-1'));
Institute1NS.addRoom(new Room(1, 'Class 2', 'Institute-1'));
Institute1NS.addRoom(new Room(2, 'Class 3', 'Institute-1'));

Institute2NS.addRoom(new Room(0, 'Class 1', 'Institute-2'));
Institute2NS.addRoom(new Room(1, 'Class 2', 'Institute-2'));
Institute2NS.addRoom(new Room(2, 'Class 3', 'Institute-2'));
Institute2NS.addRoom(new Room(3, 'Class 4', 'Institute-2'));

module.exports = namespaces;
