import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white p-10">
      <div className="grid grid-cols-3 gap-6 text-sm">
        {/* About Section */}
        <div>
          <h3 className="italic text-gray-400">About</h3>
          <ul className="mt-2">
            <li className="hover:underline cursor-pointer">Contact</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Press</li>
            <li className="italic hover:underline cursor-pointer">
              Corporate Company
            </li>
          </ul>
        </div>

        {/* Group Companies */}
        <div>
          <h3 className="italic text-gray-400">Group companies</h3>
          <ul className="mt-2">
            <li className="hover:underline cursor-pointer">Myntra</li>
            <li className="hover:underline cursor-pointer">Cleartrip</li>
            <li className="hover:underline cursor-pointer">Shopsy</li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="italic text-gray-400">Help</h3>
          <ul className="mt-2">
            <li className="hover:underline cursor-pointer font-semibold">Payments</li>
            <li className="hover:underline cursor-pointer font-semibold">Shipping</li>
            <li className="hover:underline cursor-pointer font-semibold">
              Cancellation & Return
            </li>
            <li className="hover:underline cursor-pointer font-semibold">FAQ</li>
          </ul>
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex justify-center gap-10 text-lg mt-6">
        <div className="flex items-center gap-2 cursor-pointer">
          <span role="img" aria-label="store">🏠</span> 
          <span className="italic">Become a seller</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <span role="img" aria-label="star">⭐</span> 
          <span className="italic">Advertise</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <span role="img" aria-label="gift">🎁</span> 
          <span className="italic">Gift Cards</span>
        </div>
      </div>

      {/* Why It Works Section */}
      <div className="text-center mt-10">
        <h2 className="text-xl font-semibold">Why it’s works</h2>
        <div className="grid grid-cols-3 gap-10 mt-4 text-sm">
          <div>
            <h3 className="font-semibold">Personalized learning</h3>
            <p className="text-gray-400">
              Students practice at their own pace, first filling in gaps in their
              understanding and then accelerating their learning.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Trusted content</h3>
            <p className="text-gray-400">
              Created by experts, library of trusted practice and lessons covers
              math, science, and more. Always free for learners and teachers.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Tools to empower teachers</h3>
            <p className="text-gray-400">
              Teachers can identify gaps in their students’ understanding, tailor
              instruction, and meet the needs of every student.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
