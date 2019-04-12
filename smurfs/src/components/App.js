import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newSmurf: {
        name: '',
        age: '',
        height: '',
      }
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleChanges = e => {
    this.setState({
      newSmurf: {
        ...this.state.newSmurf,
        [e.target.name]: e.target.value,
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.newSmurf);
    this.setState({
      newSmurf: {
        name: '',
        age: '',
        height: '',
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <h2>Smurf Village Residents</h2>
        {
          this.props.fetchingSmurfs
          ? <p>Loading smurfs...</p>
          : <ul>
            {this.props.smurfs.map(smurf => {
              return <li key={smurf.id}>
                  {`${smurf.name}: ${smurf.age} years old, ${smurf.height} tall`}
                </li>
            })}
            </ul>
        }
        <h2>Add a Smurf</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={this.state.newSmurf.name}
            onChange={this.handleChanges}
          />
          <input
            type='number'
            min='0'
            placeholder='Age'
            name='age'
            value={this.state.newSmurf.age}
            onChange={this.handleChanges}
          />
          <input
            type='text'
            placeholder='Height'
            name='height'
            value={this.state.newSmurf.height}
            onChange={this.handleChanges}
          />
          <button type='submit'>Add</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
})

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(App);
