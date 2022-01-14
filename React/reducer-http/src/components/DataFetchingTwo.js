import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  loading: true,
  error: '',
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'Fetch_Success':
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
      break;
    case 'Error':
      return {
        loading: false,
        post: {},
        error: 'Something went wrong',
      };
      break;
    default:
      return state;
      break;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/11')
      .then((resp) => {
        dispatch({ type: 'Fetch_Success', payload: resp.data });
      })
      .catch((err) => {
        dispatch({ type: 'Fetch_Error' });
      });
  }, []);

  return (
    <div>
      {state.loading ? 'Loading' : state.post.body}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingTwo;
