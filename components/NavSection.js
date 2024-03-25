export default function NavSection() {
  return (
    <div className="flex px-3 py-5 justify-between  w-full h-5 ">
      <div className="font-bold text-1xl">Yaser.dev</div>
      <div className="my-3 pl-4 space-x-3">
        <button>Home</button>
        <button>Projects</button>
        <button>Contact</button>
      </div>
    </div>
  );
}
