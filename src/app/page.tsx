export default function Home() {
  return (
    <div className="bg-[#252B42] font-montserrat min-h-screen w-[-1440px] h-[-1132px]  -top-[590px] -left-[720px]">
      <div className="w-1322px h-91px">
        <div className="container mx-auto flex items-center  text-[#FFFFFF]">
          <div className="w-[152px] h-[32px] relative top-[17px] left-[136px]">
            <h3 className=" text-[24px]  font-bold leading-[32px] tracking-[0.1px]">
              BrandName
            </h3>
          </div>
 
          <div className="w-[815px] h-[58px] relative top-[16px] left-[364px]">
            <nav className=" flex w-[275px] h-[24px] relative top-[17px] left-[-120px] gap-[21px] list-none">
              <li className="w-43 h-24">
                <a
                  href="#"
                  className=" text-[14px] font-bold leading-6 tracking-wider text-center no-underline"
                >
                  Home
                </a>
              </li>

              <li className="w-59 h-24">
                <a
                  href="#"
                  className=" text-[14px] font-bold leading-6 tracking-wider text-center no-underline"
                >
                  Product
                </a>
              </li>

              <li className="w-52 h-24">
                <a
                  href="#"
                  className=" text-[14px] font-bold leading-6 tracking-wider text-center no-underline"
                >
                  Pricing
                </a>
              </li>

              <li className="w-58 h-24">
                <a
                  href="#"
                  className=" text-[14px] font-bold leading-6 tracking-wider text-center no-underline"
                >
                  Contact
                </a>
              </li>
            </nav>

            <div className="flex items-center gap-[45px] relative top-[-16px]  left-[626px]">
              <a className="w-41 w-22">
                <button className=" text-sm font-bold leading-5 tracking-[0.2px] text-right">
                  Login
                </button>
              </a>
              <div className="w-[214px] h-[52px]">
                <button className="w-[110px] h-[52px] bg-[#23A6F0] rounded-l-md  py-[15px] px-[25px] gap-[15px]">
                  <p className=" font-bold text-sm leading-5">JOIN US</p>
                </button>
              </div>

              <button className="w-[24px] h-[13.71px]"></button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <section className="relative w-[699px] h-[496px] pt-40 pb-40 gap-10 ">
          <h5 className="text-[#23A6F0]  text-[16px] text-center font-bold leading-[24px] tracking-[0.1px]">
            Welcome
          </h5>
          <br />
          <br />

          <h1 className="text-center text-[#FFFFFF] text-[58px] font-bold leading-[80px] tracking-[0.2px]">
            Selling on the
            <br />
            internet like a pro
          </h1>
          <br />
          <br />

          <h4 className=" text-xl font-normal leading-[30px] text-center text-[#FFFFFF] tracking-tight-custom">
            We know how large objects will act but things on a<br />
            small scale just do not act that way.
          </h4>
          <br />
          <br />

          <div className="w-[365px] h-[52px] gap-[10px] ml-40  flex">
            <button className="w-[193px] h-[52px] rounded-md  bg-[#23A6F0]">
              <p className=" text-center  text-[#FFFFFF] text-sm font-bold leading-[22px] tracking-[0.2px]">
                Get Quote Now
              </p>
            </button>

            <button className="w-[162px]  gap-[10px] rounded-md border border-solid border-[#23A6F0] ">
              <p className="text-center text-[#23A6F0] text-sm font-bold leading-[22px] tracking-[0.2px]">
                Learn More
              </p>
            </button>
          </div>
        </section>
      </div>

      <section className="flex justify-center pt-60 pb-60 ">
        <div className="w-[1046px] h-[292px] mx-auto gap-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-3 ">
            <div className="w-[328px] h-[292px] p-[35px_40px] bg-white shadow-[0px_13px_19px_#00000012] gap-[20px]">
              <div className="w-[70px] h-[76px] rounded-[10px] bg-[#FFDCD1] pt-5 pr-5 pb-5 pl-5 gap-[10px]"></div>
              <br />
              <h5 className=" text-[16px] font-bold text-[#252B42] leading-6 tracking-[0.1px] text-left">
                Training Courses
              </h5>
              <br />
              <div className="w-[50px] h-[2px] bg-[#E74040]"></div>
              <br />
              <p className="w-[222px] h-[60px] text-sm text-[#737373] font-medium leading-[20px] tracking-[0.2px] text-left">
                The gradual accumulation of information about atomic and
                small-scale behaviour...
              </p>
            </div>

            <div className="w-[328px] h-[292px] p-[35px] bg-[#FFFFFF] shadow-[0px_13px_19px_#00000012]  flex flex-col gap-5">
              <div className="w-[70px] h-[76px] rounded-lg bg-[#B9EAA8] pt-5 pr-5 pb-5 pl-5 gap-2"></div>
              <h5 className="text-[16px] font-bold text-[#252B42] leading-6 tracking-[0.1px] text-left">
                2,769 online courses
              </h5>
              <div className="w-[50px] h-[2px] bg-[#E74040]"></div>
              <p className="w-[222px] h-[60px] text-[14px] text-[#737373] font-medium leading-5 tracking-[0.2px] text-left">
                The gradual accumulation of information about atomic and
                small-scale behaviour...
              </p>
            </div>

            <div className="w-[328px] h-[292px] p-[35px] bg-[#23A6F0] shadow-[0px_13px_19px_#00000012] text-white flex flex-col gap-5">
              <div className="w-[70px] h-[76px] rounded-lg bg-[#FFFFFF] pt-5 pr-5 pb-5 pl-5 gap-2"></div>
              <h5 className="text-[#FFFFFF] text-[16px] font-bold leading-6 tracking-[0.1px] text-left  mb-2">
                Training Courses
              </h5>
              <div className="w-[50px] h-[2px] bg-[#FFFFFF]"></div>
              <p className="text-[#FFFFFF] text-[14px] font-medium leading-5 tracking-[0.2px] text-left">
                The gradual accumulation of information about atomic and
                small-scale behaviour...
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
