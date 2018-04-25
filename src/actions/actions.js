import fetch from 'isomorphic-fetch'

export let AddSong = obj => {
  return {
    type: "ADD_SONG",
    payload: obj
  }
}

export let RemoveSong = obj => {
  return {
    type: "REMOVE_SONG",
    payload: obj
  }
}

export let UpdateSong = obj => {
  return {
    type: "UPDATE_SONG",
    payload: obj
  }
}

export let AddToken = obj => {
  return {
    type: "ADD_TOKEN",
    payload: obj
  }
}


export function fetchUser() {
  return (dispatch) => {
    dispatch({type: 'START_GETTING_USER'})
    return fetch('https://api.spotify.com/v1/me', {
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    })
    .then( res => res.json())
    .then( json => {
      dispatch({type: 'ADD_USER', payload: json})
    })
  }

}

// function getHashParams(){
//   var hashParams = {};
//   var e, r = /([^&;=]+)=?([^&;]*)/g,
//       q = window.location.hash.substring(1);
//   while ( e = r.exec(q)) {
//      hashParams[e[1]] = decodeURIComponent(e[2]);
//   }
//
//   return hashParams
// }
//
// export function fetchUser(){
//   return (dispatch) => {
//     dispatch({type: 'START_GETTING_USER'})
//     return fetch('http://localhost:8888/login', {
//       headers: 'Access-Control-Allow-Origin'
//     })
//       .then(res => res.json())
//       .then(data => {
//         let params = this.getHashParams()
//         console.log(params)
//         .then(params => dispatch({type: 'ADD_TOKEN'}, params))
//       })
//   }
// }
