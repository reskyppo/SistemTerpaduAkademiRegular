import Link from "next/link";
import NavMenu from "./NavMenu";

const Sidebar = () => {
  return (
    <div>
      <Link href="/">
        <img
          className="w-32 mx-auto my-4 cursor-pointer"
          src="/images/star.webp"
          alt="logo star ums"
        />
      </Link>

      <section className="rounded-full w-40 h-40 mx-auto">
        <img
          src="/images/people.jpg"
          alt=""
          className="w-40 h-40 rounded-full"
        />
      </section>

      <section className="text-center mt-4 ">
        <h2 className="text-2xl font-semibold text-white">
          Clara Aurellia Hernandes
        </h2>
        <p className="text-xl text-gray-100">L200180018</p>
      </section>

      <section className="ml-12 mt-12 text-gray-200 w-3/4 ">
        <NavMenu />
      </section>

      <section className="ml-12 mt-24 ">
        <Link href="/">
          <p className="text-gray-200 text-xl cursor-pointer">Keluar</p>
        </Link>
      </section>
    </div>
  );
};

export default Sidebar;
