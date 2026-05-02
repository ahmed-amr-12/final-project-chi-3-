export default function Sales() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Daily Sales</h1>

      <div className="bg-white p-4 rounded-xl shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="text-gray-500">
              <th>ID</th>
              <th>Product</th>
              <th>Time</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#1042</td>
              <td>Aspirin 500mg</td>
              <td>10:45 AM</td>
              <td>$5.99</td>
            </tr>

            <tr>
              <td>#1043</td>
              <td>Vitamin C</td>
              <td>11:15 AM</td>
              <td>$12.50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}