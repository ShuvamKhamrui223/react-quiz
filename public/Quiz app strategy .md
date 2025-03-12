# quiz app structure

// Function to generate quiz questions with options and correct answers

```javascript
function generateQuizQuestions() {
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid", "Rome"],
            correctAnswer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            correctAnswer: "Mars"
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: ["Harper Lee", "Jane Austen", "Mark Twain", "Ernest Hemingway"],
            correctAnswer: "Harper Lee"
        },
        {
            question: "What is the largest mammal?",
            options: ["Elephant", "Blue Whale", "Great White Shark", "Giraffe"],
            correctAnswer: "Blue Whale"
        },
        {
            question: "What is the capital of Japan?",
            options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
            correctAnswer: "Tokyo"
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
            correctAnswer: "Leonardo da Vinci"
        },
        {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
            correctAnswer: "Mitochondria"
        },
        {
            question: "Which is the smallest planet in our solar system?",
            options: ["Venus", "Mars", "Mercury", "Earth"],
            correctAnswer: "Mercury"
        },
        {
            question: "What is the currency of the United Kingdom?",
            options: ["Dollar", "Euro", "Yen", "Pound Sterling"],
            correctAnswer: "Pound Sterling"
        },
        {
            question: "Which continent is known as the 'Dark Continent'?",
            options: ["Asia", "Africa", "South America", "Australia"],
            correctAnswer: "Africa"
        },
        {
            question: "What is the longest river in the world?",
            options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
            correctAnswer: "Nile"
        },
        {
            question: "What is the boiling point of water?",
            options: ["100°C", "50°C", "150°C", "75°C"],
            correctAnswer: "100°C"
        },
        {
            question: "Who is the author of '1984'?",
            options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "F. Scott Fitzgerald"],
            correctAnswer: "George Orwell"
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Pb", "Fe"],
            correctAnswer: "Au"
        },
        {
            question: "Which ocean is the largest?",
            options: ["Atlantic", "Indian", "Arctic", "Pacific"],
            correctAnswer: "Pacific"
        },
        {
            question: "Who invented the light bulb?",
            options: ["Alexander Bell", "Thomas Edison", "Nikola Tesla", "Benjamin Franklin"],
            correctAnswer: "Thomas Edison"
        },
        {
            question: "What is the main ingredient in guacamole?",
            options: ["Tomato", "Onion", "Avocado", "Pepper"],
            correctAnswer: "Avocado"
        },
        {
            question: "How many continents are there?",
            options: ["5", "6", "7", "8"],
            correctAnswer: "7"
        },
        {
            question: "What does DNA stand for?",
            options: ["Deoxyribonucleic Acid", "Dicarboxylic Nucleic Acid", "Deoxyribose Acid", "Double Helix Acid"],
            correctAnswer: "Deoxyribonucleic Acid"
        },
        {
            question: "Which language has the most native speakers?",
            options: ["English", "Spanish", "Chinese", "Hindi"],
            correctAnswer: "Chinese"
        },
    ];

    return questions;
}

// Usage
const quizQuestions = generateQuizQuestions();
console.log(quizQuestions);

// Function to generate entertainment-related quiz questions
function generateEntertainmentQuizQuestions() {
    const questions = [
        {
            question: "Who directed the movie 'Inception'?",
            options: ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Quentin Tarantino"],
            correctAnswer: "Christopher Nolan"
        },
        {
            question: "Which movie won the Oscar for Best Picture in 2020?",
            options: ["1917", "Parasite", "Joker", "Once Upon a Time in Hollywood"],
            correctAnswer: "Parasite"
        },
        {
            question: "Who played the character of Jack in 'Titanic'?",
            options: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Tom Hanks"],
            correctAnswer: "Leonardo DiCaprio"
        },
        {
            question: "Which movie features the quote, 'Here's looking at you, kid'?",
            options: ["Gone with the Wind", "Casablanca", "Citizen Kane", "The Godfather"],
            correctAnswer: "Casablanca"
        },
        {
            question: "In which year was the movie 'The Godfather' released?",
            options: ["1970", "1972", "1974", "1976"],
            correctAnswer: "1972"
        },
        {
            question: "Who starred as the main character in the movie 'The Matrix'?",
            options: ["Keanu Reeves", "Will Smith", "Tom Cruise", "Bruce Willis"],
            correctAnswer: "Keanu Reeves"
        },
        {
            question: "What is the highest-grossing movie of all time?",
            options: ["Titanic", "Avengers: Endgame", "Avatar", "Star Wars: The Force Awakens"],
            correctAnswer: "Avatar"
        },
        {
            question: "Which animated movie features a character named Woody?",
            options: ["Finding Nemo", "Toy Story", "Shrek", "The Lion King"],
            correctAnswer: "Toy Story"
        },
        {
            question: "Who played the character of Joker in 'The Dark Knight'?",
            options: ["Joaquin Phoenix", "Heath Ledger", "Jack Nicholson", "Jared Leto"],
            correctAnswer: "Heath Ledger"
        },
        {
            question: "What was the first movie in the Marvel Cinematic Universe?",
            options: ["Iron Man", "The Incredible Hulk", "Thor", "Captain America: The First Avenger"],
            correctAnswer: "Iron Man"
        },
        {
            question: "Who directed the 'Lord of the Rings' trilogy?",
            options: ["Peter Jackson", "George Lucas", "James Cameron", "Ridley Scott"],
            correctAnswer: "Peter Jackson"
        },
        {
            question: "Which actor voiced the character of Simba in 'The Lion King' (1994)?",
            options: ["Matthew Broderick", "Tom Hanks", "Robin Williams", "Hugh Jackman"],
            correctAnswer: "Matthew Broderick"
        },
        {
            question: "Which movie features the song 'My Heart Will Go On'?",
            options: ["The Bodyguard", "Dirty Dancing", "Titanic", "Ghost"],
            correctAnswer: "Titanic"
        },
        {
            question: "Which actor played the main character in the 'Pirates of the Caribbean' series?",
            options: ["Johnny Depp", "Orlando Bloom", "Tom Cruise", "Robert Downey Jr."],
            correctAnswer: "Johnny Depp"
        },
        {
            question: "What is the name of the wizarding school in the 'Harry Potter' series?",
            options: ["Hogwarts", "Ilvermorny", "Durmstrang", "Beauxbatons"],
            correctAnswer: "Hogwarts"
        },
        {
            question: "Who played the character of Forrest Gump?",
            options: ["Tom Hanks", "Morgan Freeman", "Robin Williams", "Robert De Niro"],
            correctAnswer: "Tom Hanks"
        },
        {
            question: "What year was the first 'Star Wars' movie released?",
            options: ["1975", "1977", "1979", "1981"],
            correctAnswer: "1977"
        },
        {
            question: "Which movie is known for the line 'I see dead people'?",
            options: ["The Sixth Sense", "The Exorcist", "Poltergeist", "The Shining"],
            correctAnswer: "The Sixth Sense"
        },
        {
            question: "Which actor portrayed Iron Man in the Marvel Cinematic Universe?",
            options: ["Chris Hemsworth", "Chris Evans", "Robert Downey Jr.", "Mark Ruffalo"],
            correctAnswer: "Robert Downey Jr."
        },
        {
            question: "In which movie does Tom Hanks play a character stranded on an island?",
            options: ["Saving Private Ryan", "The Terminal", "Cast Away", "Apollo 13"],
            correctAnswer: "Cast Away"
        },
    ];

    return questions;
}

```

