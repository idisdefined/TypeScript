export function getTodosByCount(count: number) {
  for(count = 0; count < 10; count++) {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
      .then<Response>((response) => response.json())
      .then((json) => console.log(json))
  }
} 