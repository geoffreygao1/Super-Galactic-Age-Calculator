import Age from './../src/age.js';

describe('Age', () => {
  let testAge;

  beforeEach(() => {
    testAge = new Age();
  });

  test('should create an Age object with a birthday property', () => {
    expect(testAge.birthday).toEqual('');
  });
});