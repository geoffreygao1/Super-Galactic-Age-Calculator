export default class Age {
  constructor() {
    this.birthday = '';
    this.todaysDate = '';
    this.daysOld = 0;
  }

  findDaysOld() {
    let birthday = new Date(this.birthday);
    let todaysDate = new Date(this.todaysDate);
    let timeDifference = todaysDate.getTime() - birthday.getTime();
    //divides the time difference (in ms) by number of ms in a day
    let dayDifference = timeDifference / (1000 * 3600 * 24);
    this.daysOld = dayDifference;
  }

  findEquivalentYears(planet) {
    // Legend for how many earth days there are in a year on each planet
    const yearsKey = {
      Mercury: 87.97,
      Venus: 224.7,
      Earth: 365.26,
      Mars: 687,
      Jupiter: 4331.98
    };
    return Math.floor(this.daysOld / yearsKey[planet]);
  }

  findYearsOldSince(oldAge, planet) {
    let birthday = new Date(this.birthday);
    var year = birthday.getFullYear();
    var month = birthday.getMonth();
    var day = birthday.getDate();
    let newBirthday = new Date(year + oldAge, month, day);
    let todaysDate = new Date(this.todaysDate);
    let timeDifference = todaysDate.getTime() - newBirthday.getTime();
    let dayDifference = timeDifference / (1000 * 3600 * 24);
    this.daysOld = dayDifference;
    return this.findEquivalentYears(planet);
  }

  findYearsUntil(newAge, planet) {
    let birthday = new Date(this.birthday);
    var year = birthday.getFullYear();
    var month = birthday.getMonth();
    var day = birthday.getDate();
    let newBirthday = new Date(year + newAge, month, day);
    let todaysDate = new Date(this.todaysDate);
    let timeDifference = newBirthday.getTime() - todaysDate.getTime();
    let dayDifference = timeDifference / (1000 * 3600 * 24);
    this.daysOld = dayDifference;
    return this.findEquivalentYears(planet);
  }
}