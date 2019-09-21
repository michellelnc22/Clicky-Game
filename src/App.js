import React, { Component } from 'react';
import Card from "./components/cards"; 
import Scoreboard from "./components/scoreboard"; 
import Footer from "./components/footer"; 
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
    }

    if (score > highScore) {
      this.setState({
        highScore: score
      }); 
    }

  }; 

userScore = () => {
  this.setState({ score: this.state.score + 1 }); 
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
      <Scoreboard 

      title="Pokemon Clicky Game"
      score={this.state.score}
      highScore={this.state.highScore}
      />

      <div className="row">
      {this.state.cards.map(picture => (
        <Card 
        key={picture.id}
        id={picture.id}
        name={picture.name}
        image={picture.image}
        clickedImage={this.clickedImage}
        />
      ))}
      </div>
      <Footer />
    </div> 
  ); 
}
}

export default App;
