import * as mock from "./api";

async function fetchName() {
  const { name } = await mock.mockName();
  const { age } = await mock.mockAge();
  return { name, age };
}

fetchName()
  .then(res => console.log(`${res.name}今年${res.age}岁`))
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
