export interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }
  
  export interface TodoState {
    todos: Todo[];
    status: 'idle' | 'loading' | 'failed';
  }