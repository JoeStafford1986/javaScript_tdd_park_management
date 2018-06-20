const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}

Park.prototype.getDinosaursCount = function () {
  return this.dinosaurs.length;
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function (dinosaur) {
  let dinosaurIndex;
  for (let i = 0; i < this.getDinosaursCount(); i++) {
    if (dinosaur === this.dinosaurs[i]) {
      dinosaurIndex = i;
    }
  }
  if (dinosaurIndex !== null) {
    this.dinosaurs.splice(dinosaurIndex, 1);
  }
}

Park.prototype.findMostVisitedDinosaur = function () {
  let mostVisited = this.dinosaurs[0];
  for (let currentDinosaur of this.dinosaurs) {
    if (mostVisited !== null && currentDinosaur.guestsAttractedPerDay > mostVisited.guestsAttractedPerDay) {
      mostVisited = currentDinosaur;
    }
  }
  return mostVisited;
}

Park.prototype.findAllBySpecies = function (species) {
  let speciesOfDinosaur = [];
  for (let currentDinosaur of this.dinosaurs) {
    if (currentDinosaur.species === species) {
      speciesOfDinosaur.push(currentDinosaur);
    }
  }
  return speciesOfDinosaur;
}

Park.prototype.removeAllBySpecies = function (species) {
  const dinosaursToRemove = this.findAllBySpecies(species);
  for (let currentDinosaur of dinosaursToRemove) {
    this.removeDinosaur(currentDinosaur);
  }
}

module.exports = Park;
