
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import { useState } from "react";
import "./App.css";
import Fiels from "./components/Fiels";

function App() {
  const [inputvalue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);
  function getValue(event) {
    setInputValue(event.target.value);
  }

  function handelValue() {
    setTodo([...todo, inputvalue]);
    setInputValue("");
  }

  return (
    <div className="App">
      <div className="inputSection">
        <Stack spacing={2} direction="row">
          <TextField
            id="outlined-basic"
            label="Task"
            variant="outlined"
            value={inputvalue}
            onChange={getValue}
          />
          <Button variant="contained" onClick={handelValue}>
            <AddIcon />
          </Button>
        </Stack>
      </div>
      {todo.map((element, index) => {
        return(
         
        <Fiels  key={index} name={element.name} email={element.email} index={element.index} todo={todo} setTodo={setTodo}/>
        );
      })}
    </div>
  );
}

export default App;
