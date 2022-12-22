import Age from './../src/age.js';

describe('Age', () => {
  let testAge;

  beforeEach(() => {
    testAge = new Age();
  });

  test('should create an Age object with a 3 properties: birthday, todays date, and a daysOld property', () => {
    expect(testAge.birthday).toEqual('');
    expect(testAge.todaysDate).toEqual('');
    expect(testAge.daysOld).toEqual(0);
  });

  test('should calculate the number of days old a person is based on their birthday', () => {
    testAge.birthday = "1994-07-25";
    testAge.todaysDate = "2022-12-22"
    testAge.findDaysOld();
    expect(testAge.daysOld).toEqual(10377);
  })

});