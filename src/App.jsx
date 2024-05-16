import React, { useState, useEffect } from 'react';

function App() {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    const randomNumber = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10) + 1);
    setNumbers(randomNumber);
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expression = inputValue.trim();
    const evalResult = evaluateExpression(expression);
    console.log(evalResult); // Menampilkan hasil evaluasi di konsol
    setResult(evalResult);
  };

  const evaluateExpression = (expression) => {
    try {
      return eval(expression);
    } catch (error) {
      console.error('Error evaluating expression:', error);
      return 'Error';
    }
  };

  const handleNumberClick = (value) => {
    setInputValue(inputValue + value);
  };

  const handleOperatorClick = (operator) => {
    setInputValue(inputValue + operator);
  };

  return (
    <>
      <div className="bg-gray-500">
        <div className='text-white'>
          <h1 className='text-4xl'>Hasilkan Angka 32</h1>
          <p>Berdasarkan angka di bawah ini</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleChange} />
          <button type="submit" className='bg-green-500 text-white w-20'>Submit</button>
        </form>
        <div className="text-white">
          {numbers.map((number, index) => {
            return (
              <button key={index} className='bg-blue-500 w-10' onClick={() => handleNumberClick(number)}>{number}</button>
            )
          })}
        </div>
        <div className='text-white'>
          <button className='bg-green-500 w-10' onClick={() => handleOperatorClick('+')}>+</button>
          <button className='w-10 bg-red-500' onClick={() => handleOperatorClick('-')}>-</button>
          <button className='w-10 bg-blue-500' onClick={() => handleOperatorClick('*')}>*</button>
          <button className='w-10 bg-indigo-700' onClick={() => handleOperatorClick('/')}>/</button>
        </div>
        <div className="text-white">
          {result === 32 ? (
            <p>Hasil: {result}</p>
          ) : (
            <p>Hasil {result} bukan hasil yang diinginkan, yang diinginkan adalah 32</p>
          )}
        </div>
      </div>
    </>
  )

}
export default App;
