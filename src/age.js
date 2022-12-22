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
    let dayDifference = timeDifference / (1000 * 3600 * 24);
    this.daysOld = dayDifference;
  }

  findEquivalentYears(planet) {
    const yearsKey = {
      Mercury: 88,
      Venus: 225,
      Earth: 365,
      Mars: 687,
      Jupiter: 4333
    };
    this.findDaysOld();
    return Math.floor(this.daysOld / yearsKey[planet]);
  }
}