import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function NotFoundPage() {
  const router = useRouter();
  let reDIrectIn = 7;
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, reDIrectIn * 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [count, setCount] = useState(reDIrectIn);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setCount(count - 1)
    // }, 1000)
    // return () => clearInterval(interval)
    setTimeout(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 1000);
  }, [count]);

  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <div className="text-center text-3xl mb-64">
        <span className="block text-6xl font-extrabold m-5">404</span>
        <div>this page is not exist</div>
        <div className="text-xl font-thin mt-4 flex items-center flex-col">
          <p>you will be redirected to home page in</p>
          <span className=" mt-7 animate-ping text-rose-700 text-3xl">
            {count}
          </span>
        </div>
      </div>
    </>
  );
}
