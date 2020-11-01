import React, { Component } from 'react';
import './ChangeThemeBox.css'

class ChangeThemeBox extends Component {

    state = {
        isChecked: false,
    }
    handleCheck = () => {
        this.setState({
            isChecked: !this.state.isChecked
        })
    }
    render() {
        changeMode(this.state.isChecked);
        return (
            <div className="ThemeBox">
                Switch to {this.state.isChecked ? "Light" : "Dark"} Mode
              <div className="onoffswitch">
                    <input
                        type="checkbox"
                        className="onoffswitch-checkbox"
                        id="myonoffswitch"
                        onChange={() => this.handleCheck()}
                        checked={this.state.isChecked}
                    />
                    <label className="onoffswitch-label" for="myonoffswitch"></label>
                </div>
            </div>
        )
    }

}
const changeMode = isDarkMode => {
    document.querySelectorAll('body,.ThemeBox, .inputShowNumbers, .operator').forEach(e =>
        isDarkMode ? e.classList.add('dark') : e.classList.remove('dark')
    );
}
export default ChangeThemeBox;