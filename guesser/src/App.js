import './Colors/App.css';
import Scores from './Scores';
import Header from './Header';
import Start from './Start';
import l1 from './pics/1.png';
import l2 from './pics/2.png';
import l3 from './pics/3.png';
import l4 from './pics/4.png';
import l5 from './pics/5.png';
import l6 from './pics/6.png';
import qm2 from './pics/qm2.png';

function App() {

  return (
    <div className="App my-3">
      <Header/>
      <Start/>
      <Scores/>
      <div id="mainid" className='my-3'>
<div>
<h2 id="c" className="my-3">Choose One</h2>
<table id="dices" className="" >
  <tr>
    <td><img src={l1} alt = "None" height="60px" className="mx-2 my-2 bg-light"  id="ll1" /></td>
    <td><img src={l2} alt = "None" height="60px" className="mx-2 my-2 bg-light"  id="ll2" /></td>
    <td><img src={l3} alt = "None" height="60px" className="mx-2 my-2 bg-light"  id="ll3" /></td>
  </tr>
  <tr>
    <td><img src={l4} alt = "None" height="60px" className="mx-2 my-2 bg-light"  id="ll4" /></td>
    <td><img src={l5} alt = "None" height="60px" className="mx-2 my-2 bg-light"  id="ll5" /></td>
    <td><img src={l6} alt = "None" height="60px" className="mx-2 my-2 bg-light"  id="ll6" /></td>
  </tr>
</table>
        
</div>

<div style={{backgroundColor:"white"}}>
    <img src={qm2} alt="None" height="100px" className="my-3"/>
    <div id="num">
    <div>
    <h3  className="my-3">Player</h3>
    <h3  className="my-3">Computer</h3>
    </div>
    <div>
      <h3 className="my-3 mx-3" >{0}</h3>
      <h3 className="my-3 mx-3" >{1}</h3>
    </div>
    </div>
    
</div>

</div>


    </div>
  );
}

export default App;