// Usage

const entertainmentQuizQuestions = generateEntertainmentQuizQuestions();
console.log(entertainmentQuizQuestions);

To configure `json-server` with different routes like "entertainment," "food," and "sports," you can set up a JSON file that acts as a mini database. Each top-level key in the JSON object will act as a separate route. This setup lets you access each route and its specific data independently by using endpoints such as `/entertainment`, `/food`, and `/sports`.

## Step-by-Step Setup

1. **Create the JSON file (`db.json`)**:
   Define your data categories as keys at the top level in `db.json`. Here’s an example:

   ```json
   {
     "entertainment": [
       {
         "id": 1,
         "title": "Inception",
         "type": "movie",
         "director": "Christopher Nolan"
       },
       {
         "id": 2,
         "title": "Breaking Bad",
         "type": "tv show",
         "creator": "Vince Gilligan"
       }
     ],
     "food": [
       {
         "id": 1,
         "name": "Pizza",
         "cuisine": "Italian",
         "popularity": "high"
       },
       {
         "id": 2,
         "name": "Sushi",
         "cuisine": "Japanese",
         "popularity": "medium"
       }
     ],
     "sports": [
       {
         "id": 1,
         "name": "Football",
         "popularity": "high",
         "origin": "England"
       },
       {
         "id": 2,
         "name": "Basketball",
         "popularity": "high",
         "origin": "USA"
       }
     ]
   }
   ```

   - **Keys (`entertainment`, `food`, `sports`)**: Each top-level key represents a different route.
   - **Array of Objects**: Each route (like `/entertainment`) contains an array of objects with relevant data.

2. **Start `json-server`**:
   Run `json-server` by pointing it to your `db.json` file:

   ```bash
   json-server --watch db.json --port 3000
   ```

   This command will start `json-server` on `http://localhost:3000` by default. You can access different routes as follows:
   - `http://localhost:3000/entertainment`
   - `http://localhost:3000/food`
   - `http://localhost:3000/sports`

3. **Customize with Filters and Queries (Optional)**:
   `json-server` supports filters and queries for more granular control. For example:
   - `http://localhost:3000/entertainment?type=movie` – Retrieves only movies under the `entertainment` category.
   - `http://localhost:3000/food?cuisine=Italian` – Retrieves only Italian cuisine items.

4. **Use `_embed` and `_expand` (for Nested Data)**:
   If you want relationships between categories (like linking `entertainment` data to reviews), you could add another key, such as `reviews`, and use `_embed` or `_expand` with unique IDs to structure the data relationally.

### Example Usage

If you want to fetch all data from `entertainment`, a GET request to `http://localhost:3000/entertainment` will retrieve:

```json
[
  {
    "id": 1,
    "title": "Inception",
    "type": "movie",
    "director": "Christopher Nolan"
  },
  {
    "id": 2,
    "title": "Breaking Bad",
    "type": "tv show",
    "creator": "Vince Gilligan"
  }
]
```

This setup allows you to manage and access different categories of data easily, creating clear routes for each content type.

