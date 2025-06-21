import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react/jsx-runtime";
import { useUserStore } from "../store/store";

const Sucessfull = () => {
  const { sucessfull,  appReset } = useUserStore();

  return (
    <div className="max-w-3xl mx-auto py-">
      <Transition appear show={sucessfull} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => true}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-800/75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-slate-800 p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex flex-col items-center justify-center relative">
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-green-500 text-4xl font-bold text-center">
                        Lograste completar tus dias de control de
                        consumo. ¡Felicidades!
                      </p>
                      <img className="w-96 mt-4" src="/public/tenor.gif" alt="clap aplausos " />
                    </div>
              
                    <button
                      onClick={() => {
                        appReset();
                        useUserStore.setState({ sucessfull: false });
                      }}
                      className="bg-red-800 text-white px-10 py-5 rounded-lg  hover:bg-red-700 uppercase font-bold cursor-pointer"
                    >
                      Restaurar aplicación
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Sucessfull;
