import React, { useState } from 'react';
import '../styles/Calculadora.css';


    const Calculadora = () => {
        const [displayValue, setDisplayValue] = useState('0');

    const handleButtonPress = (value) => {
        if (displayValue === 'Error'){
            setDisplayValue (value);
        } else {
         if (displayValue === '0'){
            setDisplayValue(value);
        } else {
            setDisplayValue(displayValue + value);
        }}
    };

    const handleCalculate = () => {
        try {
            const result = eval(displayValue);
            setDisplayValue(result.toString());
        } catch (error) {
            setDisplayValue('Error');
        }
    };

    const handleClear = () => {
        setDisplayValue('0');
    };

    return (
        <div className='Calculadora'>
            <div className='display'> {displayValue} </div>
            <div className='buttons'>
                <div className='row'>
                    <button onClick={() => handleButtonPress('7')}> 7 </button>
                    <button onClick={() => handleButtonPress('8')}> 8 </button>
                    <button onClick={() => handleButtonPress('9')}> 9 </button>
                    <button onClick={() => handleButtonPress('/')}> / </button>
                </div>

                <div>
                    <button onClick={() => handleButtonPress('4')}> 4 </button>
                    <button onClick={() => handleButtonPress('5')}> 5 </button>
                    <button onClick={() => handleButtonPress('6')}> 6 </button>
                    <button onClick={() => handleButtonPress('*')}> * </button>
                </div>
                <div>
                    <button onClick={() => handleButtonPress('1')}> 1 </button>
                    <button onClick={() => handleButtonPress('2')}> 2 </button>
                    <button onClick={() => handleButtonPress('3')}> 3 </button>
                    <button onClick={() => handleButtonPress('-')}> - </button>
                </div>
                <div>
                    <button onClick={() => handleButtonPress('0')}> 0 </button>
                    <button onClick={() => handleButtonPress('.')}> . </button>
                    <button onClick={handleCalculate}> = </button>
                    <button onClick={() => handleButtonPress('+')}> + </button>
                </div>
                <div>
                    <button onClick={handleClear}>C</button>
                </div>
            </div>
        </div>
    );

};

export default Calculadora;