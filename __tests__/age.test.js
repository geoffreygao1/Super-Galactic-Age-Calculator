import Age from './../src/age.js';

describe('Age', () => {
  let testAge;

  beforeEach(() => {
    testAge = new Age();
    testAge.birthday = "1994-07-25";
    testAge.todaysDate = "2022-12-22";
  });

  test('should create an Age object with a 3 properties: birthday, todays date, and a daysOld property', () => {
    expect(testAge.birthday).toEqual('1994-07-25');
    expect(testAge.todaysDate).toEqual('2022-12-22');
    expect(testAge.daysOld).toEqual(0);
  });

  test('should calculate the number of days old a person is today based on their birthday', () => {
    testAge.findDaysOld();
    expect(testAge.daysOld).toEqual(10377);
  });

  test('should return the number of years old a person is based on the chosen planet', () => {
    testAge.findDaysOld();
    expect(testAge.findEquivalentYears('Mercury')).toEqual(117);
    expect(testAge.findEquivalentYears('Venus')).toEqual(46);
    expect(testAge.findEquivalentYears('Earth')).toEqual(28);
    expect(testAge.findEquivalentYears('Mars')).toEqual(15);
    expect(testAge.findEquivalentYears('Jupiter')).toEqual(2);
  });

  test('should return the whole number of planet years old a person is from an input age', () => {
    testAge.findDaysOld();
    expect(testAge.findYearsOldSince(15, 'Earth')).toEqual(13);
    expect(testAge.findYearsOldSince(15, 'Mercury')).toEqual(55);
    expect(testAge.findYearsOldSince(15, 'Venus')).toEqual(21);
    expect(testAge.findYearsOldSince(15, 'Mars')).toEqual(7);
    expect(testAge.findYearsOldSince(15, 'Jupiter')).toEqual(1);
  });

  test('should return the whole number of planet years there is until an input earth age', () => {
    testAge.findDaysOld();
    expect(testAge.findYearsUntil(33, 'Earth')).toEqual(4);
    expect(testAge.findYearsUntil(33, 'Mercury')).toEqual(19);
    expect(testAge.findYearsUntil(33, 'Venus')).toEqual(7);
    expect(testAge.findYearsUntil(33, 'Mars')).toEqual(2);
    expect(testAge.findYearsUntil(33, 'Jupiter')).toEqual(0);
  });

  test('should return the number of days until the users next birthday on an input planet', () => {
    testAge.findDaysOld();
    expect(testAge.daysUntilBday('Earth')).toEqual(50);
  })

});