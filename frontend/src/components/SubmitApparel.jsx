import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

const API_URL = 'http://localhost:5000';

function SubmitApparel() {
  const [type, setType] = useState('');
  const [condition, setCondition] = useState('');
  const [material, setMaterial] = useState('');
  const [action, setAction] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(`${API_URL}/apparel`, { type, condition, material, action }, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      toast.success('Apparel item submitted successfully');
      setType('');
      setCondition('');
      setMaterial('');
      setAction('');
    } catch (error) {
      console.error('Submission failed', error);
      toast.error('Failed to submit apparel item. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Submit Apparel</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Apparel Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
            <input
              type="text"
              placeholder="Condition"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
            <input
              type="text"
              placeholder="Material"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
            <select
              value={action}
              onChange={(e) => setAction(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            >
              <option value="">Select Action</option>
              <option value="disposal">Disposal</option>
              <option value="donation">Donation</option>
              <option value="recycling">Recycling</option>
            </select>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SubmitApparel