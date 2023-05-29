import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './MainCss.css'
import axios from 'axios';

function CardAPI(props) { 
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => setData(response.data))
  }, []);

  console.log(data)

  const handleClick = (body) => {
    alert(`isi komentar = \n${body}`);
  };


  return (
    <>
      <div className="font-family-inter container px-4 py-5 text-start">
        <h2 className="pb-2 fw-bold">
          UI/UX ke Web Interface
        </h2>
        <h3 className="pb-2 border-bottom" style={{fontSize: '20px'}}>
          {props.name} ({props.npm})
        </h3>
        <div className="row g-5 py-5 row-cols-3">
          {data.map((item) => (
            <div className="col d-flex align-items-start overflow-hidden" style={{width: '430px', height: '200px'}}>
              <div className="bg-light text-dark me-3">
                <img
                  src={`https://ui-avatars.com/api/?name=${item.name}`}
                  alt="/"
                  className='rounded'
                />
              </div>
              <div className='w-75'>
                <h2 className='pb-2 text-truncate fw-bold'>
                  {item.name}
                </h2>
                <p className='pb-2'>
                  {item.email}
                </p>
                <p className='pb-3 text-truncate'>
                  {item.body}
                </p>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleClick(item.body)}
                >
                  Primary button
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CardAPI