import "./CostList.css";
import Costitem from "./Costitem";

const CostList = (props) => {
    
    if (props.costs.length === 0){
        return <h2 className="cost-list__fallback">В этом году Расходов Нет</h2>
    }


    return (
            <ul className="cost-list">
            {props.costs.map((cost) =>(
            <Costitem 
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
            /> 
        ))}
            </ul>
        );
}

export default CostList;