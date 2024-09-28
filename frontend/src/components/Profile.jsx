import axios from 'axios';
import { useState,useEffect } from 'react';
import { toast } from 'react-toastify';

const API_URL = 'http://localhost:5000';
function Profile() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}/apparel`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setItems(response.data);
      } catch (error) {
        console.error('Failed to fetch items', error);
        toast.error('Failed to load your submitted items. Please try again.');
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 py-12 ">
      <div className="max-w-4xl mx-auto  rounded-lg shadow-2xl p-8 relative overflow-hidden mt-10">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Submitted Items</h2>
          {items.length === 0 ? (
            <p className="text-gray-600 text-center">You haven't submitted any items yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((item) => (
                <div key={item._id} className="bg-gray-50 rounded-lg p-6 shadow-md transform hover:scale-105 transition duration-300">
                  <h3 className="font-bold text-xl mb-2 text-green-600">{item.type}</h3>
                  <p><span className="font-medium">Condition:</span> {item.condition}</p>
                  <p><span className="font-medium">Material:</span> {item.material}</p>
                  <p><span className="font-medium">Action:</span> {item.action}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Profile