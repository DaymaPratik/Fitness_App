import "./Exercise.css";
// import axios from "axios";
import { useState } from "react";

const Exercise = () => {
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
    <section className="exer-box">
      <div className="exer-content  text-center h-[35vh] grid items-center">
      <div className="exer-ip-box">
      <h3 className="font-bold text-[25px] min-[600px]:text-[30px] mb-[25px] text-white">
          Awsome exercises You Should Know
        </h3>
        <input
          type="text"
          placeholder="Serach Body Part...."
          className="exer-ip text-[15px] min-[400px]:text-[20px] p-[5px] min-[400px]:p-[7px] w-[60%] min-[768px]:w-[40%]
      mx-auto"
          value={serachIp}
          onChange={(e) => {
            setSearchip(e.target.value);
          }}
        />
        <button
          className="search-btn py-[7px] text-[15px] min-[400px]:text-[20px] px-[15px]"
          onClick={searchOp}
        >
          Seacrh
        </button>
      </div>
      </div>

      <div className="exer-op-cardbox grid grid-cols-1 min-[768px]:grid-cols-2 gap-[20px] min-[1024px]:gap-[30px] w-[95%] min-[1024px]:w-[90%] mx-[auto]">
        {opDataArr.map((item) => {
          return (
            <div className="exer-card  max-[500px]:h-fit min-[500px]:flex justify-center items-center
            " key={item.id}>
              <div className="exer-card-content max-[500px]:mx-auto w-[90%] min-[500px]:w-[55%] p-[15px] h-fit">
              <h2 className="text-[23px] min-[400px]:text-[27px] min-[1024px]:text-[30px] font-bold">Body Part:-{item.bodyPart}</h2>
              <p className="text-[18px] min-[400px]:text-[22px] min-[1024px]:text-[25px] font-semibold">Equipment:-{item.equipment}</p>
              <h4 className="text-[15px] min-[400px]:text-[20px] ">Name:-{item.name}</h4>
              
              </div>
              <img src={item.gifUrl} alt="" className="h-[100%] max-[500px]:mx-auto w-[90%]  min-[500px]:w-[45%]"/>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Exercise;
