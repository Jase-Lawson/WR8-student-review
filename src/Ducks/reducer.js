import axios from 'axios';

const initialState = {
  wildPokemon: [],
  caughtPokemon: [],
}

const GET_WILD_POKEMON = 'GET_WILD_POKEMON';
const GET_CAUGHT_POKEMON = 'GET_CAUGHT_POKEMON';
const CATCH_POKEMON = 'CATCH_POKEMON';


export function getWildPokemon() {
  const rand1 = Math.ceil(Math.random() * 151)
  // const rand2 = Math.ceil(Math.random() * 151)
  // const rand3 = Math.ceil(Math.random() * 151)

  const data = axios
    .get(`https://pokeapi.co/api/v2/pokemon/${rand1}`)
    .then(res => res.data)


  return {
    type: GET_WILD_POKEMON,
    payload: data
  }
}

export function getCaughtPokemon() {
  const data = axios.get('/api/pokemon').then(res => res.data)

  return {
    type: GET_CAUGHT_POKEMON,
    payload: data
  }
}


export function catchPokemon(wildPokemon) {
  const { name } = wildPokemon;
  const api_id = wildPokemon.id;
  const sprite_url = wildPokemon.sprites.front_default;
  const data =
    axios
      .post(`/api/catch/pokemon`, { name, api_id, sprite_url })
      .then(res => {
        console.log(res.data)
        return res.data
      })

  return {
    type: CATCH_POKEMON,
    payload: data
  }

}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  // console.log(payload, type)
  switch (type) {

    case GET_WILD_POKEMON + '_FULFILLED':
      // console.log(payload)
      return { ...state, wildPokemon: [payload] };

    case GET_CAUGHT_POKEMON + '_FULFILLED':
      return { ...state, caughtPokemon: payload }

    case CATCH_POKEMON + '_FULFILLED':
      return { ...state, caughtPokemon: payload }

    default:
      return state;
  }
}
