class Scooter {
  static nextSerial = 1
  constructor(station) {
    this.station = station
    this.user = null
    this.serial = Scooter.nextSerial++
    this.charge = 100
    this.isBroken = false
  }
  rent(user) {
    if (user instanceof User) {
      if (this.charge > 20 && this.isBroken == false) {
        this.station = null
        this.user = user
      } else if (this.charge <= 20) {
        throw new Error("scooter needs to charge")
      } else if (this.charge > 20 && this.isBroken == true) {
        throw new Error("scooter needs repair")
      }
    }
  }
  dock(station) {
    this.station = station
    this.user = null
  }
  recharge() {
    const chargeScooter = () => { // Define the arrow function first
      if (this.charge < 100) { // Use < to check if charge is less than 100
        this.charge += 5; // Increment the charge by 5
        console.log(this.charge); // Log the current charge
        setTimeout(chargeScooter, 1000); // Call chargeScooter again after 1 second
      } else {
        console.log("Scooter is 100% charged!"); // Message when fully charged
      }
    };
  
    chargeScooter(); // Call the function to start the charging process
  }
  requestRepair() {
    const repairInterval = setInterval(() => { // Set an interval to repeat every 5 seconds
      this.isBroken = false; // Set isBroken to false
      console.log("Repair completed"); // Log the repair completed message
      
      // Clear the interval if you only want to perform the repair once
      clearInterval(repairInterval);
    }, 5000); // 5000 milliseconds (5 seconds)
  }
  
  
}

module.exports = Scooter;
