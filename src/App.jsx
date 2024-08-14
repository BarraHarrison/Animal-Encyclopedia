import React, { useState } from 'react';
import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';
import SearchBar from './components/SearchBar';
import './App.css';


const animals = [
  "aardvark", "albatross", "alligator",
  "baboon", "badger", "bat", "bear",
  "camel", "canary", "cat", "caterpillar",
  "deer", "dingo", "dog", "dolphin",
  "eagle", "eel", "elephant", "elk",
  "falcon", "ferret", "finch", "flamingo",
  "gazelle", "gecko", "giraffe", "goat",
  "hare", "hawk", "hedgehog", "hen",
  "iguana", "impala",
  "jackal", "jaguar", "jay",
  "kangaroo", "kingfisher", "koala",
  "lemur", "leopard", "lion", "lizard",
  "magpie", "manatee", "mandrill", "marmoset",
  "narwhal", "newt", "nightingale",
  "octopus", "ocelot", "owl",
  "panda", "panther", "parrot", "peacock",
  "rabbit", "raccoon", "rat", "reindeer",
  "salamander", "salmon", "seal", "shark",
  "tiger", "toucan", "turkey", "turtle",
  "whale", "wolf", "wombat", "woodpecker",
  "yak", "zebra"
];


function App() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Ensure the array remains unaltered and filtered correctly
  const filteredAnimals = [...animals].filter(animal =>
    animal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log('Search Term:', searchTerm);
  console.log('Filtered Animals:', filteredAnimals);

  return (
    <div className="App">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AnimalList animals={filteredAnimals} setSelectedAnimal={setSelectedAnimal} />
      {selectedAnimal && <AnimalDetail animal={selectedAnimal} />}
    </div>
  );
}

export default App;
