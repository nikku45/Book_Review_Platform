import axios from "axios";
import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem("user")); // Static user reference
  const [profile, setProfile] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    if (user?.id) {
      const fetchData = async () => {
        try {
          // Fetch user profile
          const res = await axios.get(`http://localhost:5000/user/profile/${user.id}`);
   
          setProfile(res.data.user);

          // Fetch user reviews (optional)
         console.log(res.data.reviews.reviews);
          setReviews(res.data.reviews.reviews || []);
        } catch (err) {
          console.error("Error fetching data:", err);
        
        }
      };
      fetchData();
    }
  }, []); // Empty dependency array ensures this runs only once on mount
    const handleUpdateName = async () => {
        try {
        const res = await axios.put(`http://localhost:5000/user/profile/${user.id}`, { name: newName, email: profile.email });
        setProfile(res.data);
        setIsEditing(false);
        } catch (err) {
        console.error("Error updating name:", err);
        }
    };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
        {/* Header Section */}
         {profile && (
          <>
            <div className="bg-blue-600 h-40"></div>
            <div className="relative -mt-16 flex justify-center">
              <img
                src={profile.avatar || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white shadow-md"
              />
            </div>
            <div className="text-center mt-4">
              {isEditing ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="border rounded-lg px-4 py-2 w-1/2"
                  />
                  <div className="space-x-4">
                    <button
                      onClick={handleUpdateName}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h1 className="text-2xl font-bold text-gray-800">{profile.name}</h1>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="mt-2 text-blue-600 underline hover:text-blue-500"
                  >
                    Edit Name
                  </button>
                </>
              )}
              <p className="text-gray-600">{profile.email}</p>
              <p className="text-sm text-gray-500">
                Joined on {new Date(profile.createdAt).toLocaleDateString()}
              </p>
            </div>
          </>
        )}


        {/* User Info Section */}
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">About Me</h2>
          {profile?.bio ? (
            <p className="text-gray-600">{profile.bio}</p>
          ) : (
            <p className="text-gray-500 italic">No bio available.</p>
          )}
        </div>

        {/* Reviews Section */}
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">My Reviews</h2>
          {reviews.length > 0 ? (
            <ul className="space-y-4">
              {reviews.map((review) => (
                <li
                  key={review.id}
                  className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <h3 className="text-lg font-bold text-gray-800">{review.bookTitle}</h3>
                  <p className="text-gray-600">{review.reviewText}</p>
                  <p className="text-sm text-gray-500">
                    Posted on {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic">No reviews posted yet.</p>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200">
          <button 
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/login"; // Redirect to login page
          }}
          className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-500">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;


