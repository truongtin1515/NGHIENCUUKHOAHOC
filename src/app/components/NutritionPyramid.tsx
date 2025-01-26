import React from "react";

const NutritionPyramid = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-8">
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg p-6 flex flex-row items-center">

        {/* Hình ảnh bên trái */}
        <div className="w-1/2 flex justify-center">
          <img
            src="/Images/thapdinhduong.png" // Đảm bảo đường dẫn đúng
            alt="Nutrition Pyramid"
            className="w-full h-[400px] object-contain" // Tăng chiều cao hình ảnh lên 700px
          />
        </div>

        {/* Chữ bên phải */}
        <div className="relative pyramid flex flex-col items-start w-1/2 pl-4"> {/* Thêm padding bên trái */}
          <div className="layer p-3 mb-1 rounded w-full text-center"> {/* Đặt chiều rộng là full */}
            <p>Cung cấp năng lượng, nhưng cần tiêu thụ một cách hạn chế.</p>
          </div>
          <div className="layer p-3 mb-1 rounded w-full text-center">
            <p>Cung cấp protein cần thiết cho sự phát triển và sửa chữa tế bào.</p>
          </div>
          <div className="layer p-3 mb-1 rounded w-full text-center">
            <p>Cung cấp vitamin, khoáng chất, chất xơ và chất chống oxy hóa.</p>
          </div>
          <div className="layer p-3 rounded w-full text-center">
            <p>Cung cấp năng lượng chính cho cơ thể thông qua carbohydrate.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionPyramid;