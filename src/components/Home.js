// NDWebCV/src/components/Home.js
import React from 'react';
import Tree from './Tree';

function Home() {
  console.log('Home component rendered');

  return (
    <div className="home">
      <h1>Hello World</h1>
      <Tree />
    </div>
  );
}

export default Home;