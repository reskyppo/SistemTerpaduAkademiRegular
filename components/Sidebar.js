import Image from "next/image";
const Sidebar = () => {
  return (
    <div>
      <div
        className="bg-cover "
        style={{
          backgroundImage: `url("./images/gedung.webp")`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="h-screen bg-accent-1 bg-opacity-50 flex justify-center items-center">
          <p className="text-6xl text-white font-extrabold ">Welcome Back!</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
