import React from "react";

import { useState, useEffect } from "react";

export default function SaveButton() {
  const [isOnline, setIsOnline] = useState(true);
  const [isOffline, setOffline] = useState(false);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  function handleSaveClick() {
    console.log("✅ Progress saved");
  }
  function handlOffClick() {
    console.log("❌ Progress not saved");
  }
  // Simulate an API call to save progress
  function saveProgress() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Progress saved");
      }, 2000);
    });
  }
  // Simulate an API call to save progress
  function saveProgress() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Progress saved");
      }, 2000);
    });
  }

  return (
    <>
      <button
        className=" hover:bg-blue-400 bg-blue-300 hover:text-white shadow-2xl bg-shadow-black p-4 transition-600 transform-3d"
        disabled={!isOnline}
        onClick={handleSaveClick}
      >
        {isOnline ? "Save progress" : "Reconnecting..."}
      </button>
      <button
        className=" hover:bg-blue-400 bg-blue-300 hover:text-white shadow-2xl bg-shadow-black p-4 transition-600 transform-3d"
        disabled={!isOffline}
        onClick={handlOffClick}
      >
        {isOffline ? " Progress not Saved" : "❌ Offline..."}
      </button>
    </>
  );
}
