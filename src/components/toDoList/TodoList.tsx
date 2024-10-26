import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { addTodo, fetchTodos, toggleTodo, deleteTodo } from '../../store/features/toDoFeature';
import { RootState, AppDispatch } from '../../store/store';

const TodoList: React.FC = () => {
  const [text, setText] = useState('');
  const todos = useSelector((state: RootState) => state.toDo.todos);
  const status = useSelector((state: RootState) => state.toDo.status);
  const dispatch: AppDispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <h1>To-Do List</h1>
      <Box display="flex" gap={2}>
        <TextField
          label="Add To-Do"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleAddTodo}>
          Add
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatch(fetchTodos())}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? <CircularProgress size={24} /> : 'Fetch Todos'}
        </Button>
      </Box>
      <List>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            component="li" // Указываем "li" для устранения ошибки
            onClick={() => dispatch(toggleTodo(todo.id))}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            <ListItemText primary={todo.text} />
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(deleteTodo(todo.id));
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
