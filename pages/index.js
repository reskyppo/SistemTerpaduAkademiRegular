import Login from "../components/Login";
import Sidebar from "../components/Sidebar";

export default function IndexPage() {
  return (
    <>
      <head>
        <title>Shorten-url</title>
      </head>

      <main>
        <div className="hidden md:flex">
          <div className="w-1/2">
            <Sidebar />
          </div>
          <div className="w-1/2">
            <Login/>
          </div>
        </div>
      </main>
    </>
  );
}
