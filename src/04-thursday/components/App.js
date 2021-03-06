import "./App.css";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import { useState } from "react";

/*
[
  {
    "name": "Harry Potter",
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "31-07-1980",
    "yearOfBirth": 1980,
    "ancestry": "half-blood",
    "eyeColour": "green",
    "hairColour": "black",
    "wand": { "wood": "holly", "core": "phoenix feather", "length": 11 },
    "patronus": "stag",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Daniel Radcliffe",
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/harry.jpg"
  },
] 
*/
function App({ data }) {
  const [activeHouse, setActiveHouse] = useState("All");

  function handleHouseButtonClick(house) {
    setActiveHouse(house);
  }

  const filteredData = data.filter((character) => {
    return character.house === activeHouse;
  });

  const shownData = activeHouse === "All" ? data : filteredData;

  // emoji
  /*
  initialEmojiState Example data:
  [
    {
      name: "Harry Potter",
      emoji: ""
    },
    {
      name: "Ron Weasley",
      emoji: ""
    },
    ...
  ] 
  */
  const initialEmojiState = data.map((character) => ({
    name: character.name,
    emoji: "",
  }));
  const [emojiData, setEmojiData] = useState(initialEmojiState);

  // removable emoji
  function handleEmojiButtonClick(newEmoji, characterName) {
    const changedEmojiData = emojiData.map((item) => {
      if (item.name === characterName) {
        return {
          name: characterName,
          emoji: newEmoji,
        };
      } else {
        return item;
      }
    });
    setEmojiData(changedEmojiData);
  }

  return (
    <div className="app">
      <Header title="Harry Potter App" />
      <main>
        {shownData.map((character) => (
          <Card
            characterName={character.name}
            house={character.house}
            imgUrl={character.image}
            key={character.name}
            onEmojiButtonClick={handleEmojiButtonClick}
            emoji={emojiData.find((item) => item.name === character.name).emoji}
          />
        ))}
      </main>
      <Footer
        activeHouse={activeHouse}
        onHouseButtonClick={handleHouseButtonClick}
      />
    </div>
  );
}

export default App;
