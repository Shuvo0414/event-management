import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import toast from "react-hot-toast";

const GoogleLogin = () => {
  const { name, googleLogin } = useContext(AuthContext);
  //   console.log(name);

  const handleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("User login successfully");
      })
      .catch(() => {
        toast.error("Invailed User");
      });
  };

  return (
    <>
      <div className="divider">continue with</div>
      <div className=" flex justify-around items-center">
        <button onClick={handleLogin} className="btn btn-sm btn-neutral">
          Google
        </button>
      </div>
    </>
  );
};

export default GoogleLogin;
