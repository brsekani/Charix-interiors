import backgroundImage from "/public/The Simple Serenity of Soft Minimalism 1.png";
import logoImg from "../../public/Chariz Interiors 1.png";
import mailIcon from "/public/mail-01.png";
import lockIcon from "/public/square-lock-02.png";

function Signup() {
  return (
    <div className="flex items-center justify-center">
      <div className="lg:max-w-[1512px] flex items-center justify-center">
        <div className="relative flex">
          <img
            className="max-w-[1512px] w-full max-h-[1012px] h-full"
            src={backgroundImage}
            alt=""
          />
          <div className="absolute flex flex-col items-center max-w-[1512px] w-full max-h-[1012px] h-full bg-[#FFFFFF] opacity-[82%] inset-0  px-[27rem]">
            <img className="absolute left-14 top-5" src={logoImg} alt="" />
            <div className="flex items-center justify-between w-full mt-52">
              <h6>Welcome</h6>
              <p>Login</p>
            </div>
            <h1>Create an account</h1>
            <form className="flex items-center gap-6">
              <div>
                <label>Full Name</label>
                <div className="relative max-w-[369px] w-full h-[63px] ">
                  <input
                    className="max-w-[369px] w-full h-[63px] px-12 pb-1 border border-[#777777]"
                    type="text"
                  />
                  <img
                    className="absolute top-4 left-3"
                    src={mailIcon}
                    alt=""
                  />
                </div>
                <label>Phone Number</label>
                <div className="relative max-w-[369px] w-full h-[63px] ">
                  <input
                    className="max-w-[369px] w-full h-[63px] px-12 pb-1 border border-[#777777]"
                    type="text"
                  />
                  <img
                    className="absolute top-4 left-3"
                    src={lockIcon}
                    alt=""
                  />
                </div>
                <label>Password</label>
                <div className="relative max-w-[369px] w-full h-[63px] ">
                  <input
                    className="max-w-[369px] w-full h-[63px] px-12 pb-1 border border-[#777777]"
                    type="text"
                  />
                  <img
                    className="absolute top-4 left-3"
                    src={lockIcon}
                    alt=""
                  />
                </div>
              </div>
              <div>
                <label>Email Address</label>
                <div className="relative max-w-[369px] w-full h-[63px] ">
                  <input
                    className="max-w-[369px] w-full h-[63px] px-12 pb-1 border border-[#777777]"
                    type="text"
                  />
                  <img
                    className="absolute top-4 left-3"
                    src={mailIcon}
                    alt=""
                  />
                </div>
                <label>Country</label>
                <div className="relative max-w-[369px] w-full h-[63px] ">
                  <input
                    className="max-w-[369px] w-full h-[63px] px-12 pb-1 border border-[#777777]"
                    type="text"
                  />
                  <img
                    className="absolute top-4 left-3"
                    src={lockIcon}
                    alt=""
                  />
                </div>
                <label>Confirm Password</label>
                <div className="relative max-w-[369px] w-full h-[63px] ">
                  <input
                    className="max-w-[369px] w-full h-[63px] px-12 pb-1 border border-[#777777]"
                    type="text"
                  />
                  <img
                    className="absolute top-4 left-3"
                    src={lockIcon}
                    alt=""
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
