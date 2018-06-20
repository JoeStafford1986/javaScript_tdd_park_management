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
  if (dinosaurIndex != undefined) {
    this.dinosaurs.splice(dinosaurIndex, 1);
  }
}

module.exports = Park;