```json
{
  "History": [
    {
      "question": "Who was the first president of the United States?",
      "options": ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
      "correctAnswer": "George Washington"
    },
    {
      "question": "In which year did World War II end?",
      "options": ["1942", "1945", "1948", "1950"],
      "correctAnswer": "1945"
    },
    {
      "question": "Which ancient civilization built the pyramids?",
      "options": ["Roman", "Greek", "Egyptian", "Mesopotamian"],
      "correctAnswer": "Egyptian"
    },
    {
      "question": "Who was known as the 'Maid of Orléans'?",
      "options": ["Queen Victoria", "Marie Antoinette", "Joan of Arc", "Elizabeth I"],
      "correctAnswer": "Joan of Arc"
    },
    {
      "question": "Which empire was ruled by Julius Caesar?",
      "options": ["Macedonian", "Roman", "Ottoman", "Persian"],
      "correctAnswer": "Roman"
    },
    {
      "question": "Who discovered America in 1492?",
      "options": ["Leif Erikson", "Christopher Columbus", "Ferdinand Magellan", "Marco Polo"],
      "correctAnswer": "Christopher Columbus"
    },
    {
      "question": "What was the name of the ship on which the Pilgrims traveled to America?",
      "options": ["The Santa Maria", "The Mayflower", "The Nina", "The Pinta"],
      "correctAnswer": "The Mayflower"
    },
    {
      "question": "Who was the first man to set foot on the moon?",
      "options": ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "Yuri Gagarin"],
      "correctAnswer": "Neil Armstrong"
    },
    {
      "question": "Which war was fought between the North and South regions in the United States?",
      "options": ["World War I", "American Civil War", "Korean War", "Vietnam War"],
      "correctAnswer": "American Civil War"
    },
    {
      "question": "In which city was President John F. Kennedy assassinated?",
      "options": ["New York", "Dallas", "Los Angeles", "Washington D.C."],
      "correctAnswer": "Dallas"
    },
    {
      "question": "Which famous wall was built to separate East and West Berlin?",
      "options": ["The Berlin Wall", "The Great Wall", "The Western Wall", "Hadrian's Wall"],
      "correctAnswer": "The Berlin Wall"
    },
    {
      "question": "Who was the leader of the Soviet Union during World War II?",
      "options": ["Joseph Stalin", "Vladimir Lenin", "Nikita Khrushchev", "Mikhail Gorbachev"],
      "correctAnswer": "Joseph Stalin"
    },
    {
      "question": "Which queen ruled the United Kingdom the longest before Queen Elizabeth II?",
      "options": ["Queen Victoria", "Queen Anne", "Queen Mary", "Queen Elizabeth I"],
      "correctAnswer": "Queen Victoria"
    },
    {
      "question": "Who was the British Prime Minister during World War II?",
      "options": ["Winston Churchill", "Neville Chamberlain", "Margaret Thatcher", "Tony Blair"],
      "correctAnswer": "Winston Churchill"
    },
    {
      "question": "Which country was Adolf Hitler born in?",
      "options": ["Germany", "Austria", "Switzerland", "Poland"],
      "correctAnswer": "Austria"
    },
    {
      "question": "Who was the Egyptian queen known for her relationship with Julius Caesar and Mark Antony?",
      "options": ["Cleopatra", "Nefertiti", "Hatshepsut", "Isis"],
      "correctAnswer": "Cleopatra"
    },
    {
      "question": "What year did the French Revolution begin?",
      "options": ["1789", "1776", "1799", "1804"],
      "correctAnswer": "1789"
    },
    {
      "question": "Which document was signed in 1215 limiting the power of the English monarchy?",
      "options": ["The Magna Carta", "The Bill of Rights", "The Constitution", "The Treaty of Versailles"],
      "correctAnswer": "The Magna Carta"
    },
    {
      "question": "Who was the first emperor of China?",
      "options": ["Qin Shi Huang", "Han Gaozu", "Liu Bang", "Wu Zetian"],
      "correctAnswer": "Qin Shi Huang"
    },
    {
      "question": "What was the ancient name of Iraq?",
      "options": ["Mesopotamia", "Persia", "Babylon", "Assyria"],
      "correctAnswer": "Mesopotamia"
    }
  ]
}

{
  "Geography": [
    {
      "question": "What is the capital city of Canada?",
      "options": ["Toronto", "Vancouver", "Montreal", "Ottawa"],
      "correctAnswer": "Ottawa"
    },
    {
      "question": "Which continent is the Sahara Desert located on?",
      "options": ["Asia", "Africa", "Australia", "South America"],
      "correctAnswer": "Africa"
    },
    {
      "question": "What is the longest river in the world?",
      "options": ["Amazon", "Nile", "Yangtze", "Mississippi"],
      "correctAnswer": "Nile"
    },
    {
      "question": "Mount Everest is located in which mountain range?",
      "options": ["Andes", "Rockies", "Himalayas", "Alps"],
      "correctAnswer": "Himalayas"
    },
    {
      "question": "What is the largest country by land area?",
      "options": ["China", "United States", "Russia", "Canada"],
      "correctAnswer": "Russia"
    },
    {
      "question": "Which ocean is the largest?",
      "options": ["Atlantic", "Indian", "Southern", "Pacific"],
      "correctAnswer": "Pacific"
    },
    {
      "question": "What is the smallest country in the world?",
      "options": ["Monaco", "Malta", "Vatican City", "San Marino"],
      "correctAnswer": "Vatican City"
    },
    {
      "question": "Which U.S. state is the Grand Canyon located in?",
      "options": ["Nevada", "California", "Arizona", "New Mexico"],
      "correctAnswer": "Arizona"
    },
    {
      "question": "In which country can you find the Eiffel Tower?",
      "options": ["Italy", "France", "Spain", "Germany"],
      "correctAnswer": "France"
    },
    {
      "question": "What is the official language of Brazil?",
      "options": ["Spanish", "Portuguese", "English", "French"],
      "correctAnswer": "Portuguese"
    },
    {
      "question": "What is the capital city of Australia?",
      "options": ["Sydney", "Melbourne", "Brisbane", "Canberra"],
      "correctAnswer": "Canberra"
    },
    {
      "question": "Which country has the most natural lakes?",
      "options": ["Canada", "Brazil", "Russia", "United States"],
      "correctAnswer": "Canada"
    },
    {
      "question": "Which river flows through Paris?",
      "options": ["Thames", "Seine", "Danube", "Elbe"],
      "correctAnswer": "Seine"
    },
    {
      "question": "What country is known as the Land of the Rising Sun?",
      "options": ["China", "Japan", "South Korea", "Thailand"],
      "correctAnswer": "Japan"
    },
    {
      "question": "Which continent has the highest number of countries?",
      "options": ["Asia", "Africa", "Europe", "South America"],
      "correctAnswer": "Africa"
    },
    {
      "question": "What is the capital city of Egypt?",
      "options": ["Cairo", "Alexandria", "Luxor", "Giza"],
      "correctAnswer": "Cairo"
    },
    {
      "question": "Which country is the Great Barrier Reef located in?",
      "options": ["Australia", "New Zealand", "Indonesia", "Thailand"],
      "correctAnswer": "Australia"
    },
    {
      "question": "Which U.S. state is known as the 'Sunshine State'?",
      "options": ["California", "Hawaii", "Florida", "Arizona"],
      "correctAnswer": "Florida"
    },
    {
      "question": "What is the largest island in the world?",
      "options": ["Borneo", "Greenland", "New Guinea", "Madagascar"],
      "correctAnswer": "Greenland"
    },
    {
      "question": "What is the capital city of Italy?",
      "options": ["Venice", "Rome", "Milan", "Florence"],
      "correctAnswer": "Rome"
    }
  ]
}

{
  "Science & Nature": [
    {
      "question": "What planet is known as the Red Planet?",
      "options": ["Earth", "Mars", "Jupiter", "Venus"],
      "correctAnswer": "Mars"
    },
    {
      "question": "What gas do plants absorb from the atmosphere?",
      "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      "correctAnswer": "Carbon Dioxide"
    },
    {
      "question": "What is the hardest natural substance on Earth?",
      "options": ["Gold", "Iron", "Diamond", "Silver"],
      "correctAnswer": "Diamond"
    },
    {
      "question": "How many bones are in the adult human body?",
      "options": ["206", "201", "210", "198"],
      "correctAnswer": "206"
    },
    {
      "question": "What is the chemical symbol for gold?",
      "options": ["G", "Ag", "Au", "Go"],
      "correctAnswer": "Au"
    },
    {
      "question": "What is the powerhouse of the cell?",
      "options": ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
      "correctAnswer": "Mitochondria"
    },
    {
      "question": "Which animal is the largest land animal?",
      "options": ["Elephant", "Giraffe", "Hippopotamus", "Rhinoceros"],
      "correctAnswer": "Elephant"
    },
    {
      "question": "Which planet has the most moons?",
      "options": ["Earth", "Mars", "Jupiter", "Saturn"],
      "correctAnswer": "Jupiter"
    },
    {
      "question": "What process do plants use to make food?",
      "options": ["Respiration", "Photosynthesis", "Transpiration", "Germination"],
      "correctAnswer": "Photosynthesis"
    },
    {
      "question": "What is the boiling point of water?",
      "options": ["90°C", "100°C", "110°C", "120°C"],
      "correctAnswer": "100°C"
    },
    {
      "question": "What is the most abundant gas in the Earth's atmosphere?",
      "options": ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
      "correctAnswer": "Nitrogen"
    },
    {
      "question": "What is the chemical formula for table salt?",
      "options": ["NaCl", "KCl", "Na2O", "Cl2O"],
      "correctAnswer": "NaCl"
    },
    {
      "question": "Which organ is responsible for pumping blood in the body?",
      "options": ["Brain", "Lungs", "Heart", "Kidneys"],
      "correctAnswer": "Heart"
    },
    {
      "question": "What is the primary gas in the sun?",
      "options": ["Oxygen", "Carbon Dioxide", "Hydrogen", "Helium"],
      "correctAnswer": "Hydrogen"
    },
    {
      "question": "What part of the plant conducts photosynthesis?",
      "options": ["Root", "Stem", "Leaf", "Flower"],
      "correctAnswer": "Leaf"
    },
    {
      "question": "What type of animal is a dolphin?",
      "options": ["Fish", "Bird", "Reptile", "Mammal"],
      "correctAnswer": "Mammal"
    },
    {
      "question": "Which planet is closest to the sun?",
      "options": ["Venus", "Earth", "Mercury", "Mars"],
      "correctAnswer": "Mercury"
    },
    {
      "question": "How many planets are in the solar system?",
      "options": ["7", "8", "9", "10"],
      "correctAnswer": "8"
    },
    {
      "question": "What is the largest internal organ in the human body?",
      "options": ["Heart", "Liver", "Lungs", "Kidney"],
      "correctAnswer": "Liver"
    },
    {
      "question": "What mineral is the hardest on the Mohs hardness scale?",
      "options": ["Quartz", "Topaz", "Diamond", "Corundum"],
      "correctAnswer": "Diamond"
    }
  ]
}

{
  "General Knowledge": [
    {
      "question": "What is the largest ocean on Earth?",
      "options": ["Atlantic", "Indian", "Arctic", "Pacific"],
      "correctAnswer": "Pacific"
    },
    {
      "question": "Who invented the telephone?",
      "options": ["Alexander Graham Bell", "Nikola Tesla", "Thomas Edison", "Guglielmo Marconi"],
      "correctAnswer": "Alexander Graham Bell"
    },
    {
      "question": "What year did the Titanic sink?",
      "options": ["1912", "1911", "1905", "1920"],
      "correctAnswer": "1912"
    },
    {
      "question": "What is the currency of Japan?",
      "options": ["Yuan", "Won", "Yen", "Dollar"],
      "correctAnswer": "Yen"
    },
    {
      "question": "What is the largest planet in our solar system?",
      "options": ["Earth", "Mars", "Jupiter", "Saturn"],
      "correctAnswer": "Jupiter"
    },
    {
      "question": "Who painted the Mona Lisa?",
      "options": ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
      "correctAnswer": "Leonardo da Vinci"
    },
    {
      "question": "What is the longest river in the world?",
      "options": ["Amazon", "Nile", "Yangtze", "Mississippi"],
      "correctAnswer": "Nile"
    },
    {
      "question": "How many continents are there?",
      "options": ["5", "6", "7", "8"],
      "correctAnswer": "7"
    },
    {
      "question": "What is the capital of Australia?",
      "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      "correctAnswer": "Canberra"
    },
    {
      "question": "Who discovered penicillin?",
      "options": ["Alexander Fleming", "Marie Curie", "Isaac Newton", "Louis Pasteur"],
      "correctAnswer": "Alexander Fleming"
    },
    {
      "question": "What is the largest mammal in the world?",
      "options": ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
      "correctAnswer": "Blue Whale"
    },
    {
      "question": "Which country gifted the Statue of Liberty to the United States?",
      "options": ["France", "Canada", "Germany", "England"],
      "correctAnswer": "France"
    },
    {
      "question": "What is the smallest country in the world?",
      "options": ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
      "correctAnswer": "Vatican City"
    },
    {
      "question": "Who was the first person to walk on the moon?",
      "options": ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
      "correctAnswer": "Neil Armstrong"
    },
    {
      "question": "What is the capital of Canada?",
      "options": ["Toronto", "Ottawa", "Montreal", "Vancouver"],
      "correctAnswer": "Ottawa"
    },
    {
      "question": "Which element has the chemical symbol 'O'?",
      "options": ["Osmium", "Oxygen", "Gold", "Opal"],
      "correctAnswer": "Oxygen"
    },
    {
      "question": "What is the main ingredient in traditional guacamole?",
      "options": ["Tomato", "Avocado", "Onion", "Pepper"],
      "correctAnswer": "Avocado"
    },
    {
      "question": "How many players are on a baseball team?",
      "options": ["8", "9", "10", "11"],
      "correctAnswer": "9"
    },
    {
      "question": "What is the national language of Brazil?",
      "options": ["Spanish", "Portuguese", "English", "French"],
      "correctAnswer": "Portuguese"
    },
    {
      "question": "Who was the author of 'Pride and Prejudice'?",
      "options": ["Jane Austen", "Charles Dickens", "Emily Bronte", "Mark Twain"],
      "correctAnswer": "Jane Austen"
    }
  ]
}

{
  "Literature": [
    {
      "question": "Who wrote '1984'?",
      "options": ["George Orwell", "Aldous Huxley", "J.R.R. Tolkien", "F. Scott Fitzgerald"],
      "correctAnswer": "George Orwell"
    },
    {
      "question": "Who is the author of 'Pride and Prejudice'?",
      "options": ["Charlotte Brontë", "Jane Austen", "Virginia Woolf", "Emily Dickinson"],
      "correctAnswer": "Jane Austen"
    },
    {
      "question": "What is the title of the first Harry Potter book?",
      "options": ["Harry Potter and the Philosopher's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Goblet of Fire", "Harry Potter and the Prisoner of Azkaban"],
      "correctAnswer": "Harry Potter and the Philosopher's Stone"
    },
    {
      "question": "Which author wrote 'The Great Gatsby'?",
      "options": ["Ernest Hemingway", "F. Scott Fitzgerald", "William Faulkner", "John Steinbeck"],
      "correctAnswer": "F. Scott Fitzgerald"
    },
    {
      "question": "What novel begins with the sentence, 'Call me Ishmael'?",
      "options": ["Moby-Dick", "The Old Man and the Sea", "The Catcher in the Rye", "The Great Gatsby"],
      "correctAnswer": "Moby-Dick"
    },
    {
      "question": "Who wrote 'To Kill a Mockingbird'?",
      "options": ["Harper Lee", "Mark Twain", "Toni Morrison", "J.D. Salinger"],
      "correctAnswer": "Harper Lee"
    },
    {
      "question": "In which novel would you find the character Atticus Finch?",
      "options": ["The Catcher in the Rye", "To Kill a Mockingbird", "1984", "Pride and Prejudice"],
      "correctAnswer": "To Kill a Mockingbird"
    },
    {
      "question": "What is the name of the main character in 'The Catcher in the Rye'?",
      "options": ["Tom Sawyer", "Nick Carraway", "Holden Caulfield", "Jay Gatsby"],
      "correctAnswer": "Holden Caulfield"
    },
    {
      "question": "Which book was written by George Orwell and deals with the theme of totalitarianism?",
      "options": ["Brave New World", "Fahrenheit 451", "1984", "Animal Farm"],
      "correctAnswer": "1984"
    },
    {
      "question": "Who is the author of 'The Hobbit'?",
      "options": ["J.R.R. Tolkien", "C.S. Lewis", "J.K. Rowling", "George R.R. Martin"],
      "correctAnswer": "J.R.R. Tolkien"
    },
    {
      "question": "Who wrote 'Frankenstein'?",
      "options": ["Mary Shelley", "Bram Stoker", "H.G. Wells", "Charles Dickens"],
      "correctAnswer": "Mary Shelley"
    },
    {
      "question": "Which novel features the characters of Elizabeth Bennet and Mr. Darcy?",
      "options": ["Pride and Prejudice", "Jane Eyre", "Sense and Sensibility", "Wuthering Heights"],
      "correctAnswer": "Pride and Prejudice"
    },
    {
      "question": "Who wrote 'Crime and Punishment'?",
      "options": ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Vladimir Nabokov"],
      "correctAnswer": "Fyodor Dostoevsky"
    },
    {
      "question": "In which book is the character of Sherlock Holmes introduced?",
      "options": ["A Study in Scarlet", "The Sign of Four", "The Hound of the Baskervilles", "The Adventures of Sherlock Holmes"],
      "correctAnswer": "A Study in Scarlet"
    },
    {
      "question": "Who wrote 'The Picture of Dorian Gray'?",
      "options": ["Oscar Wilde", "Edgar Allan Poe", "Mark Twain", "George Bernard Shaw"],
      "correctAnswer": "Oscar Wilde"
    },
    {
      "question": "What is the title of the first book in the 'A Song of Ice and Fire' series?",
      "options": ["A Clash of Kings", "A Game of Thrones", "A Storm of Swords", "The Winds of Winter"],
      "correctAnswer": "A Game of Thrones"
    },
    {
      "question": "Who wrote 'Moby-Dick'?",
      "options": ["Herman Melville", "Nathaniel Hawthorne", "Edgar Allan Poe", "Mark Twain"],
      "correctAnswer": "Herman Melville"
    },
    {
      "question": "What is the title of the novel in which the character Gatsby appears?",
      "options": ["Moby-Dick", "The Great Gatsby", "The Catcher in the Rye", "The Old Man and the Sea"],
      "correctAnswer": "The Great Gatsby"
    },
    {
      "question": "Which Shakespeare play is the phrase 'To be or not to be' from?",
      "options": ["Macbeth", "Romeo and Juliet", "Hamlet", "Julius Caesar"],
      "correctAnswer": "Hamlet"
    },
    {
      "question": "Who wrote 'The Brothers Karamazov'?",
      "options": ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Vladimir Nabokov"],
      "correctAnswer": "Fyodor Dostoevsky"
    },
    {
      "question": "Which novel by Emily Brontë is set on the Yorkshire moors?",
      "options": ["Jane Eyre", "Wuthering Heights", "The Tenant of Wildfell Hall", "North and South"],
      "correctAnswer": "Wuthering Heights"
    },
    {
      "question": "Who wrote 'The Grapes of Wrath'?",
      "options": ["Ernest Hemingway", "John Steinbeck", "F. Scott Fitzgerald", "Mark Twain"],
      "correctAnswer": "John Steinbeck"
    },
    {
      "question": "In which book would you find the character of Captain Ahab?",
      "options": ["Moby-Dick", "Treasure Island", "The Old Man and the Sea", "20,000 Leagues Under the Sea"],
      "correctAnswer": "Moby-Dick"
    },
    {
      "question": "Which book was written by J.R.R. Tolkien and features the journey of Bilbo Baggins?",
      "options": ["The Hobbit", "The Fellowship of the Ring", "The Two Towers", "The Return of the King"],
      "correctAnswer": "The Hobbit"
    },
    {
      "question": "Who wrote 'The Call of the Wild'?",
      "options": ["Jack London", "Ernest Hemingway", "Mark Twain", "John Steinbeck"],
      "correctAnswer": "Jack London"
    },
    {
      "question": "In which book does the character of Frodo Baggins appear?",
      "options": ["The Hobbit", "The Fellowship of the Ring", "The Two Towers", "The Return of the King"],
      "correctAnswer": "The Fellowship of the Ring"
    },
    {
      "question": "Who wrote 'Don Quixote'?",
      "options": ["Miguel de Cervantes", "Gabriel García Márquez", "Carlos Ruiz Zafón", "Jorge Luis Borges"],
      "correctAnswer": "Miguel de Cervantes"
    },
    {
      "question": "Which classic novel begins with the line, 'It was the best of times, it was the worst of times'?",
      "options": ["The Tale of Two Cities", "Moby-Dick", "Crime and Punishment", "War and Peace"],
      "correctAnswer": "The Tale of Two Cities"
    },
    {
      "question": "Who wrote 'The Road'?",
      "options": ["Cormac McCarthy", "John Steinbeck", "Mark Twain", "William Faulkner"],
      "correctAnswer": "Cormac McCarthy"
    },
    {
      "question": "Which book is set in the fictional town of Maycomb?",
      "options": ["To Kill a Mockingbird", "The Catcher in the Rye", "The Great Gatsby", "1984"],
      "correctAnswer": "To Kill a Mockingbird"
    },
    {
      "question": "Who wrote 'Brave New World'?",
      "options": ["Aldous Huxley", "George Orwell", "H.G. Wells", "Ray Bradbury"],
      "correctAnswer": "Aldous Huxley"
    }
  ]
}
```

