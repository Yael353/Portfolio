export default function NavSection() {
  return (
    <div className="flex px-3 py-5 justify-between  w-full h-5 ">
      <div className="font-bold text-3xl">Yaser.dev</div>
      <div className="my-3 pl-4 text-3xl space-x-3 ">
        <button className="hover:scale-105">Home</button>
        <button className="hover:scale-105">Projects</button>
        <button className="hover:scale-105">Contact</button>
      </div>
    </div>
  );
}
