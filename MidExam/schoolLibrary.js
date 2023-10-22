// Ex. III

function libraryActions(input) {
    const shelf = input[0].split('&');
  
    for (let i = 1; i < input.length; i++) {
      const command = input[i].split(' | ');
      const action = command[0];
  
      if (action === 'Add Book') {
        const bookName = command[1];
        if (!shelf.includes(bookName)) {
          shelf.unshift(bookName);
        }
      } else if (action === 'Take Book') {
        const bookName = command[1];
        const bookIndex = shelf.indexOf(bookName);
        if (bookIndex !== -1) {
          shelf.splice(bookIndex, 1);
        }
      } else if (action === 'Swap Books') {
        const book1 = command[1];
        const book2 = command[2];
        const index1 = shelf.indexOf(book1);
        const index2 = shelf.indexOf(book2);
  
        if (index1 !== -1 && index2 !== -1) {
          [shelf[index1], shelf[index2]] = [shelf[index2], shelf[index1]];
        }
      } else if (action === 'Insert Book') {
        const bookName = command[1];
        if (!shelf.includes(bookName)) {
          shelf.push(bookName);
        }
      }
    }
  
    console.log(shelf.join(', '));
  }
  
  libraryActions(["Don Quixote&The Great Gatsby&Moby Dick", "Add Book | Ulysses", "Take Book | Don Quixote", "Insert Book | Alice's Adventures in Wonderland", "Done"]);