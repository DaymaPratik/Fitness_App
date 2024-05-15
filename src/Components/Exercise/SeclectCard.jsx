import './Exercise.css';

const SeclectCard = ({name,setOpDataArr}) => {
    
    let searchName=name.toLowerCase();
    let url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${searchName}?limit=10`;
    if(name==='All'){
          url='https://exercisedb.p.rapidapi.com/exercises';
    }
 
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
    //   console.log(result);
    }
    return (
      <div>
          <div className="exer-select-card border-2 border-yellow-300 p-[10px] text-yellow-300 hover:bg-yellow-300 hover:text-black hover:cursor-pointer duration-200 transition ease-in" onClick={getData}>
        <img src="https://t4.ftcdn.net/jpg/04/22/12/95/360_F_422129557_tBylYldzJ5KjVTEdRLMkQIaYizThV1PE.jpg" alt="" className="w-[50px] mx-auto my-[5px]"/>
        <p className="text-center text-[17px] min-[400px]:text-[25px] my-[5px]">{name}</p>
       </div>
    
</div>
    );

}

export default SeclectCard;
