import React, { useState, useEffect } from "react";

const Global = () => {
  const [global, setGlobal] = useState();
    
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://api.covid19api.com/summary");
      const data = await res.json();
      setGlobal(data.Global);
    };
    getData();
  }, []);

  if (!global) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="GlobalContainer">
        {
            Object.keys(global).map((val)=>{
                return <GlobalBox value={val} state={global} />
            })
        }
      </div>
    );
  }
};

export default Global;

const GlobalBox = (props) => {
  console.log(props.state);
    return (
    <div className="GlobalBox">
      <h1>{props.value} :</h1>  
      <h2>{props.state[props.value]}</h2>    
    </div>
  );
};
