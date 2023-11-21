import { useState } from 'react';
import { useAppDispatch } from './../../store/hooks'
import { setUserName } from './../../store/userSlice'
import { useNavigate } from 'react-router-dom';
function CreateUser() {
const [input, setInput] = useState("");
const navigate = useNavigate();
const dispatch = useAppDispatch();
  function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
     dispatch(setUserName(input));
     navigate('/menu');
  }


  return (
    <form onSubmit={handleSubmit}>
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {input !== '' && (
        <div>
         <button type="submit" disabled={input === ''}>Start ordering</button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
