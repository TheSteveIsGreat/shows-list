let readingList = [{id: 1, title: '', read: false}]
console.log('OG List: ', readingList)

// CRUD

// CREATE: add a book to reading list
// Do Not mutate readingList
const addBook = (newBook) => {
let newList = [...readingList, newBook]
return newList
}

console.log('Added Book: ', addBook({id: 2, title: 'LOTR', read: true}))

//READ:SKIP (NEED REACT)

//UPDATE
// a new updated list with read toggled
const updateReadStatus = (id) => {
//map over reading list and change read value
let updatedId = readingList.map((x) => {
  if (x.id === id) {
    return {...x, read: !x.read}
  }
})
return updatedId
}

console.log('Updated List: ', updateReadStatus(1))

//DELETE
// a new  list with book removed
const deleteBook = (id) => {
// delete a book by id
  let deletedId = readingList.filter(x => {
    return x.id !== id
  })
  return deletedId
}

console.log('Deleted List: ', deleteBook(1))