Here's an outline for a **Quiz App** built with **React.js**. The structure includes the key components and pages to organize the app effectively, along with basic flow and some component suggestions.

### Project Structure

```code
quiz-app/
├── public/
│   ├── index.html
│   └── assets/
│       └── images/
├── src/
│   ├── assets/            # Images, icons, or static assets
│   ├── components/        # Reusable components
│   │   ├── Button.js
│   │   ├── QuestionCard.js
│   │   ├── Timer.js
│   │   └── Result.js
│   ├── pages/             # Pages for different views
│   │   ├── Home.js        # Home page, start quiz button
│   │   ├── Quiz.js        # Main quiz page with questions
│   │   ├── ResultPage.js  # Results page after quiz completion
│   ├── hooks/             # Custom hooks
│   │   ├── useTimer.js    # Timer hook
│   │   ├── useQuiz.js     # Handle quiz logic (question switching, scoring)
│   ├── App.js             # Main App component
│   ├── index.js           # Entry point
│   └── styles/            # Tailwind or custom styles
│       └── global.css     # Global styles (Tailwind or custom)
├── package.json
├── tailwind.config.js     # Tailwind config file
└── .gitignore
```

### Component Details

1. **Button.js**
   - A reusable button component.
   - Props: `text`, `onClick`, `className`
   - Example: A button to start the quiz or submit an answer.

