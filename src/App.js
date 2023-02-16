import React, { useState } from 'react';
import bgDesktop from './images/bg-main-desktop.png';
import bgMobile from './images/bg-main-mobile.png';
import Footer from './components/Footer';

const App = () => {
  const [button, setButton]= useState(false);
  const [name, setName] = useState("Jane Appleseed");
  const [number, setNumber] = useState("0000 0000 0000 0000");
  const [month, setMonth] = useState("00");
  const [year, setYear] =useState("00");
  const [cvc, setCvc] =useState("000");

  function handleName (e) {
    setName(e.target.value);
  }

  function handleNumber (e) {
    setNumber(e.target.value);
  }

  function handleMonth (e) {
    setMonth(e.target.value);
  }

  function handleYear (e) {
    setYear(e.target.value);
  }
  function handleCvc (e) {
    setCvc(e.target.value);
  }

  
  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className=''>
          <picture>
            <source media='(min-width: 1020px)' srcset={bgDesktop} />
            <img src={bgMobile} alt='.png' />
          </picture>
        </div>
        {!button && <from className ='flex flex-col justify-center my-16 mx-10 md:mx-auto md:my-0'>
          <label className='my-2 uppercase'>CardHolder Name</label>
          <input
          onChange={handleName}
          value={name}
          className='w-full h-10 pl-2 border-solid border rounded-md focus:outline-violet-900'
          type='text'
          placeholder='e.g. Jane Appleseed'
          required/>
          <label className='my-2 uppercase'>Card Number</label>
          <input
          onChange={handleNumber}
          value={number
            .replace(/\s/g, '')
            .replace(/(\d{4})/g, '$1 ')
            .trim()}
          maxLength='19'
          className='w-full h-10 pl-2 border-solid border rounded-md focus:outline-violet-900'
          type='text'
          placeholder='e.g. 1234 5678 9123 0000'
          required/>
          <form className='grid grid-cols-2 mt-4'>
            <div className='flex flex-col'>
              <label className='my-2'>Exp. Date (MM/YY)</label>
                <div>
                <input
                onChange={handleMonth}
                value={month}
                maxLength='2'
                className='w-16 h-10 pl-2 mr-1 md:mr-4 border-solid border rounded-md focus:outline-violet-900'
                type='text'
                placeholder='MM'
                required='number'/>
                <input
                onChange={handleYear}
                value={year}
                maxLength='2'
                className='w-16 h-10 pl-2 border-solid border rounded-md focus:outline-violet-900'
                type='text'
                placeholder='YY'
                required/>
                </div>
              </div>
             
            <div className='flex flex-col'>
              <label className='my-2'>CVC</label>
              <input
              onChange={handleCvc}
              value={cvc}
              maxLength='3'
              className='w-full h-10 pl-2 border-solid border rounded-md focus:outline-violet-900'
              type='text'
              placeholder='e.g 123'
              required/>
            </div>
          </form>
          <button 
          onClick={() => setButton(true)}
          className='px-full py-4 bg-violet-900 text-white rounded-xl
          mt-5 cursor-pointer hover:bg-slate-900'>Confirm</button>
        </from>}
        {button && <ThanksYou setButton={setButton} />}
      </div>
      <div className='front-card'>
        <div className='p-1 md:p-5'>
        <svg  width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
        </div>
        <div className='px-4 text-slate-200 mt-8 md:px-5 md:py-3'>
          <h1 className='text-lg  md:text-3xl md:my-4'>{number}</h1>
          <div className='flex justify-between'>
            <p>{name}</p>
            <p>{month} / {year}</p>
          </div>
        </div>
      </div>
      <div className='back-card'>
        <p className='absolute top-[60px] right-5 text-slate-200 md:top-28 md:right-10' >{cvc}</p>
      </div>
      <Footer />
    </section>
  );
};

function ThanksYou ({setButton}) {
  return (
    <div className='flex flex-col justify-center items-center mt-32 md:mt-0'>
    <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="url(#a)" />
        <path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3" />
        <defs>
            <linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse">
                <stop stop-color="#6348FE" />
                <stop offset="1" stop-color="#610595" />
            </linearGradient>
        </defs>
    </svg>
    <h1 className='text-2xl my-4'>Thanks You!</h1>
    <p className='text-gray-400'>We've added your card details</p>
    <button 
    onClick={() => setButton(false)}
    className='h-14 px-32 my-4 bg-violet-900 rounded-xl text-white cursor-pointer'>Confirm</button>
</div>
  )
}

export default App;
