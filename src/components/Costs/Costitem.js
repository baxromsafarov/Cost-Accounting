import Card from "../UI/Card";
import CostDate from "./CostDate";
import "./CostItem.css"

function Costitem(props){



    // propsi mojno bilo ispolzovat pryamo v divax
    const costDate = props.date;
    const costDescription = props.description;
    const costAmount = props.amount;

    
    return (
        <li>
            <Card className="cost-item">
                <CostDate date={costDate}/>
                <div className='cost-item__description'>
                    <h2>{costDescription}</h2>
                    <div className="cost-item__price">${costAmount}</div>
                </div>
            </Card>
        </li>
    );
}

export default Costitem;