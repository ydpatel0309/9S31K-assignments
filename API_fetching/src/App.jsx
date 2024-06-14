import { useCallback, useEffect, useState } from 'react'

import './App.css'

function App() {

  async function fetchAPI() {
    const url = "https://jsonplaceholder.typicode.com/todos/";
    
     await fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}

  useEffect(()=>
  {
    fetchAPI();
  },[]);

  return (
    <>
      <h1>API Fetching</h1>
    </>
  )
}

export default App
