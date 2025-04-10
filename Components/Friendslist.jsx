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
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
              Pay {friend.name}
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded mt-2 ml-2">
              Remove
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-2 ml-2">
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default friendslist;
