export default function Medicines() {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-semibold">Medicines</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          + Add New Medicine
        </button>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm">
        <input
          type="text"
          placeholder="Search medicines..."
          className="w-full p-2 border rounded-lg mb-4"
        />

        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500">
              <th>Name</th>
              <th>Supplier</th>
              <th>Quantity</th>
              <th>Expiry</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan="5" className="text-center py-6 text-gray-400">
                No medicines added yet.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}