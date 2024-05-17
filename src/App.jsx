import React, { useState, useEffect } from 'react';

function App() {
    const [numbers, setNumbers] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
        const randomNumber = Array.from(
            { length: 4 },
            () => Math.floor(Math.random() * 10) + 1
        );
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
            <div className="bg-gray-500 flex flex-col pt-32">
                <div className="text-white flex flex-col self-center items-center">
                    <h1 className="text-4xl uppercase font-bold">
                        Hasilkan Angka 32
                    </h1>
                    <p className="self-center">
                        Berdasarkan angka di bawah ini
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="mt-24 w-3/4 self-center flex"
                >
                    <input
                        type="text"
                        className="h-10 w-[80%] rounded-l-full p-2 font-bold pl-4"
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="bg-green-500 text-white text-xl h-10 w-[20%] rounded-r-full"
                    >
                        Submit
                    </button>
                </form>
                <div className="text-white font-bold text-2xl self-center mt-20">
                    {numbers.map((number, index) => {
                        return (
                            <button
                                key={index}
                                className="bg-blue-500 w-20 h-20 mx-2 "
                                onClick={() => handleNumberClick(number)}
                            >
                                {number}
                            </button>
                        );
                    })}
                </div>
                <div className="text-white font-bold text-4xl self-center mt-4">
                    <button
                        className="bg-green-500 w-20 h-20 mx-2"
                        onClick={() => handleOperatorClick('+')}
                    >
                        +
                    </button>
                    <button
                        className="w-20 h-20 mx-2 bg-red-500"
                        onClick={() => handleOperatorClick('-')}
                    >
                        -
                    </button>
                    <button
                        className="w-20 h-20 mx-2 bg-blue-500"
                        onClick={() => handleOperatorClick('*')}
                    >
                        x
                    </button>
                    <button
                        className="w-20 h-20 mx-2 bg-indigo-700"
                        onClick={() => handleOperatorClick('/')}
                    >
                        /
                    </button>
                </div>
                <div className="text-white font-bold self-center mt-20 mb-20">
                    {result === 32 ? (
                        <p>Hasil: {result}</p>
                    ) : (
                        <p>
                            Hasil {result} bukan hasil yang diinginkan, yang
                            diinginkan adalah 32
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}
export default App;
