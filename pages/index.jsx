import { Login, Sidebar } from "../components/Home";
import Head from "next/head";
export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Sistem Terpadu Akademik Regular</title>
      </Head>

      <main>
        <div className="hidden md:flex">
          <div className="w-1/2">
            <Sidebar />
          </div>
          <div className="w-1/2">
            <Login />
          </div>
        </div>
      </main>
    </>
  );
}
