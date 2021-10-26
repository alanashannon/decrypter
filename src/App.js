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
      let keys = Object.keys(sortedHash);
      console.log(keys)
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

      return keys.map((key, i) => {
        return (
          <div key={i}>
            <ul>
              <li>Character: {key} Count: {sortedHash[key]}</li>
            </ul>
          </div>
        )
      })
    }
    
    return (
      <div>
        <header>Decrypter</header>
        <textarea id="code" name="code" value={this.state.text} onChange={this.handleChange("text")}></textarea>
        {charCount()}
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
