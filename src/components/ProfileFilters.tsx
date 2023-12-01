import React from "react";

interface FiltersProps {
  selectedGender: string | null;
  onGenderChange: (gender: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ selectedGender, onGenderChange }) => {
  return (
    <div className="flex justify-center items-center mt-4 w-full">
      <button
        onClick={() => onGenderChange("male")}
        className={`mx-2 px-4 py-2 border rounded ${
          selectedGender === "male"
            ? "bg-blue-500 text-white"
            : "bg-gray-300 text-gray-700"
        }`}
      >
        Male
      </button>
      <button
        onClick={() => onGenderChange("female")}
        className={`mx-2 px-4 py-2 border rounded ${
          selectedGender === "female"
            ? "bg-blue-500 text-white"
            : "bg-gray-300 text-gray-700"
        }`}
      >
        Female
      </button>
      <button
        onClick={() => onGenderChange("")}
        className={`mx-2 px-4 py-2 border rounded ${
          !selectedGender ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
        }`}
      >
        All
      </button>
    </div>
  );
};

export default Filters;
