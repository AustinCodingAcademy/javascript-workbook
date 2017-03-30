//4 Arrow Functions and this
var foot = {
  kick: function () {
    this.yelp = "Ouch!";
    setImmediate(() => {
      console.log(this.yelp);
    });
  }
};
foot.kick();
