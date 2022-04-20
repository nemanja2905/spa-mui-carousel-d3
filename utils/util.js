export async function getData(url) {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  // .then((response) => response.json())
  // .then((json) => console.log(json));
  const responseJson = await (await fetch(url)).json();

  return responseJson;
}
