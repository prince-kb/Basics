
import './App.css';
// import news from './Important/News.json'
import ColorComponent from './Components/ColorComponent';
function App() {
  let r=0,g=0,b=0,a=1;
  function createArray(N) {
    let newArr = [];
    for (let i = 1; i <= N; i++) {
        newArr.push(i);
    }
    return newArr;
}
  let arr = createArray(81);
  const call=()=>{
    arr.map(()=>{
      if(r<255 && g<255 && b<255){
        console.log("HII")
        return  <ColorComponent color={`rgba(${r<255?r=r+3:255},${g<255?g=g+3:255},${b<255?b=b+3:255},${a})`}/>;
      }
    })  
  }

  return (

    
    <div style={{backgroundColor : 'white',height : '100vh',width : '100vw'}}>
      <div className="container">
        <h2>Lorem ipsum dolor sit.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tempore sit veritatis numquam placeat qui? Accusamus aspernatur iure veniam quo ipsum ad in nobis!</p>
      </div>
      {
        // <ColorComponent color={`rgba(${r=r+10},${g=g+10},${b=b+10},${a})`}/>
        call
    }
    {r=0}
    {g=0}
    {b=0}
      {
        arr.map(()=>{
          if(r<255 && g<255 && b<255){
            return  (<ColorComponent color={`rgba(${r<255?r=r+2:255},${g<255?g:255},${b<255?b:255},${a})`}/>);
          }
        })
      }
      {r=0}
      {g=0}
      {b=0}
      {
        arr.map(()=>{
          if(r<255 && g<255 && b<255){
            return  (<ColorComponent color={`rgba(${r<255?r:255},${g<255?g=g+2:255},${b<255?b:255},${a})`}/>);
          }
        })
      }
      {r=0}
      {g=0}
      {b=0}
      {
        arr.map(()=>{
          if(r<255 && g<255 && b<255){
            return  (<ColorComponent color={`rgba(${r<255?r:255},${g<255?g:255},${b<255?b=b+2:255},${a})`}/>);
          }
        })
      }
    </div>
  );
}

export default App;
