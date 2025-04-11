import React from "react";
import Data from "./Data";

function friendslist() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div>
        This is FriendsList!
        {Data.map((friend) => (
          <div key={friend.id} className="bg-white p-4 rounded shadow-md">
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
