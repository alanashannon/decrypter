import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value})
    }
  }

  
  render() {
    const charCount = () => {
      let text = this.state.text;
      const hash = {};
      for (let char of text) {
        if (!hash[char]) hash[char] = 0;
        hash[char] += 1;
      }
      
      const sortedHash = {};
      const values = Object.values(hash);

      const sortedVals = values.sort((a, b) => {
        if (a < b) return 1;
        if (a > b) return -1;
        return 0;
      })
      console.log(sortedVals)

      for (let val of sortedVals) {
        // let val = sortedVals.shift();
        for (let key in hash) {
          if (key === " " && hash[key] === val) {
            sortedHash['" "'] = val;
          } else if (parseInt(hash[key]) === val) {
            sortedHash[key] = val;
          } 
        }
      }
      console.log(sortedHash)
      const keys = Object.keys(sortedHash);
      console.log(keys)

      return keys.map((key, i) => {
        if (i < 5) {
          return (
            <div key={i}>
              <ul className="top-5">
                <li>Character top 5: {key} Count: {sortedHash[key]}</li>
              </ul>
            </div>
          )
        } else {
          return (
            <div key={i}>
              <ul className="not-top-5">
                <li>Character: {key} Count: {sortedHash[key]}</li>
              </ul>
            </div>
          )
        }
      })
      // return sortedVals.map((val) => {
      //   return(
      //     keys.forEach((key) => {
      //       // return (
      //         if (sortedHash[key] === val) {
      //           return (
      //             <div>
      //               <ul>
      //                 <li>Character: {key} Count: {val}</li>
      //               </ul>
      //             </div>
      //           )
      //         }
      //       // )
      //     }) 
      //   )
      // })

    }
    
    return (
      <div>
        <header>Decrypter</header>
        <div className="left-side">
          <h3>Text to Decrypt</h3>
          <textarea id="code" name="code" value={this.state.text} onChange={this.handleChange("text")}></textarea>
        </div>
        <div className="right-side">
          <div className="column-container">
            <h3>Character</h3>
            <h3>Count</h3>
          </div>
          {charCount()}
        </div>
      </div>
    )
  }
}

export default App;

//textarea input
//area for output char count
  //highlight 5 most used chars
  //rest of list below that 
//function for char count
//edge cases: upper vs lowercase? spaces/non-alphabet? empty textarea? large inputs? 
//visual: text area entire left half of screen, output on right
//functioning demo link - github pages?