2. **QuestionCard.js**
   - Displays a question with multiple-choice answers.
   - Props: `question`, `options`, `onAnswerSelected`
   - Handles rendering options and triggers selection logic.

3. **Timer.js**
   - A countdown timer for each question.
   - Props: `seconds`, `onTimeUp`
   - Can use the `useTimer` custom hook to manage the timer.

4. **Result.js**
   - Displays the result page with a score and the answers selected.
   - Props: `score`, `totalQuestions`, `answers`
   - Shows a message based on the score (e.g., "Great job!" or "Try again!").

### Pages Details

1. **Home.js**
   - Displays a welcome message and a button to start the quiz.
   - A simple landing page with basic instructions.

2. **Quiz.js**
   - Main page for the quiz.
   - Uses the `QuestionCard`, `Button`, and `Timer` components.
   - Handles the question flow (next question on answer selection).
   - Keeps track of the user's answers and score.

3. **ResultPage.js**
   - Displays results after completing the quiz.
   - Shows the score, correct answers, and a message based on the score.

### Custom Hooks

1. **useTimer.js**
   - Custom hook to manage the quiz timer.
   - Provides time left and a function to reset the timer.
   - Use `setInterval` to count down the time, and clear it when time is up.

2. **useQuiz.js**
   - Custom hook to manage the quiz state.
   - Manages the questions, answers, and score.
   - Functions like `nextQuestion()`, `submitAnswer()`, and `calculateScore()`.

