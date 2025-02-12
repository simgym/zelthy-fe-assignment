import { User } from "lucide-react";

const UserItem = ({ user, isSelected, onSelect }) => (
  <button
    onClick={() => onSelect(user)}
    className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all duration-200 ${
      isSelected
        ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
        : "hover:bg-gray-100 dark:hover:bg-gray-700"
    }`}
  >
    <img
      src={user.avatar}
      alt={user.username}
      className="w-10 h-10 rounded-full ring-2 ring-white dark:ring-gray-800"
    />
    <div className="text-left">
      <p className="font-medium">{user.username}</p>
      <p
        className={`text-sm ${
          isSelected ? "text-blue-100" : "text-gray-500 dark:text-gray-400"
        }`}
      >
        {user.timezone}
      </p>
    </div>
  </button>
);

const UserList = ({ users, selectedUser, setSelectedUser }) => (
  <div className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl">
    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
      <User className="w-5 h-5" /> Users
    </h2>
    <div className="space-y-4">
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          isSelected={selectedUser.id === user.id}
          onSelect={setSelectedUser}
        />
      ))}
    </div>
  </div>
);

export default UserList;
