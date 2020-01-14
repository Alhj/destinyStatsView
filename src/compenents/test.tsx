import React from 'react';

import {useParams} from 'react-router';

const Test = () => {
  const {id} = useParams();
  
  return(
    <div>
      <h1>{id}</h1>
      <p>hello</p>
    </div>
  )
};


export default Test;