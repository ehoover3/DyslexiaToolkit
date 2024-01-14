import * as React from "react";

function Book(url, title, author) {
  return (
    <li>
      <a href={url} target='_blank' rel='noreferrer'>
        {title}
      </a>{" "}
      by {author}
    </li>
  );
}

export default function AudioBooks() {
  return (
    <React.Fragment>
      <h2>Audio Books on YouTube</h2>
      <ol>
        {Book("https://www.youtube.com/watch?v=2P1-SunHlZg", "48 Laws of Power", "Robert Greene")}
        {Book("https://www.youtube.com/watch?v=2QLy4_2spkk", "1984", "George Orwell")}
        {Book("https://www.youtube.com/watch?v=lUycsN3HrPc", "20,000 Leagues Under the Sea", "Jules Verne")}
        {Book("https://www.youtube.com/watch?v=N_KpQivx9kk", "A Christmas Carol", "Charles Dickens")}
        {Book("https://www.youtube.com/watch?v=WX_qyVwwr8Q", "A Midsummer Night's Dream", "William Shakespeare")}
        {Book("https://www.youtube.com/watch?v=E6XWbksiT-o", "A Modest Proposal", "Jonathan Swift")}
        {Book("https://www.youtube.com/watch?v=wd8vr87k6Fc", "A Tale of Two Cities", "Charles Dickens")}
        {Book("https://www.youtube.com/watch?v=1g7BWguMkUM", "Adventure of Abbey Grange", "Sir Arthur Conan Doyle")}
        {Book("https://www.youtube.com/watch?v=VKNGnXA1ix8", "Adventures of Huckleberry Finn", "Mark Twain")}
        {Book("https://www.youtube.com/watch?v=15R_-_Wl6fs", "Adventures of Sherlock Holmes", "Sir Arthur Conan Doyle")}
        {Book("https://www.youtube.com/watch?v=TxiTNSDCsf0", "Adventures of Tom Sawyer", "Mark Twain")}
        {Book("https://www.youtube.com/watch?v=ycgkogD7Jw4", "Age of Reason", "Thomas Paine")}
        {Book("https://www.youtube.com/watch?v=D4G5Vut8fzg", "Alchemist", "Paulo Coelho")}
        {Book("https://www.youtube.com/watch?v=yEk-SZh_9Jw", "Alice in Wonderland", "Lewis Carroll")}
        {Book("https://www.youtube.com/watch?v=-kjWJjtMwuQ", "Anna Karenina", "Leo Tolstoy")}
        {Book("https://www.youtube.com/watch?v=9tlkTOPYU6I", "Anne of Green Gables", "Lucy Maud Montgomery")}
        {Book("https://www.youtube.com/watch?v=xVGkArXTZxk", "Around the World in 80 Days", "Jules Verne")}
        {Book("https://www.youtube.com/watch?v=tfIGKc6jEhA", "Art of War", "Sun Tzu")}
        {Book("https://www.youtube.com/watch?v=Ovz9VspYOxY", "Atlas of the Heart", "Brene Brown")}
        {Book("https://www.youtube.com/watch?v=3kTS1Ex-dig", "Beowulf", "unknown")}
        {Book("https://www.youtube.com/watch?v=vboAs2q2mYI", "Beyond Good and Evil", "Friedrich Nietzsche")}
        {Book("https://www.youtube.com/watch?v=0zqoGDVed8A", "Bushido: The Way of the Warrior - Soul of Japan", "Inazo Nitobe")}
        {Book("https://www.youtube.com/watch?v=F9B7L9O803s", "Call of the Wild", "Jack London")}
        {Book("https://www.youtube.com/watch?v=ot74dEJKADg", "Catcher in the Rye", "J.D. Salinger")}
        {Book("https://www.youtube.com/watch?v=vVL9TtxDu60", "Color Purple", "Alice Walker")}
        {Book("https://www.youtube.com/watch?v=PdYLRTGmQ3c", "Communist Manifesto", "Karl Marx")}
        {Book("https://www.youtube.com/watch?v=XOxIQnjmmZw", "Count of Monte Cristo", "Alexandre Dumas")}
        {Book("https://www.youtube.com/watch?v=cD6TCxizFjs", "Dhammapada", "Buddha")}
        {Book("https://www.youtube.com/watch?v=0Ny0mu0qFCA", "Divine Comedy", "Dante")}
        {Book("https://www.youtube.com/watch?v=TUJ5Y1QjLwk", "Dracula", "Bram Stoker")}
        {Book("https://www.youtube.com/watch?v=bG5QixsoPok", "Fahrenheit 451", "Ray Bradbury")}
        {Book("https://www.youtube.com/watch?v=YzyDRSMee_U", "Fisherman and His Soul", "Oscar Wilde")}
        {Book("https://www.youtube.com/watch?v=tETWQO2UXmQ", "Frankenstein", "Mary Shelley")}
        {Book("https://www.youtube.com/watch?v=14ZRQPSOgaY", "Gambler", "Fyodor Dostoyevsky")}
        {Book("https://www.youtube.com/watch?v=kI4rrTPFVd4", "Genesis", "Moses")}
        {Book("https://www.youtube.com/watch?v=YA18xKvOK94", "Great Expectations", "Charles Dickens")}
        {Book("https://www.youtube.com/watch?v=ZjHl5TyWMsQ", "Great Gatsby", "F.Scott Fitzgerald")}
        {Book("https://www.youtube.com/watch?v=7J-1pMESTI0", "Grimm's Fairy Tales", "Brothers Grimm")}
        {Book("https://www.youtube.com/watch?v=6_Y-tYrGBDc", "Hamlet", "William Shakespeare")}
        {Book("https://www.youtube.com/watch?v=0pmWf1k-vFM", "Handmaid's Tale", "Margaret Atwood")}
        {Book("https://www.youtube.com/watch?v=Qji-GeY_NqM", "Hansel and Gretel", "Brothers Grimm")}
        {Book("https://www.youtube.com/watch?v=IsZsIjMz5Cg", "Harry Potter and the Sorcerer's Stone", "J.K. Rowling")}
        {Book("https://www.youtube.com/watch?v=at-l2oL9ED8", "Hills Like White Elephants", "Earnest Hemingway")}
        {Book("https://www.youtube.com/watch?v=Z2XjCtPNvWA", "How Successful People Think", "John Maxwell")}
        {Book("https://www.youtube.com/watch?v=YKAfKprBXQc", "How To Win Friends And Influence People", "Dale Carnegie")}
        {Book("https://www.youtube.com/watch?v=Wgs1hLhSc2g", "Iliad", "Homer")}
        {Book("https://www.youtube.com/watch?v=sBF1ZpbGEEE", "Invisible Man", "H.G. Wells")}
        {Book("https://www.youtube.com/watch?v=lnLahYbq_7Q", "Julius Caesar", "William Shakespeare")}
        {Book("https://www.youtube.com/watch?v=WRJ2-GKL1SQ", "Jungle", "Upton Sinclair")}
        {Book("https://www.youtube.com/watch?v=L-mB7F4B1Hw", "Jungle Book", "Rudyard Kipling")}
        {Book("https://www.youtube.com/watch?v=jA4_2IM8X-U", "Legend of Sleepy Hollow", "Washington Irving")}
        {Book("https://www.youtube.com/watch?v=57aViPgDDjU", "Les Misérables", "Victor Hugo")}
        {Book("https://www.youtube.com/watch?v=39D8QS4CtrI", "Letters to a Young Poet", "Rainer Maria Rilke")}
        {Book("https://www.youtube.com/watch?v=GiOeoxSG0D0", "Life and Adventures of Robinson Crusoe", "Daniel Defoe")}
        {Book("https://www.youtube.com/watch?v=XKGrUjwv-yA", "Little Prince", "Antoine De Saint-Exupery")}
        {Book("https://www.youtube.com/watch?v=1Y1imN6k32w", "Little Women", "Louisa May Alcott")}
        {Book("https://www.youtube.com/watch?v=utRA2Ck3swU", "Lord of the Flies", "William Golding")}
        {Book("https://www.youtube.com/watch?v=aeCiiXULIVM", "Lost World", "Sir Arthur Conan Doyle")}
        {Book("https://www.youtube.com/watch?v=pGBQsQoWvA0", "Macbeth", "William Shakespeare")}
        {Book("https://www.youtube.com/watch?v=MBCPeqla5bE", "Merchant of Venice", "William Shakespeare")}
        {Book("https://www.youtube.com/watch?v=uDDoIGX3bHU", "Moby Dick", "Herman Melville")}
        {Book("https://www.youtube.com/watch?v=lI6cgH3sVE4", "My Inventions", "Nikola Tesla")}
        {Book("https://www.youtube.com/watch?v=8a8xw4YO6AA", "Underground", "Fyodor Dostoyevsky")}
        {Book("https://www.youtube.com/watch?v=vrDAp5lnddQ", "Odyssey", "Homer")}
        {Book("https://www.youtube.com/watch?v=TM33XRK--u0", "Oedipus Rex", "Sophocles")}
        {Book("https://www.youtube.com/watch?v=GwsOgHASmyU", "Of Mice and Men", "John Steinbeck")}
        {Book("https://www.youtube.com/watch?v=JXxy63IW7-Y", "Old Man And The Sea, The", "Ernest Hemingway")}
        {Book("https://www.youtube.com/watch?v=cUVyaRJhKwc", "Oliver Twist", "Charles Dickens")}
        {Book("https://www.youtube.com/watch?v=NJ0iKf7bogw", "Origin of Species", "Charles Darwin")}
        {Book("https://www.youtube.com/watch?v=p4vsFO1mh4o", "Othello", "William Shakespeare")}
        {Book("https://www.youtube.com/watch?v=0hu8p-NYSkE", "Paradise Lost", "John Milton")}
        {Book("https://www.youtube.com/watch?v=09LUC7rNOEE", "Persuasion", "Jane Austen")}
        {Book("https://www.youtube.com/watch?v=l4GhL9PzPDU", "Peter Pan", "J.M. Barrie")}
        {Book("https://www.youtube.com/watch?v=Ksn2pwKN0WI", "Picture of Dorian Gray", "Oscar Wilde")}
        {Book("https://www.youtube.com/watch?v=FIiS0R7ifQQ", "Phantom of the Opera", "Gaston Leroux")}
        {Book("https://www.youtube.com/watch?v=m8JGdNKiw-c", "Pride and Prejudice", "Jane Austen")}
        {Book("https://www.youtube.com/watch?v=BH7AQAxq1ac", "Prince and the Pauper", "Mark Twain")}
        {Book("https://www.youtube.com/watch?v=AtGlWlg4-44", "Raven", "Edgar Allan Poe")}
        {Book("https://www.youtube.com/watch?v=GFiBbPk5Ns0", "Richard III", "William Shakespeare")}
        {Book("https://www.youtube.com/watch?v=RdvdaCnVuy8", "Roughing It", "Mark Twain")}
        {Book("https://www.youtube.com/watch?v=e4tSfkGyC74", "Romeo And Juliet", "William Shakespeare")}
        {Book("https://www.youtube.com/watch?v=7qaKd0kMHAs", "Sayings of Confucius", "Confucius")}
        {Book("https://www.youtube.com/watch?v=udvHrcJGIAA", "Scarlet Letter", "Nathaniel Hawthorne")}
        {Book("https://www.youtube.com/watch?v=Yx_GpxQvi5E", "Secret Garden", "Frances Hodgson Burnett")}
        {Book("https://www.youtube.com/watch?v=PVwh6EcMvXs", "Sherlock Holmes: A Study in Scarlet", "Sir Arthur Conan Doyle")}
        {Book("https://www.youtube.com/watch?v=_MXfeMIJtxc", "Sherlock Holmes: The Hound of the Baskervilles", "Sir Arthur Conan Doyle")}
        {Book("https://www.youtube.com/watch?v=Yz6uGkdenEk", "Slaughterhouse Five", "Kurt Vonnegut")}
        {Book("https://www.youtube.com/watch?v=kq5qtTZBH_8", "Strange Case of Dr. Jekyll and Mr. Hyde", "R.L. Stevenson")}
        {Book("https://www.youtube.com/watch?v=RH3TgyKhNz8", "Studies In Pessimism", "Arthur Schopenhauer")}
        {Book("https://www.youtube.com/watch?v=wnvQsK0KLfc", "Tarzan of the Apes", "Edgar Rice Burroughs")}
        {Book("https://www.youtube.com/watch?v=CMb4phUnSNI", "Tempest", "William Shakespeare")}
        {Book("https://www.youtube.com/watch?v=io8JSc5q3VA", "Theory of Relativity", "Albert Einstein")}
        {Book("https://www.youtube.com/watch?v=XODFEs8Gspk", "To Kill A Mockingbird", "Harper Lee")}
        {Book("https://www.youtube.com/watch?v=BZFIJ9p0c2A", "Treasure Island", "Robert Louis Stevenson")}
        {Book("https://www.youtube.com/watch?v=SAXvhAQwJK0", "Twelve Years a Slave", "Solomon Northup")}
        {Book("https://www.youtube.com/watch?v=2PLC139t8EY", "War of the Worlds", "H.G. Wells")}
        {Book("https://www.youtube.com/watch?v=X_6aaH2gtIg", "Walden", "Henry David Thoreau")}
        {Book("https://www.youtube.com/watch?v=AU3L62OomvQ", "Wind of the Willows", "Kenneth Grahame")}
        {Book("https://www.youtube.com/watch?v=jYIaUmnGLj4", "Wonderful Wizard of Oz", "L. Frank Baum")}
        {Book("https://www.youtube.com/watch?v=FzbOAR7N5WU", "Wuthering Heights", "Emily Brontë")}
      </ol>
    </React.Fragment>
  );
}
