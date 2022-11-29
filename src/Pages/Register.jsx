import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthProvider";

const Register = () => {
  const { handleRegister, UpdateNamePhotoURL, LoginGoogle } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterWithEmail = (data) => {
    handleRegister(data.email, data.password)
      .then((result) => {
        const user = result.user;
        const profile = {
          displayName: data.name,
          photoURL: data.url,
        };
        UpdateNamePhotoURL(profile);

        if (user.uid) {
          saveUser(data.name, data.email, data.accountType, data.url);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const saveUser = (name, email, accountType, img) => {
    const user = { name, email, accountType: accountType, user_img: img };
    fetch("https://used-procuct.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // set email for custom hook useToken for check token
        // console.log("saveUser data", data);
        navigate(from, { replace: true });
      });
  };

  return (
    <div className="flex items-center min-h-screen p-4 pb bg-gray-100 lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="w-full"
            alt="Sample image"
          />
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Already have an account?</span>
            <Link to={"/login"} className="underline">
              Login
            </Link>
          </p>
          <p className="mt-6 text-sm text-center text-gray-300">
            Read our{" "}
            <Link href="#" className="underline">
              terms
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline">
              conditions
            </Link>
          </p>
        </div>
        <div className="p-5 pb-8 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Create Account
          </h3>
          <form
            onSubmit={handleSubmit(handleRegisterWithEmail)}
            action="#"
            className="flex flex-col space-y-2"
          >
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-500"
              >
                Full Name
              </label>
              <input
                defaultValue=""
                type="text"
                id="name"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>

            <div className="flex flex-col space-y-1">
              <label
                htmlFor="url"
                className="text-sm font-semibold text-gray-500"
              >
                Photo Url
              </label>
              <input
                defaultValue=""
                type="url"
                id="url"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                {...register("url", { required: true })}
              />
              {errors.url && (
                <span className="text-red-500">Photo Url is required</span>
              )}
            </div>

            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-500"
              >
                Email address
              </label>
              <input
                defaultValue=""
                type="email"
                id="email"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Password
                </label>
              </div>
              <input
                type="password"
                id="password"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">Password is required</span>
              )}
            </div>

            <select
              {...register("accountType", { required: true })}
              className="select select-bordered w-full"
            >
              <option value="seller">Seller</option>
              <option value="buyer">Buyer</option>
            </select>
            {errors.name && (
              <span className="text-red-500">Account type is required</span>
            )}
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
