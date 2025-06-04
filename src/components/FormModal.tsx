import { useForm } from "react-hook-form";
import { useUserStore } from "../store/store";
import type { Notes } from "../types";

const FormModal = () => {
  const { register, handleSubmit } = useForm<Notes>();
  const { addNotes, day } = useUserStore();
  const registerNote = (data: Notes) => {
    addNotes(data);
  };

  return (
    <form
      className="flex flex-col  text-white"
      onSubmit={handleSubmit(registerNote)}
    >
      <legend className="text-1xl text-center  uppercase font-bold mb-5 border-b-2 border-red-800">
        Ingrese correctamente los datos
      </legend>
      <div className="mb-5">
        <p className="text-center text-sm text-yellow-300 mb-2 ">
          <span className="font-bold uppercase">Nota:</span> Ingresa bien los
          datos, ya que no se podra editar el logrado del dia
        </p>
      </div>
      <div>
        <p className="text-center text-2xl font-bold mb-5 bg-slate-700 px-3 py-2 rounded-t-lg">
          Dia {day}
        </p>
      </div>
      <div className="mb-5">
        <label htmlFor="achieved" className="text-1xl uppercase font-bold ">
          Logrado
        </label>
        <select
          id="achieved"
          className="text-black rounded w-full bg-slate-300 mt-1 px-4 py-2 focus:outline-none"
          {...register("achieved", {
            required: "Este campo es obligatorio",
          })}
        >
          <option value="" disabled selected>
            Seleccione una opción
          </option>
          <option value="true">Si</option>
          <option value="false">No</option>
        </select>
      </div>
      <div>
        <label htmlFor="noteDay" className="text-1xl uppercase font-bold">
          Como lo lograste
        </label>
        <textarea
          id="content"
          placeholder="Escribe aqui tu nota del dia"
          className="bg-slate-300 text-black h-72 rounded w-full mt-1 outline-none px-4 py-2 focus:outline-none"
          {...register("content", {
            required: "Este campo es obligatorio",
            maxLength: {
              value: 500,
              message: "El texto no puede exceder los 500 caracteres",
            },
          })}
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="bg-red-900 w-full p-2 rounded-lg uppercase font-bold cursor-pointer"
          onClick={() => useUserStore.setState({ showModal: false })}
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default FormModal;
