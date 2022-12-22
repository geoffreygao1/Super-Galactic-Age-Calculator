import Age from './../src/age.js';

describe('Age', () => {
  let testAge;

  beforeEach(() => {
    testAge = new Age();
    testAge.birthday = "1994-07-25";
    testAge.todaysDate = "2022-12-22"
  });

  test('should create an Age object with a 3 properties: birthday, todays date, and a daysOld property', () => {
    expect(testAge.birthday).toEqual('1994-07-25');
    expect(testAge.todaysDate).toEqual('2022-12-22');
    expect(testAge.daysOld).toEqual(0);
  });

  test('should calculate the number of days old a person is based on their birthday', () => {
    testAge.findDaysOld();
    expect(testAge.daysOld).toEqual(10377);
  });

  test('should return the number of years old a person is based on the chosen planet', () => {
    expect(testAge.findEquivalentYears('Mercury')).toEqual(117);
    expect(testAge.findEquivalentYears('Venus')).toEqual(46);
    expect(testAge.findEquivalentYears('Earth')).toEqual(28);
    expect(testAge.findEquivalentYears('Mars')).toEqual(15);
    expect(testAge.findEquivalentYears('Jupiter')).toEqual(2);
  });

});