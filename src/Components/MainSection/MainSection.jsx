import './MainSection.css';

const MainSection = () => {
    return (
       <main className='main-box relative top-[0vh] w-[100%] h-[60vh] min-[768px]:h-[75vh] min-[1024px]:h-[90vh] bg-[url("https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] text-white' >
        <div className='main-box-child absolute w-[100%]  h-[100%] grid items-center' >
           <div className='main-content border-2 border-yellow-300 w-fit mx-auto text-center p-[25px]'>
           <h2 className='text-[25px] min-[600px]:text-[30px] min-[768px]:text-[35px] font-bold my-[7px]'>Get Stronger <br/> Get Fitter</h2>
            <p className='text-[17px] min-[600px]:text-[22px] min-[768px]:text-[25px] font-semibold my-[7px]'>We Help You To Make Your Dream Come Ture Here <br/> and Achive Here Whatever Your Want</p>
            <button className='main-btn text-[20px] px-[15px] py-[7px] border-2 border-yellow-300 my-[7px] text-yellow-300 hover:bg-yellow-300 hover:text-black hover:cursor-pointer duration-200 transition ease-in'>Get Exercies</button>
           </div>
         </div>
       </main>
    );
}

export default MainSection;
