document.addEventListener('DOMContentLoaded', function() {

// user inputs item and clicks submit, on submit (on click) get input value

      document.getElementById("submit").addEventListener("click", () => {
          const inputVal = document.getElementById("toDoInput").value;


// add value to list array, value should be formatted in an object with listItem
// key, order key, complete key

          /** @param
           * listItem: string,
           * order: num,
           *complete: boolean,
           * */



          const inputItems = [];
          const formattedItem = new listItems(inputVal, inputItems);
            listItems.push(formattedItem);


// loop through list arr and create a list item with an click event that changes complete
// incomplete value

          const htmlListArr = inputItems.map((ong, index) => {
            const li = document.createElement('li');
            le.setAttribute('data-index', index);
            li.textContent = obj['listItem'];
            document.getElementById('list-container').appendChild(li);

          });


// each listItem should also have an arrow that can be clicked to change the order


          document.getElementById('id').addEventListener('click', () => {
              const index = parseInt(this.getElementById('id');
                let lowerNumber = listArr[index].order;
                let higherNumber = lowerNumber - 1;
              });
            // (list items should be displayed in order)

            // append to an ul in the document




          });

        class listItems {
          constructor(item, inputItems) {
            this.listItem = item;
            this.order = inputItems.length;
            this.complete = false;
          }
        }
      });
