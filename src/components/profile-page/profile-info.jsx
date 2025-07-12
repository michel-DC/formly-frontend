import EnzoImage from "/assets/profile/enzo.jpg";

export default function ProfileInfo() {
  return (
    <div className="flex flex-col items-center mb-8">
      <img
        src={EnzoImage}
        alt="Profile"
        className="w-25 h-25 rounded-full object-cover mb-5 border-3 border-white"
      />

      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        First name : Enzo
      </h2>

      <p className="text-sm text-gray-400">enzo.ledoux@icloud.com</p>
    </div>
  );
}
