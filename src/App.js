import React from 'react';
import './App.css';
let cytaty = [['Anthony Burgess','"If he can only perform good or only perform evil, then he is a clockwork orange"'],['Frank Sinatra','"The best revenge is massive success"'], ['Tony Stark','"I Am Iron Man"']];
let color = ["cyan", "magenta", "yellow", "red"];
class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          selectedAutor: null,
          clicked: false,
          random: Math.floor(Math.random() *cytaty.length),
          random2: Math.floor(Math.random() *color.length)
      };
      this.handleClick=this.handleClick.bind(this)
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    this.div.appendChild(script);
  }
  handleClick () {
      this.setState({
          random: Math.floor(Math.random() *cytaty.length),
          random2: Math.floor(Math.random() *color.length)
      })
  }
  

  render() {
      return (
          <div id="header" className="App" style={{backgroundColor: color[this.state.random2]}}>
              <div className="aaa" ref={el => (this.div = el)}></div>
          <div id="wrapper">
              <div id="quote-box">
                  <div>
              <h1 id="text">{cytaty[this.state.random][1]}</h1>
              <h2 id="author">~{cytaty[this.state.random][0]}</h2>
              <button class="button" id="new-quote" onClick={this.handleClick}>Losowy Autor</button>
              <div>
              <a id="tweet-quote"  class="twitter-share-button" href="twitter.com/intent/tweet" data-size="large">
                  Tweet</a>
              </div>
              </div>
          </div>
          </div>
         </div>

        
        
      );
  }
}




export default App;
