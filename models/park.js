const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}

Park.prototype.getDinosaursCount = function () {
  return this.dinosaurs.length;
}

module.exports = Park;
