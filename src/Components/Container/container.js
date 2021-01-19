import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWildPokemon } from '../../Ducks/reducer';
import { catchPokemon } from '../../Ducks/reducer'

class Container extends Component {

  componentDidMount() {
    this.props.getWildPokemon()
  }

  render() {
    console.log(this.props.reducer.caughtPokemon)
    return (
      <div>
        <h3>{this.props.reducer.wildPokemon[0]?.name}</h3>
        <img src={this.props.reducer.wildPokemon[0]?.sprites.front_default}
          onDoubleClick={() => this.props.catchPokemon(this.props.reducer.wildPokemon[0])} />
        <button onClick={this.props.getWildPokemon}>Get Pokemon</button>
        <h2>Caught Pokemon</h2>
        <div className='pokemon-team'>
          <section className='caught-pokemon'>
            <h3>{this.props.reducer.caughtPokemon[0]?.name}</h3>
            <img src={this.props.reducer.caughtPokemon[0]?.sprite_url} />
          </section>
          <section className='caught-pokemon'>
            <h3>{this.props.reducer.caughtPokemon[1]?.name}</h3>
            <img src={this.props.reducer.caughtPokemon[1]?.sprite_url} />
          </section>
          <section className='caught-pokemon'>
            <h3>{this.props.reducer.caughtPokemon[2]?.name}</h3>
            <img src={this.props.reducer.caughtPokemon[2]?.sprite_url} />
          </section>
          <section className='caught-pokemon'>
            <h3>{this.props.reducer.caughtPokemon[3]?.name}</h3>
            <img src={this.props.reducer.caughtPokemon[3]?.sprite_url} />
          </section>
          <section className='caught-pokemon'>
            <h3>{this.props.reducer.caughtPokemon[4]?.name}</h3>
            <img src={this.props.reducer.caughtPokemon[4]?.sprite_url} />
          </section>

        </div>
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return {
    reducer: reduxState.reducer
  }
}


export default connect(mapStateToProps, { getWildPokemon, catchPokemon })(Container)