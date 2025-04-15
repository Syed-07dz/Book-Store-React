import React from "react";
import { Store, Star, Gift } from "lucide-react"; // Modern icons

const Footer = () => {
  return (
    <div className="bg-black text-white p-10">
      {/* Footer Links Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
        {/* About Section */}
        <div>
          <h3 className="italic text-gray-400">About</h3>
          <ul className="mt-2 space-y-1">
            <li className="hover:underline cursor-pointer">Contact</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Press</li>
            <li className="italic hover:underline cursor-pointer">Corporate Company</li>
          </ul>
        </div>

        {/* Group Companies */}
        <div>
          <h3 className="italic text-gray-400">Group Companies</h3>
          <ul className="mt-2 space-y-1">
            <li className="hover:underline cursor-pointer">Myntra</li>
            <li className="hover:underline cursor-pointer">Cleartrip</li>
            <li className="hover:underline cursor-pointer">Shopsy</li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="italic text-gray-400">Help</h3>
          <ul className="mt-2 space-y-1">
            <li className="hover:underline cursor-pointer font-semibold">Payments</li>
            <li className="hover:underline cursor-pointer font-semibold">Shipping</li>
            <li className="hover:underline cursor-pointer font-semibold">Cancellation & Returns</li>
            <li className="hover:underline cursor-pointer font-semibold">FAQ</li>
          </ul>
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 text-lg mt-8">
        <div className="flex items-center gap-2 cursor-pointer hover:text-gray-400 transition">
          <Store size={20} /> <span className="italic">Become a seller</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-gray-400 transition">
          <Star size={20} /> <span className="italic">Advertise</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-gray-400 transition">
          <Gift size={20} /> <span className="italic">Gift Cards</span>
        </div>
      </div>

      {/* Why It Works Section */}
      <div className="text-center mt-10">
        <h2 className="text-xl font-semibold">Why it Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 text-sm">
          <div>
            <h3 className="font-semibold">Personalized Learning</h3>
            <p className="text-gray-400">
              Students practice at their own pace, filling in gaps in their 
              understanding and then accelerating their learning.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Trusted Content</h3>
            <p className="text-gray-400">
              Created by experts, our library covers math, science, and more. 
              Always free for learners and teachers.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Tools to Empower Teachers</h3>
            <p className="text-gray-400">
              Teachers can identify gaps in their students’ understanding, 
              tailor instruction, and meet their needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