### Example Flow

1. **Home Page (Home.js)**
   - The user sees a start button to begin the quiz.
   - Clicking "Start Quiz" navigates to the Quiz page.

2. **Quiz Page (Quiz.js)**
   - Displays a question and multiple-choice answers.
   - After selecting an answer, it moves to the next question.
   - A timer is displayed for each question.

3. **Result Page (ResultPage.js)**
   - After completing all the questions, the user is shown their score.
   - Optionally, show a list of correct/incorrect answers.
   - Option to retake the quiz.

### Example App.js

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### Example Quiz Page (Quiz.js)

```jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';
import Timer from '../components/Timer';
import { useQuiz } from '../hooks/useQuiz';

function Quiz() {
  const { questionIndex, score, questions, nextQuestion, submitAnswer, totalQuestions } = useQuiz();
  const [timeLeft, setTimeLeft] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 0) {
          nextQuestion();
          return 30; // Reset timer to 30 seconds
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [nextQuestion]);

  if (!questions || questions.length === 0) {
    return <div>Loading...</div>;
  }

  const question = questions[questionIndex];

  const handleAnswer = (selectedAnswer) => {
    submitAnswer(selectedAnswer);
    nextQuestion();
  };

  return (
    <div>
      <Timer timeLeft={timeLeft} />
      <QuestionCard question={question} onAnswerSelected={handleAnswer} />
    </div>
  );
}

export default Quiz;
```

