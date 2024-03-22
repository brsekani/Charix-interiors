import backgroundImage from "../../public/The Simple Serenity of Soft Minimalism.png";
import logoImg from "../../public/Chariz Interiors 1.png";

function Login() {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[1512px] w-full flex">
        <div className="relative ">
          <img className="max-w-[727px] h-[982px]" src={backgroundImage} />
          <div className="text-white text-4xl absolute  top-1 left-12 ">
            <img src={logoImg} />
          </div>
        </div>
        <div className="bg-red-900 w-full max-w-[727px] h-[982px]">
          <div>
            <p>Welcome back</p>
            <p>Sign up here</p>
          </div>
          <h1>Login to Chariz Interiors</h1>
          <form>
            <label>Email Address</label>
            <input type="text" />
            <label>Password</label>
            <input type="text" />
            <button>Login</button>
            <p>Forgot password? Reset here</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
