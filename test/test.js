const isAnagram = require('../src/anagram');


/*

* Anagram Testing file

*/

test('isAnagram function exists', () => {

});

test('"cinema" is an anagram of "iceman"', () => {
  const value = 'cinema';
  expect(isAnagram(value, 'iceman')).toBeTruthy()
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
  const value = 'Dormitory';
  expect(isAnagram(value, 'dirty room##')).toBeTruthy()
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
  const value = 'Hello';
  expect(isAnagram(value, 'Aloha')).toBeFalsy()
});

/*

* Various functions Testing file

*/

const functions = require('../src/variousfunctions');

const nameCheck = () => console.log('Checking Name.');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(functions.checkValue(user)).toMatch('Jeff');
  });

  test('User is Karen', () => {
    const user = 'Karen';
    expect(functions.checkValue(user)).toMatch('Karen');
  });
});

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

/*

* Informations

*/

// CHECK FOR true & false VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
  const user = 'Jeff';
  expect(functions.checkValue(user)).not.toMatch('Jefff');
});

// toEqual
test('User should be Marc Antoine object', () => {
  // const user = { firstName: 'Marc' };
  // user['lastName'] = 'Antoine';
  // expect(functions.createUser.user).toBe(user);
});

// Less than and greater than
test('Should be under 1000', () => {
  const load1 = 500;
  const load2 = 500;
  // Complete here
  expect(load1).toBeLessThan(1000);
  expect(load2).toBeLessThan(1000);


});

// Regex
test('There is no I in the word team', () => {
  expect('team').not.toMatch(/i/);
});

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});
// Working with async data

// Async Await since ES7
test('User fetched name should be Leanne Graham', async () => {
  const data = await functions.fetchUser();
  expect(data).toHaveProperty('name', 'Leanne Graham');
});

/*

* ReverseString Testing file

*/

const reverseString = require('../src/reversestr');

test('reverseString function exists', () => {
  // Complete here
});

test('String reverses', () => {
  const user = 'jeff';
  expect(reverseString(user)).toBe('ffej');
});

test('String reverses with uppercase', () => {
  const user = 'JEFF';
  expect(reverseString(user).toLowerCase(user)).toBe('ffej');
});
