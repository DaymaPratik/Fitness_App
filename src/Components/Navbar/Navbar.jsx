import "./Navbar.css";
const Navbar = () => {
  let navList = ["Home", "About", "Exercise", "Contact Us"];
  return (
    <nav className="navbar py-[10px] px-[20px] min-[768px]:px-[60px] flex min-[768px]:text-[20px] min-[1024px]:text-[25px] font-semibold items-center justify-between text-yellow-300">
      <div
        className="nav-logo-name-box flex
        "
      >
        <img
          src="https://img.freepik.com/premium-vector/fitness-logo_25327-144.jpg"
          alt="xxx"
          className="w-[50px] max-[350px]:hidden"
        />
        <h1 className="nav-head text-[25px]  min-[400px]:text-[30px] min-[1024px]:text-[35px] font-bold">
          FITGURU
        </h1>
      </div>
      <ul className="nav-list flex  min-[1024px]:w-[55%] items-center justify-evenly max-[600px]:hidden">
        {navList.map((item) => {
          return (
            <li key={item} className="nav-list-item p-[10px] border-b-2 border-yellow-300 hover:bg-yellow-300 hover:text-black hover:cursor-pointer duration-200 transition ease-in">
             <a href='#'>{item}</a>
            </li>
          );
        })}
      </ul>
      <div className="min-[600px]:hidden bg-red-600 border-2 border-red-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 w-[40px] h-[40px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
