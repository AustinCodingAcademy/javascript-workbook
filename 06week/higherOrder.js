'use strict';

const assert = require('assert');

const tvSeries = [
  {name: "Breaking Bad", category: "Drama", year: 2008},
  {name: "Family Guy", category: "Comedy", year: 1999},
  {name: "Sopranos", category: "Drama", year: 1999},
  {name: "Game of Thrones", category: "Action", year: 2011}
]

const seriesYears = [2008, 2000, 1999, 2011];


// *** forEach ***
// get all objects inside tvSeries array
for(let i = 0; i < tvSeries.length; i++){
  console.log(tvSeries[i]);
}
// get names from tvSeries
tvSeries.forEach(title => {
  console.log(title.name);
})

// *** map ***
// get all years from seriesYears and add 'Year' to the beginning of each in new array
const addYear = [];

for(let i = 0; i < seriesYears.length; i++){
  console.log(addYear.unshift(`Year`+ ' ' + seriesYears[i]))
};

console.log(addYear);

// get length of each series and create new array with info
const ageOfSeries = tvSeries.map(title => `${title.name} ${(title.end - title.start) + " " + "seasons"}`);

console.log(ageOfSeries);

// *** filter ***

// get all seriesYears that started after the start of the year 2000 and push to new array
const seriesAfterMillenium = [];

for(let i = 0; i < seriesYears.length; i++){
  if(seriesYears[i] >= 2000){
    seriesAfterMillenium.push(seriesYears[i]);
  }
}

console.log(seriesAfterMillenium);

// get all series from tvSeries that started before year 2000
const seriesBeforeMillenium = tvSeries.filter(date => date.year < 2000);

console.log(seriesBeforeMillenium);

// *** somed *** 

// get boolean value if Any values satisfy before year 2000
const beforeMillenium = year => year < 2000;

console.log(seriesYears.some(beforeMillenium));
//returns true because of 1999

// *** every ***

// get boolean value if All values satisfy after year 2000 
const allAfterMillenium = year => year >= 2000;

console.log(seriesYears.every(allAfterMillenium));
// returns false becacuse of 1999

if (typeof describe === 'function') {

  describe('#forEach()', () => {
    it('should call the callback the array.length number of times', () => {
      let count = 0;
      forEach([1, 2, 3], () => {
        count++;
      });
      assert.equal(count, 3);
    });
  });

  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });

  describe('#some()', () => {
    let count = 0;
    const somed = some([1, 2, 3, 4], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return true if at least one item passes the predicate test', () => {
      assert.equal(somed, true);
    });
    it('should stop at the first item that passes the predicate test', () => {
      assert.equal(count, 2);
    });
    it('should return false if no items pass the predicate test', () => {
      const somed = some([1, 3, 5], (num) => {
        return num % 2 === 0;
      });
      assert.equal(somed, false);
    });
  });

  describe('#every()', () => {
    it('should return true if at all passes the predicate test', () => {
      const everied = every([2, 4, 6], (num) => {
        return num % 2 === 0;
      });
      assert.equal(everied, true);
    });
    let count = 0;
    const everied = every([2, 3, 4, 5], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return false if any item fails the predicate test', () => {
      assert.equal(everied, false);
    });
    it('should stop at the first item that fails the predicate test', () => {
      assert.equal(count, 2);
    });
  });

} else {

  console.log('Only run the tests on this one!')

}
