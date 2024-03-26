export default function NavSection() {
  return (
    <div className="flex p-20 justify-between  w-full  dark:bg-black dark:text-white ">
      <div className="font-bold text-3xl">Yaser.dev</div>
      <div className="my-3 pl-4 text-3xl space-x-4 font-semibold ">
        <button className="hover:scale-105">Home</button>
        <button className="hover:scale-105">Projects</button>
        <button className="hover:scale-105">Contact</button>
      </div>
    </div>
  );
}
