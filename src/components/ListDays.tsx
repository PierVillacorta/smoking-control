import { useUserStore } from "../store/store";

const ListDays = () => {
  const {notesDay} =  useUserStore()
  return (
    <>
      {
        notesDay.map((noteDay,index) => (
          <div key={index} className="bg-slate-800 text-white p-4 rounded-lg mb-4">
            <p>
              <span className="font-bold">Día{noteDay.day - 1}:</span> {noteDay.content}
            </p>
          </div>
        ))
      }
    </>
  );
};

export default ListDays;
