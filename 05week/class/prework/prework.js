const student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 };
let newArray = [];
for (const key in student) {
    newArray.push(key);
}
console.log("Printing out object keys: ",newArray)
console.log("------------------------------------")
delete student.rollno;
let arrayWithoutRollno = [];
for (const newKeys in student) {
    arrayWithoutRollno.push(newKeys);
}
console.log("Printing out object keys without rollno: ",arrayWithoutRollno)
console.log("------------------------------------")
let length = newArray.length;
console.log("Print out length of object: ",length)
console.log("------------------------------------")
const library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
for (const i of library) {
    for (const key in i) {
        if(key == 'readingStatus'){
            console.log("Printing only reading status: ",i.readingStatus)
            console.log("------------------------------------")

        }
    }
}
// Volume of a cylindar V = πr2h
// To 4 decimal places
const pi = Math.PI;
class Cylinder {
    constructor(radius, height){
      this.radius = radius;
      this.height = height;
      this.volume = function(){
        const volume = pi * this.radius * 2 * this.height
        return volume
      };
    }
}
const newCylinder = new Cylinder(20, 200);
console.log('volume =', newCylinder.volume().toFixed(4))
console.log("------------------------------------")
Array.prototype.BubbleSort = function(){
let sorted = false;
 while (!sorted){
    sorted = true;
    for (let n = 0; n < this.length - 1; n++){
      if (this[n] > this[n+1]){
        let x = this[n+1];
        this[n+1] = this[n];
        this[n] = x;
        sorted = false;
      }
    }
  }
  return this;
};
console.log([9,-4,1,7,3,-2,0].BubbleSort())
console.log("------------------------------------")
String.prototype.StringSegments = function(){
    let subset = []
    for (let i = 0; i < this.length; i++) {
        for (let e = i+1; e < this.length+1; e++) {
            // subset.push(this.slice(i,e));
            console.log(i,e)
            console.log(this.slice(i,e))
        }
    }
    return subset;
}
console.log("dogs".StringSegments())
console.log("------------------------------------")
class JavaScriptClock{
    constructor(currentDate, hours, minutes, seconds){
        this.currentDate = new Date();
        this.hours = this.currentDate.getHours();
        this.minutes = this.currentDate.getMinutes();
        this.seconds = this.currentDate.getSeconds();
        this.clock = function(){
            const time = this.currentDate + "\n" + this.hours + ":" + this.minutes + ":" + this.seconds;
            return time
          };
    }
}
const newClock = new JavaScriptClock(this.currentDate, this.hours, this.minutes, this.seconds);
console.log("Central Time clock:\n"+newClock.clock());
console.log("------------------------------------")
function my_Clock(){
    this.cur_date = new Date();
    this.hours = this.cur_date.getHours();
    this.minutes = this.cur_date.getMinutes();
    this.seconds = this.cur_date.getSeconds();
}
my_Clock.prototype.run = function(){
    setInterval(this.update.bind(this), 1000);
};
my_Clock.prototype.update = function(){
    this.updateTime(1);
    console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};
my_Clock.prototype.updateTime = function(secs) {
    this.seconds+= secs;
    if(this.seconds >= 60){
      this.minutes++;
      this.seconds= 0;
    }
    if(this.minutes >= 60){
      this.hours++;
      this.minutes=0;
    }
    if(this.hours >= 24){
      this.hours = 0;
    }
};
var clock = new my_Clock();
// console.log("Keeps time: ",clock.run());
// console.log("------------------------------------");
// Area and Perimeter of a circle
// AREA: A=πr2
// PERIMETER: C=2πr
class AreaAndPerimeter {
    constructor(radius){
      this.radius = radius;
      this.calcArea = function(){
        const area = pi * this.radius ** 2;
        return area;
      }
      this.calcPerimeter = function(){
          const perimeter = 2 * pi * this.radius;
          return perimeter;
      }
    }
}
const calculate = new AreaAndPerimeter(20);
console.log('area =', calculate.calcArea());
console.log('perimeter =', calculate.calcPerimeter());
console.log("------------------------------------");
// const lib = [
//     {
//         title:  'The Road Ahead',
//         author: 'Bill Gates',
//         libraryID: 1254
//     },
//     {
//         title: 'Walter Isaacson',
//         author: 'Steve Jobs',
//         libraryID: 4264
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         libraryID: 3245
//     }
// ];
// const sort_by = function(field_name, reverse, initial){
//     const key = initial ? function(x){return initial(x[field_name]);} : function(x){return x[field_name];};
//     reverse = !reverse ? 1 : -1;
//     return function(x, y){
//         return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
//     };
//  };
//  var newobj = lib.sort(sort_by('libraryID', true, parseInt));
//  console.log(newobj);
//  console.log("------------------------------------");
function hasKey(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  }
console.log(hasKey({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}, "green"));
console.log("------------------------------------");
function invert_key_value(obj) {
    var result = {};
    var keys = _keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  }
function _keys(obj) 
  {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
function isObject(obj) 
 {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
console.log(invert_key_value({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
console.log("------------------------------------");
// Parse a URL
function parse_URL(url) {
    var a = document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':', ''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function () {
            var ret = {},
                seg = a.search.replace(/^\?/, '').split('&'),
                len = seg.length,
                i = 0,
                s;
            for (; i < len; i++) {
                if (!seg[i]) {
                    continue;
                }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
        hash: a.hash.replace('#', ''),
        path: a.pathname.replace(/^([^\/])/, '/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
        segments: a.pathname.replace(/^\//, '').split('/')
    };
}
console.log(parse_URL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python'));