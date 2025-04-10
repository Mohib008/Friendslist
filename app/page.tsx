import React from "react";
import Friendslist from "../Components/Friendslist";
import App from "../Components/app";
import Footer from "../Components/footer";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows items-center justify-items-center text-gray-500 bg-white gap-2 m-2 font-[family-name:var(--font-geist-sans)]">
        <section className="grid grid-cols items-center justify-center h-screen w-screen max-w-auto bg-gray-100 gap-4">
          <Friendslist />
        </section>
        <section className="grid grid-cols items-center justify-center h-screen w-screen max-w-auto bg-gray-100 gap-4">
          <App />
        </section>
        <section className="grid grid-cols h-screen w-screen bg-gray-100 items-center justify-center gap-4">
          <Footer />
        </section>
      </div>
    </>
  );
}
