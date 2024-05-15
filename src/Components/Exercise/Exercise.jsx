import SeclectCard from "./SeclectCard";
import ExerciseOpCard from "./ExerciseOpCard";
import "./Exercise.css";
// import axios from "axios";
import { useState } from "react";

const Exercise = () => {
  let selectArr=["All","Back","Upper Legs","Waist","Shoulder","Bicep","Chest","Lower Legs"]
  let [opDataArr, setOpDataArr] = useState([]);
  let [serachIp, setSearchip] = useState("");
  const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${serachIp}?limit=10`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f744c73f05msha5a00bb353c6737p13f2c5jsn0fa732edf26f",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  async function getData() {
    const response = await fetch(url, options);
    const result = await response.json();
    setOpDataArr(result);
    console.log(result);
  }

  function searchOp() {
    getData();
  }

  return (
    <section className="exer-box" id="Exercise">

      {/* Exercise search box to search exercise from ip tag */}
      <div className="exer-content  text-center h-[35vh] grid items-center">
      <div className="exer-ip-box">
      <h3 className="font-bold text-[25px] min-[600px]:text-[30px] mb-[25px] text-white">
          Awsome exercises You Should Know
        </h3>
        <input
          type="text"
          placeholder="Search Body Part...."
          className="exer-ip text-[15px] min-[400px]:text-[20px] p-[5px] min-[400px]:p-[8px] w-[60%] min-[768px]:w-[40%]
      mx-auto"
          value={serachIp}
          onChange={(e) => {
            setSearchip(e.target.value);
          }}
        />
        <button
          className="search-btn py-[7px] text-[15px] min-[400px]:text-[20px] px-[15px] text-yellow-300 border-2 border-yellow-300 hover:bg-yellow-300 hover:text-black hover:cursor-pointer duration-200 transition ease-in"
          onClick={searchOp}
        >
          Seacrh
        </button>
      </div>
      </div>




       {/* Exercise select box to select exercise type */}
       <div className="exer-select-box grid grid-cols-1 min-[350px]:grid-cols-2 min-[768px]:grid-cols-3 min-[1024px]:grid-cols-4 gap-[25px] text-white 
       w-[95%] min-[768px]:w-[90%] mx-auto p-[20px]">
        {
          selectArr.map((item)=>{
            return  <SeclectCard key={item}  name={item} setOpDataArr={setOpDataArr}/>
          })
        }
       </div>




      {/* Exercise Output card box to display op cards */}
      <div className="exer-op-cardbox grid grid-cols-1 min-[768px]:grid-cols-2 gap-[30px] w-[95%] min-[1024px]:w-[90%] mx-[auto] py-[35px] ">
        {opDataArr.map((item) => {
          return (
           <ExerciseOpCard item={item} key={item.id}/>
          );
        })}
      </div>



    </section>
  );
};

export default Exercise;
