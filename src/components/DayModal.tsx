import { Fragment } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Dialog, Transition } from "@headlessui/react";
import { useUserStore } from "../store/store";
import FormModal from "./FormModal";
const DayModal = () => {
    const { showModal } = useUserStore();
  return (
    <div className="max-w-3xl mx-auto py-">
      <div className={`fixed right-10 bottom-10 flex items-center justify-center `}>
        <button type="button" className="cursor-pointer" onClick={() => useUserStore.setState({ showModal: true })}>
<<<<<<< HEAD
          <PlusCircleIcon className="w-16 h-16  text-red-700 rounded-full" />
=======
          <PlusCircleIcon className={`w-16 h-16 text-red-700 rounded-full `} />
>>>>>>> a851bc56f5387e4dca930ff361e9908fc5eabe81
        </button>
      </div>  

      <Transition appear show={showModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {useUserStore.setState({ showModal: false, accomplished: false })}}>
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
                  <FormModal />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default DayModal;
