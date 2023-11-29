import { useState } from 'react';
import { useAppDispatch } from './../../store/hooks'
import { setUserName } from './../../store/userSlice'
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
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
    <form onSubmit={handleSubmit} className='text-center'>
      <p className='text-center'>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='rounded-md	p-2 my-2 border-2 border-orange-700 '
      />

      {input !== '' && (
        <div className='my-2'>
         <Button type = 'round' disabled={input === ''}>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
