import './index.css';
import {useEffect, useState} from "react";

function App() {
  let fruitsTwo = ["strawberry", "apples", "cherries"];

  const [word, setWord] = useState("second");

  useEffect(() => {
    try{
      async function getData(){
        let request = await fetch("http://localhost:8080/");
        let response = await request.json();

        setWord(response);
      }
      getData()
    }catch(error){
      console.log(error);
    }
  },[])
  
  
  async function sendData(e){
    e.preventDefault();

    let request = await fetch("http://localhost:8080/post", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify("hello")
    });

    let response = request.json();

    console.log(response);
  }

  return (
    <div className="App">
      {fruitsTwo}

      <input type="text" />
      <button onClick={sendData}></button>
    </div>
  );
}

export default App;
