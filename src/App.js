import Button from'./Components/Menu/navMenu';
import Info from './Components/GeneralInfo/generalInfo';
import Stack from './Components/Stack/stack';
import Portfolio from './Components/Portfolio/portfolio';
import Contacts from './Components/Contact/contacts';
import nameBtn from './data/dataNameBtn.json'

export default function App() {

  const result = [];

  nameBtn.forEach((element) => {
    result.push(<Button name={element.name} key={element.id} link={element.id}></Button>);
  });

  return (
    <>
    
    <div className="wrapperMenu">
      <div className="menu">{result}</div>
      
      <span className='menu-nav'>
            <input className="navigation-btn" type="checkbox" id="navigation-btn" />
            <label className="navigation-icon" htmlFor="navigation-btn"><span className="category"></span></label>
        
            <ul className="navigation">
              {result}
            </ul>
        </span>
    </div>

    <Info></Info>
    <Stack></Stack>
    <Portfolio></Portfolio>
    <Contacts></Contacts>
    </>
  );
}