import React, { Component } from 'react';
import cards from "./cards.json"; 
import Card from "./components/Card/card.js"; 
import Scoreboard from "./components/Scoreboard/score.js"; 
import Footer from "./components/Footer/footer.js"; 
import './App.css';

class App extends Component {
  state = {
    cards, 
    score: 0, 
    highScore: 0, 
    alert: 0, 
    success: 0, 
    clickedImages: [], 
  }; 

  shuffle = (a) => {
    for (let i = a.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
      [a[i], a[j]] = [a[j], a[i]]; 
    }
    return a;
  }; 

  clickedImage = id => {

    let clickedImages = this.state.clickedImages; 
    let score = this.state.score; 
    let highScore = this.state.highScore; 
    this.setState({
      alert: 0
    });

    if (clickedImages.indexOf(id) === -1) {
      clickedImages.push(id); 
      this.userScore(); 
      this.reshuffle();
    } else if (this.state.score === 12) {
      this.setState({
        success: 1, 
        score: 0, 
        clickedImages: []
      }); 
    } else {
      this.setState({
        score: 0, 
        clickedImages: []
      }); 
      this.setState({
        alert: 1
      }); 
    }

    if (score > highScore) {
      this.setState({
        highScore: score,
      }); 
    }
  }; 

userScore = () => {
  this.setState({ score: this.state.score + 1 }); 
}; 

reshuffle = () => {
  this.setState({ cards: this.shuffle(cards) }); 
}; 

render() {

  return (

    <div className ="container">
      <div className = "alert alert-danger"
      style={{ opacity: this.state.alert}} >
        You already caught this one!
      </div>
      <div className="alert alert-success"
      style={{ opacity: this.state.success }}>
        You're doing great! Keep going! 
      </div>
      <div className="scoreboard">
      <Scoreboard 
      title="Pokemon Clicky Game"
      score={this.state.score}
      highScore={this.state.highScore}
        />
        </div>
      {
        this.state.cards && this.state.cards.map(card => (
          <Card 
          key={card.id }
          id={card.id}
          name={card.name}
          image={card.image}
          clickedImage={this.clickedImage}
          />
        ))
      }
  
    
      <Footer />
    </div>); 
}
}

export default App;
