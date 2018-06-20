const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;

  beforeEach(function () {
    park = new Park('Jurassic Park', 100);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50)
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 20)
    dinosaur3 = new Dinosaur('brontosaurus', 'herbivore', 10)
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should have a collection of dinosaurs that starts empty', function () {
    const actual = park.getDinosaursCount();
    assert.deepStrictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur1);
    const actual = park.getDinosaursCount();
    assert.strictEqual(actual, 1);
  });

  it('should be able to add a dinosaur to its collection and return same collection', function () {
    park.addDinosaur(dinosaur1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur1);
    park.removeDinosaur(dinosaur1);
    const actual = park.getDinosaursCount();
    assert.strictEqual(actual, 0);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    actual = park.findMostVisitedDinosaur();
    assert.strictEqual(actual, dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.findAllBySpecies('t-rex');
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur1]);
  });

  it('should be able to remove all dinosaurs of a particular species');

});
