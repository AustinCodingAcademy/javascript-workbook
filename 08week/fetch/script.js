'use strict';
const assert = require('assert');
//const sum = arr => arr.reduce ((acc,val)=> acc+val,0);
const getPost = (fetch,id) => {
    return fetch('https://randomuser.me/api/'+id);

}

if (typeof describe === 'function' ) {
    describe('#Test Fetch',()=>{
        let count = 0;

        const Fakefetch = (url) =>
  {
      const arr=url.split('/');
      let id=Number(arr[arr.length-1]);
      if (id<=0 || id > 30 )
      return 'out of range'
      else 
      return url;
  }
  it('Miss typed address', ()=>{
      assert.equal(getPost(Fakefetch,15), 'https://randomuser.me/api/15');
  });
  it('out of range', ()=>{
    assert.equal(getPost(Fakefetch,31), 'out of range');
});


    })
} else {
    console.log('only run the test on this one')
}
