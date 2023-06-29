import { useState } from 'react'
import './CostForm.css'

const CostForm = (props) =>{

    const [inputname, setInputName] = useState('');
    const [inputamount, setInputAmount] = useState('');
    const [inputdate, setInputDate] = useState('');

    // vtoroy podxod raboti s state, v nem mi polzuemsya tolko s odnim steytom

    // const [userInput, setUserInput] = useState({
    //     name:'',
    //     amount:'',
    //     date:'',
    // });

const nameChangeHandler = (event) =>{
    setInputName(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     name: event.target.value
    // });

    // setUserInput((previousState) =>{
    //     return {
    //         ...previousState,
    //         name: event.target.value
    //     }
    // })
};

const amountChangeHandler = (event) =>{
    setInputAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     amount: event.target.value
    // });
};

const dateChangeHandler = (event) =>{
    setInputDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     date: event.target.value
    // });
};

    const submitHandler = (event) => {
        
        event.preventDefault();

        const costData = {
            description : inputname,
            amount: inputamount,
            date: new Date(inputdate)
        };

        props.onSaveCostData(costData);

        setInputName('');
        setInputAmount('');
        setInputDate('');
    };


  
     const inputCostDataHandler = () =>{
        
     }
    

    
    return (
        <form action="" onSubmit={submitHandler}>
                        <div className="new-cost__controls">
                            <div className="new-cost__control">
                                <label htmlFor="">Название</label>
                                <input type="text" value={inputname} onChange={nameChangeHandler}/>
                            </div>
                            <div className="new-cost__control">
                                <label htmlFor="">Сумма</label>
                                <input type="number" value={inputamount} onChange={amountChangeHandler} min='0.01' step = '0.01'/>
                            </div>
                            <div className="new-cost__control">
                                <label htmlFor="">Дата</label>
                                <input type="date" value={inputdate}  onChange={dateChangeHandler} min='2019-01-01' step = '2023-12-31'/>
                            </div>
                            <div className=".new-cost__actions">
                                <button type="submit">Добавить Расход</button>
                                <button onClick={props.onCancel} type='button'>Отмена</button>
                            </div>
                        </div>
                 </form>
    );
};

export default CostForm;