import * as React from "react";
import { useState } from "react";

const books = [
  {
    url: "https://www.youtube.com/watch?v=2P1-SunHlZg",
    title: "48 Laws of Power",
    author: "Robert Greene",
  },
  { url: "https://www.youtube.com/watch?v=2QLy4_2spkk", title: "1984", author: "George Orwell" },
  { url: "https://www.youtube.com/watch?v=lUycsN3HrPc", title: "20,000 Leagues Under the Sea", author: "Jules Verne" },
  { url: "https://www.youtube.com/watch?v=N_KpQivx9kk", title: "A Christmas Carol", author: "Charles Dickens" },
  { url: "https://www.youtube.com/watch?v=WX_qyVwwr8Q", title: "A Midsummer Night's Dream", author: "William Shakespeare" },
  { url: "https://www.youtube.com/watch?v=E6XWbksiT-o", title: "A Modest Proposal", author: "Jonathan Swift" },
  { url: "https://www.youtube.com/watch?v=wd8vr87k6Fc", title: "A Tale of Two Cities", author: "Charles Dickens" },
  { url: "https://www.youtube.com/watch?v=1g7BWguMkUM", title: "Adventure of Abbey Grange", author: "Sir Arthur Conan Doyle" },
  { url: "https://www.youtube.com/watch?v=VKNGnXA1ix8", title: "Adventures of Huckleberry Finn", author: "Mark Twain" },
  { url: "https://www.youtube.com/watch?v=15R_-_Wl6fs", title: "Adventures of Sherlock Holmes", author: "Sir Arthur Conan Doyle" },
  { url: "https://www.youtube.com/watch?v=TxiTNSDCsf0", title: "Adventures of Tom Sawyer", author: "Mark Twain" },
  { url: "https://www.youtube.com/watch?v=ycgkogD7Jw4", title: "Age of Reason", author: "Thomas Paine" },
  { url: "https://www.youtube.com/watch?v=D4G5Vut8fzg", title: "Alchemist", author: "Paulo Coelho" },
  { url: "https://www.youtube.com/watch?v=yEk-SZh_9Jw", title: "Alice in Wonderland", author: "Lewis Carroll" },
  { url: "https://www.youtube.com/watch?v=-kjWJjtMwuQ", title: "Anna Karenina", author: "Leo Tolstoy" },
  { url: "https://www.youtube.com/watch?v=9tlkTOPYU6I", title: "Anne of Green Gables", author: "Lucy Maud Montgomery" },
  { url: "https://www.youtube.com/watch?v=xVGkArXTZxk", title: "Around the World in 80 Days", author: "Jules Verne" },
  { url: "https://www.youtube.com/watch?v=tfIGKc6jEhA", title: "Art of War", author: "Sun Tzu" },
  { url: "https://www.youtube.com/watch?v=Ovz9VspYOxY", title: "Atlas of the Heart", author: "Brene Brown" },
  { url: "https://www.youtube.com/watch?v=3kTS1Ex-dig", title: "Beowulf", author: "unknown" },
  { url: "https://www.youtube.com/watch?v=vboAs2q2mYI", title: "Beyond Good and Evil", author: "Friedrich Nietzsche" },
  { url: "https://www.youtube.com/watch?v=0zqoGDVed8A", title: "Bushido: The Way of the Warrior - Soul of Japan", author: "Inazo Nitobe" },
  { url: "https://www.youtube.com/watch?v=F9B7L9O803s", title: "Call of the Wild", author: "Jack London" },
  { url: "https://www.youtube.com/watch?v=ot74dEJKADg", title: "Catcher in the Rye", author: "J.D. Salinger" },
  { url: "https://www.youtube.com/watch?v=vVL9TtxDu60", title: "Color Purple", author: "Alice Walker" },
  { url: "https://www.youtube.com/watch?v=PdYLRTGmQ3c", title: "Communist Manifesto", author: "Karl Marx" },
  { url: "https://www.youtube.com/watch?v=XOxIQnjmmZw", title: "Count of Monte Cristo", author: "Alexandre Dumas" },
  { url: "https://www.youtube.com/watch?v=cD6TCxizFjs", title: "Dhammapada", author: "Buddha" },
  { url: "https://www.youtube.com/watch?v=0Ny0mu0qFCA", title: "Divine Comedy", author: "Dante" },
  { url: "https://www.youtube.com/watch?v=TUJ5Y1QjLwk", title: "Dracula", author: "Bram Stoker" },
  { url: "https://www.youtube.com/watch?v=bG5QixsoPok", title: "Fahrenheit 451", author: "Ray Bradbury" },
  { url: "https://www.youtube.com/watch?v=YzyDRSMee_U", title: "Fisherman and His Soul", author: "Oscar Wilde" },
  { url: "https://www.youtube.com/watch?v=tETWQO2UXmQ", title: "Frankenstein", author: "Mary Shelley" },
  { url: "https://www.youtube.com/watch?v=14ZRQPSOgaY", title: "Gambler", author: "Fyodor Dostoyevsky" },
  { url: "https://www.youtube.com/watch?v=kI4rrTPFVd4", title: "Genesis", author: "Moses" },
  { url: "https://www.youtube.com/watch?v=YA18xKvOK94", title: "Great Expectations", author: "Charles Dickens" },
  { url: "https://www.youtube.com/watch?v=ZjHl5TyWMsQ", title: "Great Gatsby", author: "F.Scott Fitzgerald" },
  { url: "https://www.youtube.com/watch?v=7J-1pMESTI0", title: "Grimm's Fairy Tales", author: "Brothers Grimm" },
  { url: "https://www.youtube.com/watch?v=6_Y-tYrGBDc", title: "Hamlet", author: "William Shakespeare" },
  { url: "https://www.youtube.com/watch?v=0pmWf1k-vFM", title: "Handmaid's Tale", author: "Margaret Atwood" },
  { url: "https://www.youtube.com/watch?v=Qji-GeY_NqM", title: "Hansel and Gretel", author: "Brothers Grimm" },
  { url: "https://www.youtube.com/watch?v=IsZsIjMz5Cg", title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling" },
  { url: "https://www.youtube.com/watch?v=at-l2oL9ED8", title: "Hills Like White Elephants", author: "Earnest Hemingway" },
  { url: "https://www.youtube.com/watch?v=Z2XjCtPNvWA", title: "How Successful People Think", author: "John Maxwell" },
  { url: "https://www.youtube.com/watch?v=YKAfKprBXQc", title: "How To Win Friends And Influence People", author: "Dale Carnegie" },
  { url: "https://www.youtube.com/watch?v=Wgs1hLhSc2g", title: "Iliad", author: "Homer" },
  { url: "https://www.youtube.com/watch?v=sBF1ZpbGEEE", title: "Invisible Man", author: "H.G. Wells" },
  { url: "https://www.youtube.com/watch?v=lnLahYbq_7Q", title: "Julius Caesar", author: "William Shakespeare" },
  { url: "https://www.youtube.com/watch?v=WRJ2-GKL1SQ", title: "Jungle", author: "Upton Sinclair" },
  { url: "https://www.youtube.com/watch?v=L-mB7F4B1Hw", title: "Jungle Book", author: "Rudyard Kipling" },
  { url: "https://www.youtube.com/watch?v=jA4_2IM8X-U", title: "Legend of Sleepy Hollow", author: "Washington Irving" },
  { url: "https://www.youtube.com/watch?v=57aViPgDDjU", title: "Les Misérables", author: "Victor Hugo" },
  { url: "https://www.youtube.com/watch?v=39D8QS4CtrI", title: "Letters to a Young Poet", author: "Rainer Maria Rilke" },
  { url: "https://www.youtube.com/watch?v=GiOeoxSG0D0", title: "Life and Adventures of Robinson Crusoe", author: "Daniel Defoe" },
  { url: "https://www.youtube.com/watch?v=XKGrUjwv-yA", title: "Little Prince", author: "Antoine De Saint-Exupery" },
  { url: "https://www.youtube.com/watch?v=1Y1imN6k32w", title: "Little Women", author: "Louisa May Alcott" },
  { url: "https://www.youtube.com/watch?v=utRA2Ck3swU", title: "Lord of the Flies", author: "William Golding" },
  { url: "https://www.youtube.com/watch?v=aeCiiXULIVM", title: "Lost World", author: "Sir Arthur Conan Doyle" },
  { url: "https://www.youtube.com/watch?v=pGBQsQoWvA0", title: "Macbeth", author: "William Shakespeare" },
  { url: "https://www.youtube.com/watch?v=MBCPeqla5bE", title: "Merchant of Venice", author: "William Shakespeare" },
  { url: "https://www.youtube.com/watch?v=uDDoIGX3bHU", title: "Moby Dick", author: "Herman Melville" },
  { url: "https://www.youtube.com/watch?v=lI6cgH3sVE4", title: "My Inventions", author: "Nikola Tesla" },
  { url: "https://www.youtube.com/watch?v=8a8xw4YO6AA", title: "Underground", author: "Fyodor Dostoyevsky" },
  { url: "https://www.youtube.com/watch?v=vrDAp5lnddQ", title: "Odyssey", author: "Homer" },
  { url: "https://www.youtube.com/watch?v=TM33XRK--u0", title: "Oedipus Rex", author: "Sophocles" },
  { url: "https://www.youtube.com/watch?v=GwsOgHASmyU", title: "Of Mice and Men", author: "John Steinbeck" },
  { url: "https://www.youtube.com/watch?v=JXxy63IW7-Y", title: "Old Man And The Sea The", author: "Ernest Hemingway" },
  { url: "https://www.youtube.com/watch?v=cUVyaRJhKwc", title: "Oliver Twist", author: "Charles Dickens" },
  { url: "https://www.youtube.com/watch?v=NJ0iKf7bogw", title: "Origin of Species", author: "Charles Darwin" },
  { url: "https://www.youtube.com/watch?v=p4vsFO1mh4o", title: "Othello", author: "William Shakespeare" },
  { url: "https://www.youtube.com/watch?v=0hu8p-NYSkE", title: "Paradise Lost", author: "John Milton" },
  { url: "https://www.youtube.com/watch?v=09LUC7rNOEE", title: "Persuasion", author: "Jane Austen" },
  { url: "https://www.youtube.com/watch?v=l4GhL9PzPDU", title: "Peter Pan", author: "J.M. Barrie" },
  { url: "https://www.youtube.com/watch?v=Ksn2pwKN0WI", title: "Picture of Dorian Gray", author: "Oscar Wilde" },
  { url: "https://www.youtube.com/watch?v=FIiS0R7ifQQ", title: "Phantom of the Opera", author: "Gaston Leroux" },
  { url: "https://www.youtube.com/watch?v=m8JGdNKiw-c", title: "Pride and Prejudice", author: "Jane Austen" },
  { url: "https://www.youtube.com/watch?v=BH7AQAxq1ac", title: "Prince and the Pauper", author: "Mark Twain" },
  { url: "https://www.youtube.com/watch?v=AtGlWlg4-44", title: "Raven", author: "Edgar Allan Poe" },
  { url: "https://www.youtube.com/watch?v=GFiBbPk5Ns0", title: "Richard III", author: "William Shakespeare" },
  { url: "https://www.youtube.com/watch?v=RdvdaCnVuy8", title: "Roughing It", author: "Mark Twain" },
  { url: "https://www.youtube.com/watch?v=e4tSfkGyC74", title: "Romeo And Juliet", author: "William Shakespeare" },
  { url: "https://www.youtube.com/watch?v=7qaKd0kMHAs", title: "Sayings of Confucius", author: "Confucius" },
  { url: "https://www.youtube.com/watch?v=udvHrcJGIAA", title: "Scarlet Letter", author: "Nathaniel Hawthorne" },
  { url: "https://www.youtube.com/watch?v=Yx_GpxQvi5E", title: "Secret Garden", author: "Frances Hodgson Burnett" },
  { url: "https://www.youtube.com/watch?v=PVwh6EcMvXs", title: "Sherlock Holmes: A Study in Scarlet", author: "Sir Arthur Conan Doyle" },
  { url: "https://www.youtube.com/watch?v=_MXfeMIJtxc", title: "Sherlock Holmes: The Hound of the Baskervilles", author: "Sir Arthur Conan Doyle" },
  { url: "https://www.youtube.com/watch?v=Yz6uGkdenEk", title: "Slaughterhouse Five", author: "Kurt Vonnegut" },
  { url: "https://www.youtube.com/watch?v=kq5qtTZBH_8", title: "Strange Case of Dr. Jekyll and Mr. Hyde", author: "R.L. Stevenson" },
  { url: "https://www.youtube.com/watch?v=RH3TgyKhNz8", title: "Studies In Pessimism", author: "Arthur Schopenhauer" },
  { url: "https://www.youtube.com/watch?v=wnvQsK0KLfc", title: "Tarzan of the Apes", author: "Edgar Rice Burroughs" },
  { url: "https://www.youtube.com/watch?v=CMb4phUnSNI", title: "Tempest", author: "William Shakespeare" },
  { url: "https://www.youtube.com/watch?v=io8JSc5q3VA", title: "Theory of Relativity", author: "Albert Einstein" },
  { url: "https://www.youtube.com/watch?v=XODFEs8Gspk", title: "To Kill A Mockingbird", author: "Harper Lee" },
  { url: "https://www.youtube.com/watch?v=BZFIJ9p0c2A", title: "Treasure Island", author: "Robert Louis Stevenson" },
  { url: "https://www.youtube.com/watch?v=SAXvhAQwJK0", title: "Twelve Years a Slave", author: "Solomon Northup" },
  { url: "https://www.youtube.com/watch?v=2PLC139t8EY", title: "War of the Worlds", author: "H.G. Wells" },
  { url: "https://www.youtube.com/watch?v=X_6aaH2gtIg", title: "Walden", author: "Henry David Thoreau" },
  { url: "https://www.youtube.com/watch?v=AU3L62OomvQ", title: "Wind of the Willows", author: "Kenneth Grahame" },
  { url: "https://www.youtube.com/watch?v=jYIaUmnGLj4", title: "Wonderful Wizard of Oz", author: "L. Frank Baum" },
  { url: "https://www.youtube.com/watch?v=FzbOAR7N5WU", title: "Wuthering Heights", author: "Emily Brontë" },
];

export default function AudioBooks() {
  const [sortBy, setSortBy] = useState("title");

  const sortedBooks = [...books].sort((a, b) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "author") {
      return a.author.localeCompare(b.author);
    }
    return 0;
  });

  const handleSort = (criteria) => {
    setSortBy(criteria);
  };

  return (
    <React.Fragment>
      <h2>Audio Books on YouTube</h2>
      <div>
        <button className='AudioBooksButton AudioBooksButton_Left' onClick={() => handleSort("title")}>
          Sort by Title
        </button>
        <button className='AudioBooksButton' onClick={() => handleSort("author")}>
          Sort by Author
        </button>
      </div>
      <ol>
        {sortedBooks.map((book) => (
          <li>
            <a href={book.url} target='_blank' rel='noreferrer'>
              {book.title}
            </a>{" "}
            by {book.author}
          </li>
        ))}
      </ol>
    </React.Fragment>
  );
}
