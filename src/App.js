import './App.css';
import CostItemComp from './components/Costs/CostItemComp';
import NewCost from './components/NewCost/NewCost';
import React, {useState} from 'react';

const INITIAL_COSTS = [
  {
      id: 'c1',
      date: new Date(2023, 5, 12),
      description: "Xolodilnik",
      amount: 999.99
  },
  {
      id: 'c',
      date: new Date(2023, 4, 25),
      description: "Konder",
      amount: 799.99
  },
  {
      id: 'c3',
      date: new Date(2023, 1, 11),
      description: "Komp",
      amount: 1599.99
  }
];

function App() {

  const [costs, setCosts] = useState(INITIAL_COSTS);

  

  const addCostHandler = (cost) => {
      setCosts(prevCosts => {
        return[cost, ...prevCosts]
      });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
        
      <CostItemComp costs={costs}/>

    </div>
  );
}

export default App;
