'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Your code here
    let moved = [];
document.querySelectorAll('[data-block]').forEach((null) => {
  		ball.addEventListener('click', (e) => {
  			moved = {target:e.target parent:e.target.parentNode}
  			else {
  				moved.parent.
  			} e.target.parentNode.removeChild(e.target);
  		});
  	});
  	document.querySelector('[data-stack]').addEventListener('click',(e) => {
  		if (!e.target.children.length) {
  		e.target.appenChild(moved.target);
  	};
  });
  	document.querySelector('container').addEventListener('click', (e) => {
  		e.target.appenChild(moved.target);
  	})
  });

  let moved = {};
  document.querySelectorAll('[data-block]').forEach((block) => {
    block.addEventListener('click', (e) => {
      e.stopPropagation();
      moved = {size: e.target.attributes[0].value};
      e.target.parentNode.removeChild(e.target);
      console.log(moved.size);
    });
  });
});

document.querySelectorAll('[data-stack]').forEach((block) => {
block.addEventListener('click', (e) => {
  e.target.parentNode.removeChild(e.target);
});
