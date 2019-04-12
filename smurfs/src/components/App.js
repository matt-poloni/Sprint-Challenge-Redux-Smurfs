import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf, deleteSmurf } from '../actions';

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
      smurf: {
        id: null,
        name: '',
        age: '',
        height: '',
      }
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  selectSmurf = smurf => {
    this.setState({
      smurf: smurf,
    })
  }

  deleteTodo = (e, id) => {
    e.preventDefault();
    this.props.deleteTodo(id);
  }

  deleteSmurf = (e, id) => {
    e.preventDefault();
    this.props.deleteSmurf(id);
  }

  handleChanges = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value,
      }
    });
  };

  addSmurf = smurf => {
    this.props.addSmurf({
      name: smurf.name,
      age: smurf.age,
      height: smurf.height,
    });
  }

  updateSmurf = smurf => {
    this.props.updateSmurf({smurf});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.state.smurf.id === null
      ? this.addSmurf(this.state.smurf)
      : this.updateSmurf(this.state.smurf);
    this.setState({
      smurf: {
        id: null,
        name: '',
        age: '',
        height: '',
      },
      selectedSmurf: null,
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
              return (
                <li key={smurf.id}>
                  <span onClick={() => this.selectSmurf(smurf)}>
                    {`${smurf.name}: ${smurf.age} years old, ${smurf.height} tall`}
                  </span>
                  <button onClick={e => this.deleteSmurf(e, smurf.id)}>
                    Delete
                  </button>
                </li>
              )
            })}
            </ul>
        }
        <h2>
          {
            this.state.smurf.id === null
              ? 'Add a Smurf'
              : `Update ${this.state.smurf.name}`
          }
        </h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={this.state.smurf.name}
            onChange={this.handleChanges}
          />
          <input
            type='number'
            min='0'
            placeholder='Age'
            name='age'
            value={this.state.smurf.age}
            onChange={this.handleChanges}
          />
          <input
            type='text'
            placeholder='Height'
            name='height'
            value={this.state.smurf.height}
            onChange={this.handleChanges}
          />
          <button type='submit'>
            {this.state.smurf.id === null ? 'Add' : `Update`}
          </button>
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
  { getSmurfs, addSmurf, deleteSmurf }
)(App);
