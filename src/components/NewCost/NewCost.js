import React, {useState} from 'react';
import CostForm from './CostForm';
import './NewCost.css';

const NewCost = (props) =>{

    const [isFormVisible, setIsFormVisible] = useState(false)

    const saveCostDataHandler = (inputCostData) => {

        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        }

       props.onAddCost(costData);
       setIsFormVisible(false);
    };

    const inputCostDataHandler = () =>{
        setIsFormVisible(true);
    }

    const canselCostHandler = ()=> {
        setIsFormVisible(false);
    }

    return (
        <div className="new-cost">
            {!isFormVisible && <button onClick={inputCostDataHandler}>Добавить новый Расход</button>}
            
            {isFormVisible && <CostForm onCancel={canselCostHandler} onSaveCostData = {saveCostDataHandler}/>}
        </div>
    );
};

export default NewCost;