### Styling (Tailwind)

To set up **Tailwind CSS** in your React app, follow these steps:

1. Install Tailwind via npm:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

2. In your `tailwind.config.js`, enable JIT mode:

   ```js
   module.exports = {
     content: [
       './src/**/*.{js,jsx,ts,tsx}',
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

3. Add the following to your `src/index.css`:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. Start using Tailwind classes in your components.

### Final Notes

- **State Management**: You can use **React Context** or **Redux** if your app grows more complex.
- **Routing**: Use **React Router** to navigate between the Home, Quiz, and Result pages.
- **Quiz Data**: Store quiz data in a static file or an API.

This structure should give you a clean, modular foundation to build your quiz app. You can expand it by adding features like difficulty levels, categories, or sharing results on social media.

To implement pagination using `searchParams` (query parameters) instead of `useState` for the page management, you can utilize **React Router's `useSearchParams`** hook. This allows you to read and modify query parameters in the URL, which is a great way to manage state without relying on internal React state.

Here's how you can achieve this:

### Steps to Implement Pagination with `searchParams`

1. **Install `react-router-dom`**:
   If you're not already using React Router in your app, you'll need to install it.

   ```bash
   npm install react-router-dom
   ```

2. **Create Paginated Component Using `searchParams`**:

   Here's how you can modify the `PaginatedPosts` component to use the `useSearchParams` hook instead of `useState` for page management.

   ```jsx
   import React, { useEffect, useState } from "react";
   import { useSearchParams } from "react-router-dom";
   import axios from "axios";

   function PaginatedPosts() {
     const [posts, setPosts] = useState([]);
     const [loading, setLoading] = useState(true);
     const [totalPages, setTotalPages] = useState(1);
     const postsPerPage = 3;  // Number of posts per page

     // Get and set search params (including current page)
     const [searchParams, setSearchParams] = useSearchParams();
     const currentPage = parseInt(searchParams.get("page")) || 1;

     // Fetch posts with pagination
     useEffect(() => {
       setLoading(true);
       axios
         .get(`http://localhost:5000/posts?_page=${currentPage}&_limit=${postsPerPage}`)
         .then((response) => {
           setPosts(response.data);
           // Calculate total pages based on X-Total-Count header
           const totalCount = response.headers["x-total-count"];
           setTotalPages(Math.ceil(totalCount / postsPerPage));
         })
         .catch((error) => {
           console.error("Error fetching posts:", error);
         })
         .finally(() => {
           setLoading(false);
         });
     }, [currentPage]);

     // Handle page change
     const handlePageChange = (page) => {
       setSearchParams({ page });
     };

     return (
       <div>
         {loading ? (
           <p>Loading...</p>
         ) : (
           <div>
             <ul>
               {posts.map((post) => (
                 <li key={post.id}>
                   <h3>{post.title}</h3>
                   <p>{post.content}</p>
                 </li>
               ))}
             </ul>
             <div className="pagination">
               <button
                 disabled={currentPage === 1}
                 onClick={() => handlePageChange(currentPage - 1)}
               >
                 Previous
               </button>
               <span>Page {currentPage} of {totalPages}</span>
               <button
                 disabled={currentPage === totalPages}
                 onClick={() => handlePageChange(currentPage + 1)}
               >
                 Next
               </button>
             </div>
           </div>
         )}
       </div>
     );
   }

   export default PaginatedPosts;
   ```

### Explanation

1. **useSearchParams Hook**:
   - `const [searchParams, setSearchParams] = useSearchParams();`: This hook is used to access and modify the query parameters in the URL.
   - `const currentPage = parseInt(searchParams.get("page")) || 1;`: This extracts the `page` query parameter from the URL. If it doesn't exist, it defaults to page `1`.

2. **Fetching Data with Pagination**:
   - The `axios` request fetches the posts from the `json-server` API using `_page` and `_limit` query parameters for pagination.
   - The `totalCount` in the response headers is used to calculate the `totalPages`.

3. **Page Navigation**:
   - The `handlePageChange` function modifies the `searchParams` using `setSearchParams`. This updates the query parameter in the URL, which automatically triggers a re-render with the new page data.
   - `Previous` and `Next` buttons control page navigation by updating the `page` parameter in the URL.

4. **Benefits**:
   - Using `searchParams` makes the pagination state part of the URL, which is a more declarative and accessible way to manage state.
   - The user can share the URL with specific page numbers, and the page will load with the correct state even if the page is refreshed.
   - URL parameters can also be bookmarked, making the app more user-friendly.

### Example URL

For example, the URL might look like this:

```bash
http://localhost:3000/posts?page=2
```

This will show page 2 of the posts. When you click the `Next` button, the URL will update to `?page=3` and fetch the next page's data.

### Conclusion

This approach using **`useSearchParams`** provides a clean and efficient way to manage pagination in your React app by leveraging the URL for state. It's especially useful for scenarios where you want to allow users to bookmark or share specific pages of content.
