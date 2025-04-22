import React from "react";
import Data from "./Data";

/**
 * @typedef {Object} FriendslistProps
 * @property {string[]} friends - List of friends.
 * @property {(newFriend: string) => void} onAddFriend - Function to add a new friend.
 */

function friendslist({ friends, onAddFriend } = {}) {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="absolute sticky left-0 right-0 bg-white top-0 z-50 p-4 rounded shadow-md">
        <h1 className="text-2xl font-bold">Friends List</h1>
      </div>
      <div>
        <ul>
          {friends.map((friend, index) => (
            <li key={index}>{friend}</li>
          ))}
        </ul>
        <button
          className="bg-red-300 text-gray-500 hover:bg-red-400 hover:text-gray-100 transition-all duration-300 hover:shadow-2xl px-4 py-2 rounded mt-2 ml-2"
          onClick={() => onAddFriend("New Friend")}
        >
          Add Friend
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2 relative h-screen w-screen bg-gray-100">
        {Data.map((friend) => (
          <div key={friend.id} className="bg-white p-4 shadow-md">
            <img
              className="w-12 h-12 rounded-full"
              src={friend.image}
              alt={friend.name}
            />
            <h2 className="text-lg font-semibold">{friend.name}</h2>
            <p className="text-gray-600">{friend.balance}</p>
            <p className="text-gray-600">
              {friend.balance > 0
                ? `You owe ${friend.name} $${friend.balance}`
                : friend.balance < 0
                ? `${friend.name} owes you $${-friend.balance}`
                : `${friend.name} is even with you`}
            </p>
            <button className="bg-blue-300 hover:bg-blue-400 hover:text-gray-100 transition-all duration-300 hover:shadow-2xl text-gray-500 px-4 py-2 rounded mt-2">
              Pay {friend.name}
            </button>
            <button className="bg-red-300 text-gray-500 hover:bg-red-400 hover:text-gray-100 transition-all duration-300 hover:shadow-2xl px-4 py-2 rounded mt-2 ml-2">
              Remove
            </button>
            <button className="bg-green-300 text-gray-500 px-4 py-2 hover:bg-green-400 hover:text-white hover:shadow-2xl transition-all duration-300 rounded mt-2 ml-2">
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default friendslist;
