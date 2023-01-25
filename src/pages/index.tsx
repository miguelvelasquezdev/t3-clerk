import { type NextPage } from "next";
import { UserButton, SignUpButton } from "@clerk/nextjs";
import Head from "next/head";

const Home: NextPage = () => (
    <>
    <Head>
      <title>Home</title>
    </Head>
    <div className="flex items-center justify-center h-screen">
      <SignUpButton />
      <UserButton />
    </div>
     
    </>
);

export default Home;
