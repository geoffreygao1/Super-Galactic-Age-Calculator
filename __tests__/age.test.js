import Age from './../src/age.js';

describe('Age', () => {
  let testAge;

  beforeEach(() => {
    testAge = new Age();
  });

  test('should create an Age object with a birthday property and a daysOld property', () => {
    expect(testAge.birthday).toEqual('');
    expect(testAge.daysOld).toEqual(0);
  });

});