import React from 'react';
import {connect} from "react-redux";

class ReduxApp extends React.Component {
    addLibrary() {
        if ((this.inputValue.value)&&(this.inputValue.value.toString().trim() != 0)) {
            console.log("library added", this.inputValue.value )
            this.props.addLibrary(this.inputValue.value)
            this.inputValue.value = ''
        }
    }

    addFramework() {
        if ((this.inputValue.value)&&(this.inputValue.value.toString().trim() != 0)) {
            console.log("framework added", this.inputValue.value )
            this.props.addFramework(this.inputValue.value)
            this.inputValue.value = ''
        }
    }

    render() {
        // console.log(this.props);
        return (
            <div className={"container"}>
                <input type="text" ref={(input) =>  { this.inputValue = input }}/>
                <button onClick={this.addLibrary.bind(this)}>add library</button>
                <button onClick={this.addFramework.bind(this)}>add framework</button>
                <div className={"lists"}>
                    <ul>
                        {this.props.libraries.map(item =>
                            <li key={item}>{item}</li>

                        )}
                    </ul>
                    <br/>
                    <ul>
                        {this.props.frameworks.map(item =>
                            <li key={item}>{item}</li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}



export default connect (
    state => ({
        libraries: state.changeLibrary,
        frameworks: state.changeFramework
    }),

    dispatch => ({
        addLibrary: (elem) => {
    dispatch({ type: 'ADD_LIBRARY', payload: elem});
},
        addFramework: (elem) => {
    dispatch({type: 'ADD_FRAMEWORK', payload: elem});
    }
})
)(ReduxApp);