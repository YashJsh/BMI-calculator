import { useMemo, useState } from 'react'
import './App.css'

function App() {

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const output = useMemo(()=>{
    const calheight = height/100;
    return (weight/(calheight*calheight));
  },[weight, height])
   return (
    <>
      <div className="mx-auto w-fit p-[1rem] rounded-xl flex flex-col  bg-blue-100 my-[1rem]">
        <nav className='bg-blue-500 text-white  h-[5rem] w-[35rem] text-center p-5 rounded-xl'><h1 className='text-4xl font-bold'>BMI CALCULATOR </h1></nav>
        <form className="flex flex-col justify-center align-center gap-2 pt-[1rem] text-center w-[20rem] ml-[8rem]" action="">
            <label htmlFor="height">Height is {height}</label>
            <input type="range" name = "Height" min="0" max="250" onClick={(e)=>{setHeight(e.target.value)}}/>
            <label htmlFor="weight">Weight is {weight}</label>
            <input type="range" name = "Weight" min="0" max="200" onClick={(e)=>{setWeight(e.target.value)}}/>
            <p className="rounded bg-blue-300 h-[3rem] mt-4 text-center pt-[6px]">Your BMI is {output}</p>

        </form> 
      </div>
    </>
  )
}

export default App
