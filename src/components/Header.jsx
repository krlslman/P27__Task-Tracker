import { useState } from "react";
import AddTaskForm from "./AddTaskForm";

const Header = ({tasks}) => {
  const [show, setShow] = useState(false);
  const [btnStyle, setBtnStyle] = useState({
    name: 'SHOW ADD TASK BAR',
    bgColor: 'purple',
  });

  const handleShow = () => {

    if(show){
      setBtnStyle({
        name: 'SHOW ADD TASK BAR',
        bgColor: 'purple',
      })
    }else{
      setBtnStyle({
        name: 'SHOW ADD TASK BAR',
        bgColor: 'red',
      })
    }
    setShow(!show); 
    // bunun burada yada en başta olması farketmez, react dom güncellemesini toplu yapıyor, satır satır değil.
    console.log(show);
  };
  //? Not: React state'leri anında güncellemiyor, toplu güncelleme yapıyor. 
  return (
    <header>
      <h1>TASK TRACKER</h1>
      <button onClick={handleShow} className="btn" style={{backgroundColor: btnStyle.bgColor}} >
        {btnStyle.name}
      </button>
      {show && <AddTaskForm />}  
    </header>
  );
};

export default Header;
