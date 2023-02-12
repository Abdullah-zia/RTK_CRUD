import { useDispatch } from "react-redux";
import { setToken } from "../store/slices/authSlice";
import {
  useGetBooksQuery,
  useDeleteBookMutation,
  useUserLoginMutation,
} from "../store/services/bookService";

const Books = () => {
  const dispatch = useDispatch();
  const { data = [], isLoading, isError } = useGetBooksQuery();
  const [deletehandler, { isLoading: load, isError: err }] =
    useDeleteBookMutation();
  const [userLogin] = useUserLoginMutation();

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <button
          onClick={async () => {
            await userLogin({ email: "abdullah@gmail.com", password: "1234" });
            dispatch(setToken("thisissometoken"));
          }}
        >
          user login
        </button>
        {data.map((book) => (
          <div key={book.id} style={{ marginBottom: "20px" }}>
            {book.name}, author: {book.author}
            <button
              onClick={() => deletehandler(book.id)}
              style={{ cursor: "pointer", marginLeft: "10px" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
};

export default Books;
