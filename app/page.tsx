"use client";
import React, { useState } from "react";
import Friendslist from "../Components/Friendslist";
import App from "../Components/app";
import Footer from "../Components/footer";
import FormAddFriend from "../Components/FormAddFriend";

export default function Home() {
  const [friends, setFriends] = useState<string[]>([]);

  const handleAddFriend = (newFriend: string) => {
    setFriends([...friends, newFriend]);
  };

  return (
    <div className="grid grid-rows items-center justify-items-center text-gray-500 bg-white gap-2 m-2 font-[family-name:var(--font-geist-sans)]">
      <section className="grid grid-cols items-center justify-center h-screen w-screen max-w-auto bg-gray-100 gap-4">
        <Friendslist friends={friends} onAddFriend={handleAddFriend} />
        <FormAddFriend onAddFriend={handleAddFriend} />
      </section>
      <section className="grid grid-cols items-center justify-center h-screen w-screen max-w-auto bg-gray-100 gap-4">
        {/* Consider what you want to render here instead of <App /> */}
        <App />
      </section>
      <section className="grid grid-cols h-screen w-screen bg-gray-100 items-center justify-center gap-4">
        <Footer />
      </section>
    </div>
  );
}
