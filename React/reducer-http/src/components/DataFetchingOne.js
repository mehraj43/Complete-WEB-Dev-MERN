import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingOne() {
  const [loading, setloading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((resp) => {
        setloading(false);
        setPost(resp.data);
        setError('');
      })
      .catch((err) => {
        setloading(false);
        setPost({});
        setError('Something went wrong!');
      });
  }, []);

  return (
    <div>
      {loading ? 'Loading' : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingOne;
