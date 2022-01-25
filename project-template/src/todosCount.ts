export interface responseTodo {
  id: number,
  userId: number,
  title: string,
  completed: boolean
}

export function getTodosByCount(count: number) {
  for(count = 0; count < 10; count++) {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
      .then<responseTodo>((response) => response.json())
      .then((json) => console.log(json))
  }
} 