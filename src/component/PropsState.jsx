import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function Props_state(props) {
    const [count, setCount] = useState(0);
      
    function hitung() {
        setCount(count + 1);
    }

  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className='display-5 fw-bold'>
        Hello, {props.name} !
      </h1>
      <p className='lead mb-4'>
        Jumlah tombol di klik: {count}
      </p>
      <button 
        type="button" className="btn btn-primary btn-lg px-4 gap-3"
        onClick={hitung}
      >
          Hitung
      </button>
    </div>
  );
}

export default Props_state;