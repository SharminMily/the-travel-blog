import "./styles.css";
const Banner = () => {
  return (
    <>    
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: "url(https://i.ibb.co/bKf35PG/naturalbg.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">

          <div className="max-w-md text-start">
           
           <h1 className="mb-5 flex gap-0 md:text-6xl text-3xl font-bold">My Traveling</h1>

           <div className="flex items-center gap-2">
            <div className="">
            
            <h1 className="mb-5 md:text-6xl text-3xl font-bold">
                Blog...</h1></div>
          

            <div className=""><img className="rounded-full w-12" src="https://i.ibb.co/PFLN3XG/giphy.gif" alt="" /></div>
            
           </div>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

           <div className="animation flex justify-start">
           <a  href="#" target="_blank" className="btnn ">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              WellCome
            </a>
           </div>
          </div>



          </div>
      </div>

      <div className="relative -top-20 md:-top-40 lg:-top-56">
        <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#106888"
            fill-opacity="1"
            d="M0,64L24,90.7C48,117,96,171,144,176C192,181,240,139,288,144C336,149,384,203,432,218.7C480,235,528,213,576,186.7C624,160,672,128,720,144C768,160,816,224,864,229.3C912,235,960,181,1008,160C1056,139,1104,149,1152,170.7C1200,192,1248,224,1296,234.7C1344,245,1392,235,1416,229.3L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg>
      </div>
      
    </>
  );
};

export default Banner;
