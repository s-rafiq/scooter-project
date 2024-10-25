const Scooter = require("./Scooter.js");
const User = require("./User.js");

class ScooterApp {
  constructor(stations = ["Manchester", "London", "Birmingham"]) {
    this.stations = {}
    this.registeredUsers = {}
  }
}

module.exports = ScooterApp;
