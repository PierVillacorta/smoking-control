import { useUserStore } from "../store/store";

const ListDays = () => {
  const {notesDay} =  useUserStore()
  return (
    <>
      {
        notesDay.map((noteDay,index) => (
          <div key={index} className="bg-slate-900 text-white p-4 rounded-lg mb-4">
            <p className="font-semibold text-lg">
              <span className="font-bold text-red-700 uppercase">Día{noteDay.day - 1}:</span> {noteDay.content}
            </p>
          </div>
        ))
      }
    </>
  );
};

export default ListDays;
