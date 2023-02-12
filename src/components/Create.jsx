import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateBookMutation } from "../store/services/bookService";

const Create = () => {
  const navigate = useNavigate();
  const [createBook, data] = useCreateBookMutation();
  const [state, setState] = useState({
    name: "",
    author: "",
  });

  // form input handler
  const handle = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // form submit handler
  const createNewBook = async (e) => {
    e.preventDefault();
    await createBook(state);
    navigate("/");
  };

  return (
    <div>
      Create new book
      <form onSubmit={createNewBook}>
        <input
          type="text"
          name="name"
          placeholder="Book name"
          onChange={handle}
          value={state.name}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="author name"
          onChange={handle}
          value={state.author}
          required
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Create;
