import { useForm } from "react-hook-form";
import { useUserStore } from "../store/store";
import type { User } from "../types";
import Error from "./Error";
import { toast } from "react-toastify";

const Login = () => {
  const { addUser } = useUserStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const registerUser = (data: User) => {
    addUser(data);
    toast.success(`Ingresaste correctamente ${data.name}`);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form
        className="bg-slate-900 text-white p-8 rounded-2xl shadow-md w-full max-w-md "
        onSubmit={handleSubmit(registerUser)}
      >
        <p className="text-3xl text-center  uppercase font-black mb-8">
          Iniciar sesión
        </p>
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold ">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            className=" bg-gray-300 w-full text-black rounded border border-gray-400 px-4 py-2 focus:outline-none"
            placeholder="Ingresa tu nombre"
            {...register("name", {
              required: "Tu nombre es obligatorio",
            })}
          />
          {errors.name && <Error>{errors.name?.message}</Error>}
        </div>
        <div className="mb-5">
          <label htmlFor="age" className="text-sm uppercase font-bold">
            Edad
          </label>
          <input
            id="age"
            type="number"
            className=" bg-gray-300 w-full text-black rounded border border-gray-400 px-4 py-2 focus:outline-none"
            placeholder="Ingresa tu Edad"
            min={"13"}
            {...register("age", {
              required: "Tu edad es obligatorio",
            })}
          />
          {errors.age && <Error>{errors.age?.message}</Error>}
        </div>
        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Dias
          </label>
          <input
            id="date"
            type="number"
            className=" bg-gray-300 w-full text-black rounded border border-gray-400 px-4 py-2 focus:outline-none"
            placeholder="Ingresa los dias que llevaras sin fumar"
            defaultValue={30}
            min="30"
            {...register("date", {
              required: "Los dias son obligatorios",
            })}
          />
          {errors.date && <Error>{errors.date?.message}</Error>}
        </div>
        <div className="w-full flex gap-4 mb-5">
          <div className=" w-3/4 flex flex-col">
            <label htmlFor="gender" className="text-sm uppercase font-bold">
              Genero
            </label>
            <select
              defaultValue=""
              id="gender"
              className=" w-4/4 text-black bg-gray-300 border border-gray-400 px-4 py-2 "
              {...register("gender", {
                required: "Elige una opcion porfavor",
              })}
            >
              <option value="" disabled>
                Seleccione
              </option>
              <option value="Femenino">Femenino</option>
              <option value="Masculino">Masculino</option>
            </select>
            {errors.gender && <Error>{errors.gender?.message}</Error>}
          </div>
          <div className="w-1/4 flex ">
            <label
              htmlFor="image"
              className="text-sm w-full font-black uppercase"
            >
              Foto
              <div className=" cursor-pointer  bg-gray-300   my-auto py-2 hover:bg-gray-400 border border-gray-400 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                  />
                </svg>
              </div>
            </label>
            <input
              type="file"
              id="image"
              className=" hidden"
              accept="image/*"
              {...register("image")}
            />
          </div>
        </div>
        <button
          className="bg-red-700 w-full font-bold p-2 hover:bg-red-800  hover:cursor-pointer"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Login;
