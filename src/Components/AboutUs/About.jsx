import "./About.css";

const About = () => {
  return (
    <section id="About" className="about-box relative top-[0px] w-[100%] h-fit min-[600px]:h-[80vh] ">
      <div className="min-[600px]:absolute w-[100%] h-[100%] flex items-center about-child-box">
        <div className="about-content p-[10px] min-[600px]:p-[25px] max-[768px]:mx-auto w-[90%] min-[600px]:w-[80%]  min-[1024px]:w-[55%] h-[90%] text-white min-[768px]:ml-[30px] min-[600px]:text-center">
          <h3 className=" p-[5px] text-[25px] min-[600px]:text-[30px] font-bold my-[5px] min-[1024px]:my-[10px]  text-yellow-300">
            About Us
          </h3>
          <p className="text-[14px] min-[400px]:text-[17px] min-[600px]:text-[20px] min-[1024px]:text-[25px] font-bold my-[5px] min-[1024px]:my-[10px] p-[5px] min-[600px]:p-[20px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
            repudiandae magni. Veniam ipsa nam possimus vitae quasi quibusdam
            ipsum dolores hic qui accusamus unde in repellendus minus
            voluptatibus laborum, omnis ex impedit officia dignissimos natus
            molestiae corruptbus is. my name is khan and i lie
          </p>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="min-[600px]:absolute h-[100%] w-[90%] max-[600px]:mx-auto min-[600px]:w-[60%] right-[0px]"
      />
    </section>
  );
};

export default About;
