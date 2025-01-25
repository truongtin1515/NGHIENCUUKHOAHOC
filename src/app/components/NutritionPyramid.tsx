import React from "react";

const NutritionPyramid = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-8">
      

      <div className="w-full max-w-4xl bg-gray-800 rounded-lg p-6 text-center">

        <div className="relative pyramid flex flex-col items-center">
          <div className="layer bg-blue-500 text-white p-4 mb-4 rounded w-3/4">
            <p>Cung cấp năng lượng, nhưng cần tiêu thụ một cách hạn chế.</p>
          </div>
          <div className="layer bg-red-500 text-white p-4 mb-4 rounded w-2/3">
            <p>Cung cấp protein cần thiết cho sự phát triển và sửa chữa tế bào.</p>
          </div>
          <div className="layer bg-green-500 text-white p-4 mb-4 rounded w-1/2">
            <p>Cung cấp vitamin, khoáng chất, chất xơ và chất chống oxy hóa.</p>
          </div>
          <div className="layer bg-yellow-500 text-black p-4 rounded w-1/3">
            <p>Cung cấp năng lượng chính cho cơ thể thông qua carbohydrate.</p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default NutritionPyramid;
