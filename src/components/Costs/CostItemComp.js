import Card from "../UI/Card";
//import CostItem from "./Costitem";
import './CostItemComp.css';
import CostFilter from "./CostFilter";
import { useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

function CostItemComp(props) {

    const [selectedYear, setSelectedYear] = useState('2023');
    
    const yearChangeHandler = (year) => {     
        console.log(year);
        setSelectedYear(year);
    };

    // metod filter ne izmenyaet massiv a sozdayot noviy massiv s filtrom
    const filteredCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === selectedYear;
    })

    const costComp = props.costs;

    return (
        <div>
            
            <Card className="costs">
                <CostFilter year={selectedYear} onChangeYear={yearChangeHandler}/>

                <CostsDiagram costs={filteredCosts}/>

                <CostList costs={filteredCosts}/>
                
                
                
                {/* {filteredCosts.length === 0 && costsContent}

                {filteredCosts.length > 0 && 
                    filteredCosts.map((cost) =>(
                        <CostItem 
                        key={cost.id}
                        date={cost.date}
                        description={cost.description}
                        amount={cost.amount}
                        /> 
                    ))} */}

                

                {/* <CostItem 
                    date={costComp[0].date} 
                    description={costComp[0].description} 
                    amount={costComp[0].amount}
                />
                <CostItem 
                    date={costComp[1].date} 
                    description={costComp[1].description} 
                    amount={costComp[1].amount}
                />
                <CostItem 
                    date={costComp[2].date}  
                    description={costComp[2].description} 
                    amount={costComp[2].amount}
                /> */}
            </Card>
        </div>
    );
}
export default CostItemComp;