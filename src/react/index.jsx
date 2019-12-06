import React, { useState, useEffect } from "react";
import * as mock from "./api";

async function fetchName() {
  const data = await mock.mockName();
  return data.name;
}

fetchName()
  .then(res => console.log(`你好${res}`))
  .finally(() => {
    console.log(new Set().add("foo"));
    console.log([[1, 2], 3].flat());
    console.log([1, 2, 3].includes(1));
  });

class Button extends React.Component {
  render() {
    const { name } = this.props;
    return <button>{name}</button>;
  }
}

function HelloButton() {
  const [name, setName] = useState("");
  useEffect(() => {
    fetchName().then(res => setName(res));
  }, []);
  return <Button name={name}></Button>;
}
