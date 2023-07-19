/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks";
import { createUser } from "../../redux/features/users/userSlice";
import { toast } from "react-toastify";

interface SignupFormInputs {
  email: string;
  password: string;
}
function Register() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  const onSubmit = (data: SignupFormInputs) => {
   dispatch(createUser({email : data.email, password: data.password}))
    toast.success('Register successfully done',{
      theme:"dark"
  })
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 max-w-[400px] mx-auto bg-slate-600 rounded-lg p-10">
          <div className="grid gap-1">
            <label className="text-sm font-medium text-slate-100" htmlFor="email">
              Email
            </label>
            <input
              className="p-2 rounded-md my-2 text-slate-100 placeholder:text-sm"
              id="email"
              placeholder="Enter your email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            <label className="text-sm font-medium text-slate-100 " htmlFor="email">
              Password
            </label>
            <input
              id="password"
              className="p-2 rounded-md my-2 text-slate-100 placeholder:text-sm"
              placeholder="Enter your password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            {/* <label className="text-sm font-medium text-slate-100" htmlFor="email">
              Confirm Password
            </label>
            <input
              id="password"
              className="p-2 rounded-md my-2 text-slate-100 placeholder:text-sm"
              placeholder="Enter confirm password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
            /> */}
          </div>
          <button className="btn">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
