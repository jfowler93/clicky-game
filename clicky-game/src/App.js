import React, {Component} from 'react';
import Card from "./components/Card";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper"
import Title from "./components/Title"
import people from "./cards.json"
import './App.css';

function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  state = {
    people,
    currentScore: 0,
    highScore: 0,
    message: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({clicked: this.state.clicked.concat(id)});
    } else{
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      message: "You're the Master of Karate and Friendship for everyone"
    })
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      message: "I AM UNTETHERED AND MY RAGE KNOWS NO BOUNDS",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCards = shuffleCards(people);
    this.setState({people: shuffledCards});
  };

  render() {
    return (
      <Wrapper>
        <Nav
        title= "Clickity Cricket"
        score={this.state.currentScore}
        highScore={this.state.highScore}
        message={this.state.message}
        />

        <Title>
          Test Your Memory! Click an image to earn points. If you click an image more than once, you lose!
        </Title>
        {this.state.people.map(people => (
          <Card
          key={people.id}
          handleClick={this.handleClick}
          handleIncrement={this.handleIncrement}
          handleReset={this.handleReset}
          handleShuffle={this.handleShuffle}
          id={people.id}
          image={people.image}
          />
        ))}
      </Wrapper>
    );
  }
}
 

export default App;
