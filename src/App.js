import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import ChangeThemeBox from './components/ChangeThemeBox';
import './App.css';


class App extends Component {
  state = {
    numbers: [],
  }
  handClickClear = () => {
    this.setState({ numbers: [] })
    document.getElementById("showNumbers").style.fontSize = null;

  }
  handleNewCalc = number => {
    console.log(number, 'number')
    this.setState({ numbers: [number] })
  }
  handleClick = (e) => {
    const { numbers } = this.state;
    if (Array.isArray(numbers)) {
      this.setState({
        numbers: [...numbers, e.target.value]
      })
    } else {
      console.log(this.state.numbers, 'numbershandlicj')
      this.handleNewCalc(e.target.value);
    }
  }
  handleClickEqual = (e) => {
    this.setState({ numbers: this.state.numbers })
    let calc = eval(this.state.numbers.join(''))
    this.setState({
      numbers: calc
    })
  }
  rezize = () => {
    if (this.state.numbers.length > 13) {
      document.getElementById("showNumbers").style.fontSize = '0.8em';
      if (this.state.numbers.length > 17) {
        document.getElementById("showNumbers").style.fontSize = '0.5em';
      }
      if (this.state.numbers.length > 27) {
        alert("Vous avez atteint la limite d'affichage")
        this.setState({ numbers: [] });
        if (this.state.numbers.length > 0) {
          document.getElementById("showNumbers").style.fontSize = null;
        }
      }
    }
  }

  render() {
    return (
      <div className={css(styles.center)}>
        <div className={css(styles.calc)}>
          <ChangeThemeBox />
          <div className='inputShowNumbers'>
            <div id='showNumbers' className={css(styles.row)}>
              {this.rezize()}
              {this.state.numbers}
            </div>
          </div>
          <div className={css(styles.row)}>
            <button className={css(styles.buttons)} value='7' onClick={this.handleClick}>7</button>
            <button className={css(styles.buttons)} value='8' onClick={this.handleClick}>8</button>
            <button className={css(styles.buttons)} value='9' onClick={this.handleClick}>9</button>
            <button className='operator' value='/' onClick={this.handleClick}>/</button>
          </div>
          <div className={css(styles.row)}>
            <button className={css(styles.buttons)} value='4' onClick={this.handleClick}>4</button>
            <button className={css(styles.buttons)} value='5' onClick={this.handleClick}>5</button>
            <button className={css(styles.buttons)} value='6' onClick={this.handleClick}>6</button>
            <button className='operator' value='*' onClick={this.handleClick}>*</button>
          </div>
          <div className={css(styles.row)}>
            <button className={css(styles.buttons)} value='1' onClick={this.handleClick}>1</button>
            <button className={css(styles.buttons)} value='2' onClick={this.handleClick}>2</button>
            <button className={css(styles.buttons)} value='3' onClick={this.handleClick}>3</button>
            <button className='operator' value='+' onClick={this.handleClick}>+</button>
          </div>
          <div className={css(styles.row)}>
            <button className={css(styles.buttons)} value='.' onClick={this.handleClick}>.</button>
            <button className={css(styles.buttons)} value='0' onClick={this.handleClick}>0</button>
            <button className={css(styles.buttons)} value='=' onClick={this.handleClickEqual}>=</button>
            <button className='operator' value='-' onClick={this.handleClick}>-</button>
          </div>
          <div className={css(styles.row)}>
            <button className={css(styles.clearButton)} onClick={this.handClickClear}>CLEAR</button>
          </div>
        </div>
      </div>
    )
  }

}
export default App;

const styles = StyleSheet.create({

  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
  },
  buttons: {
    height: '4em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'lighter',
    fontSize: '1.4em',
    backgroundColor: '#e0e1e6',
    color: '#888888',
    flex: 1,
    outline: '1px solid #888888',
  },
  clearButton: {
    height: '4em',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'lighter',
    fontSize: '1.4em',
    backgroundColor: '#c5c3cd',
    color: '#888888',
    flex: 1,
    outline: '1px solid #888888',
  },
  calc: {
    width: '400px',
    height: '600px'
  },
  row: {
    display: 'flex',
    width: '100%',
  }
})
