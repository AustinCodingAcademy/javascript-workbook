'use strict';

// const doubleAll = (numbers) => {
//
//   return numbers .map(i => i * 2);
// }
// module.exports = doubleAll

const getShortMessages = (messages) => {
    return messages.filter(i < 50);

    }

    module.exports = getShortMessages
