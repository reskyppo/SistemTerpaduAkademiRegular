import Head from "next/head";
import Link from "next/link";
const dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <div className="flex h-screen justify-center ">
        <div className="w-1/5 bg-black">
          <Link href="/">
            <img
              className="w-48 mx-auto mt-4"
              src="/images/star.webp"
              alt="logo star ums"
            />
          </Link>
        </div>
        <div className="w-4/5 bg-gray-900"></div>
      </div>
    </>
  );
};

export default dashboard;
