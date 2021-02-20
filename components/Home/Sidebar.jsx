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
          <p className="text-hero text-white font-extrabold ">
            Welcome <br /> Back!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
