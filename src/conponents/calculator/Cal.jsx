import React from 'react';
import './cal.css'


const Cal =({handleClose}) =>{
    const [result, setResult] = React.useState('')
    // const [digit, setDigit] = React.useState ('')
    const [finalResult, setFinalResult] = React.useState ('')
    const [isAvailable, setIsAvailable ] = React.useState (false)
    const sign =React.useRef(isAvailable)

    console.log(result.length)

    const handleClick = (e) =>{
        setResult(result.concat(e.target.name))
        
    }
    const onKeyPress = () => {
        setResult(result.split(0, ) )
    }
    
    const Clear = () =>  {
        setResult('')

    }
    const handleDelete =() => {
        setResult(result.slice(0, -1))
    }
    const handleCalculate =() => {
        try {
            setFinalResult(eval(result).toString())
            
        } catch (error) {
            setFinalResult('input Error')
            
        }
    }
    return (
        <div className='calculator'>
            <button onClick={handleClose}>x</button>
            <h1>Calculator</h1>
            <div className='display'>
               {result.length > 0 ?  (<><input onKeyPress placeholder='input value' value={result} />
                <h2>{finalResult}</h2></>) :
                (<><h3>...</h3>
                <h2>0</h2></>)}

            </div>
            {result && <p onClick={Clear}>Clear your taught</p>}
            <div>
                <div className='nands'>
                <div className='number'>
                    <button onClick={handleClick} name='7'>7</button>
                    <button onClick={handleClick} name='8'>8</button>
                    <button onClick={handleClick} name='9'>9</button>
                    <button onClick={handleClick} name='4'>4</button>
                    <button onClick={handleClick} name='5'>5</button>
                    <button onClick={handleClick} name='6'>6</button>
                    <button onClick={handleClick} name='1'>1</button>
                    <button onClick={handleClick} name='2'>2</button>
                    <button onClick={handleClick} name='3'>3</button>
                    <button onClick={handleClick} name='.'>.</button>
                    <button onClick={handleClick} name='0'>0</button>
                    <button onClick={handleCalculate} name=''>=</button>
                </div>
                <div className='sign'>
                    <button onClick={handleDelete} name=''>DEL</button>
                    <button ref={sign} onClick={handleClick} name='/'>/</button>
                    <button ref={sign} onClick={handleClick} name='*'>x</button>
                    <button ref={sign} onClick={handleClick} name='-'>-</button>
                    <button ref={sign} onClick={handleClick} name='+'>+</button>
                </div>
                </div>
            </div>

        </div>

    )

}

export default Cal