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

class foo {
  render() {
    console.log("foo");
  }
}
