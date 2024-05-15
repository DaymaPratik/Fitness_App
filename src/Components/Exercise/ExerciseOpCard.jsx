import './Exercise.css'
const ExerciseOpCard = ({item}) => {
    return (
        <div className="exer-op-card  max-[500px]:h-fit min-[500px]:flex justify-center items-center
        " key={item.id}>
          <div className="exer-card-content max-[500px]:mx-auto w-[90%] min-[500px]:w-[55%] p-[15px] h-fit">
          <h2 className="text-[23px] min-[400px]:text-[27px] min-[1024px]:text-[30px] font-bold"> <span className="text-yellow-300">Body Part:-</span> {item.bodyPart}</h2>
          <p className="text-[18px] min-[400px]:text-[22px] min-[1024px]:text-[25px] font-semibold"> <span className="text-yellow-300">Equipment:- </span> {item.equipment}</p>
          <h4 className="text-[15px] min-[400px]:text-[20px] "> <span className="text-yellow-300">Name:-</span> {item.name}</h4>
          
          </div>
          <img src={item.gifUrl} alt="" className="h-[100%] max-[500px]:mx-auto w-[90%]  min-[500px]:w-[45%]"/>
        </div>
    );
}

export default ExerciseOpCard;
