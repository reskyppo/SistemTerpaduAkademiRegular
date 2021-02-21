import Head from "next/head";
import { Sidebar } from "../components/Dashboard";
const dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <div className="flex h-screen justify-center ">
        <div className="w-1/5 bg-primer">
          <Sidebar />
        </div>
        <div className="w-4/5 bg-gray-900"></div>
      </div>
    </>
  );
};

export default dashboard;
