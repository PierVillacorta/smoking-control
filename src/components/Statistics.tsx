import { useUserStore } from "../store/store";

const Statistics = () => {
  const { user } = useUserStore();
  const userData = user[0];
  const img = userData.image.length > 0
      ? URL.createObjectURL(userData.image[0])
      : null;

  return (
    <div className="w-1/2 h-full flex flex-col items-center">
      <img src={img ? img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"}
        className="w-60 aspect-square rounded-2xl mt-6"
      />
      <div className="flex flex-col items-start mt-2 text-slate-50"> 
      <p className="text-2xl"><span className="font-bold">Nombre: </span>{userData.name}</p>
      <p className="text-2xl"><span className="font-bold">Edad: </span>{userData.age}</p>
      <p className="text-2xl"><span className="font-bold">Genero: </span>{userData.gender}</p>
      </div>
    </div>
  );
};

export default Statistics;
