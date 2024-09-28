import { BrowserRouter as  Link } from 'react-router-dom';
import { FaRecycle, FaTshirt, FaHandHoldingHeart } from 'react-icons/fa';



function Home() {
  return (
    <div className="text-center">
      <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in-down">Welcome to Apparel Recycling Platform</h1>
          <p className="text-2xl mb-8 animate-fade-in-up">Help the environment by responsibly managing your unused apparel.</p>
          <Link to="/submit" className="bg-white text-green-600 font-bold py-3 px-8 rounded-full hover:bg-green-100 transition duration-300 animate-pulse">
            Start Recycling Now
          </Link>
        </div>
      </header>

      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 opacity-50"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-12">How It Works</h2>
          <div className="flex justify-center space-x-8">
            <div className="w-64 text-center bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <FaTshirt className="text-6xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">1. Submit Your Apparel</h3>
              <p className="text-gray-600">Tell us about your unused clothing items.</p>
            </div>
            <div className="w-64 text-center bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <FaRecycle className="text-6xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">2. We Analyze</h3>
              <p className="text-gray-600">We'll determine the best recycling method.</p>
            </div>
            <div className="w-64 text-center bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <FaHandHoldingHeart className="text-6xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">3. Make an Impact</h3>
              <p className="text-gray-600">Your clothes find new life or are recycled responsibly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-8">Why Recycle Apparel?</h2>
          <div className="flex justify-center space-x-8">
            <div className="bg-white rounded-lg shadow-md p-6 w-72 transform hover:scale-105 transition duration-300">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9hb5PKEYJP8r2aRVHi_bfvieANHVWd-iWQ&s" alt="Environmental Impact" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reduce Environmental Impact</h3>
              <p className="text-gray-600">Minimize waste and conserve resources by recycling your clothes.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 w-72 transform hover:scale-105 transition duration-300">
              <img src="https://as1.ftcdn.net/v2/jpg/05/19/93/88/1000_F_519938844_vMCw4ewmLpXWklKhndAmlgjyF8RN154R.jpg" alt="Help Communities" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Support Communities</h3>
              <p className="text-gray-600">Your donations can help those in need and create job opportunities.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 w-72 transform hover:scale-105 transition duration-300">
              <img src="https://media.licdn.com/dms/image/C5612AQG1MgiACdXESQ/article-cover_image-shrink_720_1280/0/1623730340382?e=2147483647&v=beta&t=p4IweMKdi56P6ZN9hOG3N_NYwp2uO4xLdM3uDGTQjQM" alt="Drive Innovation" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Drive Innovation</h3>
              <p className="text-gray-600">Encourage the development of new recycling technologies and sustainable fabrics.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-8">Join the Movement</h2>
          <p className="text-2xl text-gray-100 mb-8">Be part of the solution to textile waste. Start recycling your apparel today!</p>
          <Link to="/register" className="bg-white text-green-600 font-bold py-3 px-8 rounded-full hover:bg-green-100 transition duration-300 animate-pulse">
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
}
export default Home