import './App.css';
import './decrypter.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value});
    };
  }

  
  render() {
    const charCount = () => {
      let text = this.state.text;
      const hash = {};
      let nums = "0123456789";
      for (let char of text) {
        if (!hash[char] && nums.includes(char)) {
          char = `num${char}`;
          hash[char] = 0;
        } else if (!hash[char]) {
          hash[char] = 0;
        };
        console.log(char)
        hash[char] += 1;
        console.log("after", hash[char])
      };
      
      const sortedHash = {};
      const values = Object.values(hash);

      const sortedVals = values.sort((a, b) => {
        if (a < b) return 1;
        if (a > b) return -1;
        return 0;
      });

      for (let val of sortedVals) {
        for (let key in hash) {
          if (key === " " && hash[key] === val) {
            sortedHash["' '"] = val;
          } else if (hash[key] === val) {
            sortedHash[key] = val;
          };
        };
      };
      
      const keys = Object.keys(sortedHash);

      return keys.map((key, i) => {
        if (i < 5) {
          if (key.includes("num")) {
            return (
              <div k={i}>
                <ul className="top-5">
                  <li>{key[3]}</li>
                  <li>{sortedHash[key]}</li>
                </ul>
              </div>
            );
          } else {
            return (
              <div k={i}>
                <ul className="top-5">
                  <li>{key}</li>
                  <li>{sortedHash[key]}</li>
                </ul>
              </div>
            );
          };
        } else {
          if (key.includes("num")) {
            return (
              <div k={i}>
                <ul className="not-top-5">
                  <li>{key[3]}</li>
                  <li>{sortedHash[key]}</li>
                </ul>
              </div>
            );
          } else {
            return (
              <div k={i} className="space">
                <ul className="not-top-5">
                  <li>{key}</li>
                  <li>{sortedHash[key]}</li>
                </ul>
              </div>
            );
          };
        };
      });
    };
    
    return (
      <div className="full-page">
        <header>
          <h2>Decrypter</h2>
        </header>
        <div className="page-container">
          <div className="left-side">
            <h3>Text to Decrypt</h3>
            <textarea id="code" name="code" value={this.state.text} onChange={this.handleChange("text")}></textarea>
          </div>
          <div className="right-side">
            <div className="column-container">
              <h3>Character</h3>
              <h3>Count</h3>
            </div>
            <div className="counters">
              {charCount()}
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default App;