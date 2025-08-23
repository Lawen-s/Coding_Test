function solution(phone_book) {
  let sortPoneBook = phone_book.sort();
  for (let i = 0; i < sortPoneBook.length - 1; i++) {
    if (sortPoneBook[i + 1].startsWith(sortPoneBook[i])) {
      return false;
    }
  }
  return true;
}
