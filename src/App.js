import {useState} from 'react';
import './App.css';

function App() {
  const [toDos,setToDos]= useState([])
  const [toDo,setToDo] = useState('')
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  const d= new Date().getDay();
  const setnull = () =>{
    setToDos([...toDos,{id: Date.now() ,text : toDo, status: false}])
    setToDo('')
  }
  
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {days[d]} 🌝 ☕ </h2>
      </div>
      <div className="input">

        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        {/* { toDo === '' ? null :  <i onClick={()=>setToDos([...toDos,{id: Date.now() ,text : toDo, status: false}])} className="fas fa-plus"></i> } */}
        { toDo === '' ? null :  <i onClick={setnull} className="fas fa-plus"></i> }
      </div>
      <div className="todos">

    { toDos.map((obj)=>{

     return ( <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              // console.log(e.target.checked)
              console.log(obj)
              setToDos(toDos.filter(obj2=>{
                if(obj2.id === obj.id){
                  obj.status=e.target.checked
                }
                return obj2 
              }))
            }} value={obj.status} type="checkbox" name="" id="" />
           {obj.status ? <p style={{ 'text-decoration-line' :'line-through' }}>{obj.text}</p> : <p style={{ color:'blue'}} >{obj.text}</p>  } 
          </div>
          <div className="right">
            <i onClick={()=>{
              const removeArray = [...toDos].filter((toDo)=> obj.id!== toDo.id)
              setToDos(removeArray)
            }
            } 
            
            className="fas fa-times"></i>
          </div> 
        </div>)
        }) }

        {toDos.map((obj)=>{
          if(obj.status){
            return (<h1>{obj.text}</h1>)
          }
          return null
        })}
      </div>
    </div>
  );
}

export default App;
