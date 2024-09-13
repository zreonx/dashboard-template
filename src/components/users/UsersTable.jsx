import React, { useState } from "react";
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";

const userData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Customer",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie@example.com",
    role: "Moderator",
    status: "Active",
  },
];

function UsersTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(userData);
  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-semibold text-gray-100'>Users</h2>
        <div className='relative'>
          <Search
            className='absolute left-3 top-2.5 text-gray-400 z-10'
            size={18}
          />
          <input
            value={searchTerm}
            onChange={(e) => {
              let term = e.target.value.toLocaleLowerCase();

              setSearchTerm(term);

              const filtered = userData.filter(
                (user) =>
                  user.name.toLocaleLowerCase().includes(term) ||
                  user.email.toLowerCase().includes(term)
              );

              setFilteredUsers(filtered);
            }}
            placeholder='Search'
            type='text'
            className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
      </div>

      <div className='overflow-x-auto '>
        <table className='min-w-full divide-y divide-gray-700'>
          <thead>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider '>
                Name
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider '>
                Email
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider '>
                Role
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider '>
                Status
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider '>
                Action
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-700 '>
            {filteredUsers.map((user) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
                  <img
                    src={`https://avatar.iran.liara.run/username?username=${user.name}`}
                    alt='Product img'
                    className='size-10 rounded-full'
                  />
                  {user.name}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                  {user.email}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                  {user.role}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm text-gray-300`}
                >
                  <span
                    className={`px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status.toLocaleLowerCase() === "active"
                        ? "bg-green-800 text-green-100"
                        : "bg-red-800 text-red-100"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                    <button className='text-indigo-400 hover:text-indigo-300 mr-2'>
                      <Edit size={18} />
                    </button>
                    <button className='text-red-400 hover:text-red-300'>
                      <Trash2 size={18} />
                    </button>
                  </td>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
export default UsersTable;
