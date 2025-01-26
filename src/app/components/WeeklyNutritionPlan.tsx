import React from "react";

const WeeklyNutritionPlan = () => {
  const menu = {
    "Tăng Cơ": {
      "Thứ Hai": [
        "Bữa sáng: Bánh mì với trứng và bơ đậu phộng",
        "Bữa xế: Sữa chua với hạt chia",
        "Bữa trưa: Cơm gà xé với rau củ",
        "Bữa xế: Sinh tố protein",
        "Bữa tối: Cá hồi nướng với khoai tây.",
      ],
      "Thứ Ba": [
        "Bữa sáng: Mì Ý với thịt bò bằm",
        "Bữa xế: Hạt điều",
        "Bữa trưa: Cơm tấm sườn nướng",
        "Bữa xế: Trái cây tươi",
        "Bữa tối: Gà nướng với khoai lang.",
      ],
      "Thứ Tư": [
        "Bữa sáng: Bột yến mạch với quả mọng",
        "Bữa xế: Sữa đậu nành",
        "Bữa trưa: Salad quinoa với đậu",
        "Bữa xế: Bánh mì nướng với bơ",
        "Bữa tối: Thịt lợn nướng với rau củ.",
      ],
      "Thứ Năm": [
        "Bữa sáng: Trứng ốp la với rau bina",
        "Bữa xế: Sinh tố chuối",
        "Bữa trưa: Cơm chiên với tôm",
        "Bữa xế: Hạt hướng dương",
        "Bữa tối: Cá chiên với salad.",
      ],
      "Thứ Sáu": [
        "Bữa sáng: Bánh pancake protein",
        "Bữa xế: Yogurt với mật ong",
        "Bữa trưa: Gà xào với nấm",
        "Bữa xế: Trái cây khô",
        "Bữa tối: Bò bít tết với khoai tây.",
      ],
      "Thứ Bảy": [
        "Bữa sáng: Bánh mì kẹp trứng",
        "Bữa xế: Sữa hạt",
        "Bữa trưa: Salad gà nướng",
        "Bữa xế: Bánh quy protein",
        "Bữa tối: Gà rang muối.",
      ],
      "Chủ Nhật": [
        "Bữa sáng: Bánh mì nướng với bơ và chuối",
        "Bữa xế: Hạt óc chó",
        "Bữa trưa: Cơm gà với rau xanh",
        "Bữa xế: Trà xanh",
        "Bữa tối: Tôm hấp với rau củ.",
      ],
    },
    "Giảm Cân": {
      "Thứ Hai": [
        "Bữa sáng: Trái cây tươi và ngũ cốc",
        "Bữa xế: Hạt hạnh nhân",
        "Bữa trưa: Salad gà",
        "Bữa xế: Trà xanh",
        "Bữa tối: Thịt bò xào với bông cải xanh.",
      ],
      "Thứ Ba": [
        "Bữa sáng: Bánh mì nguyên cám với trứng",
        "Bữa xế: Sinh tố rau xanh",
        "Bữa trưa: Cơm gạo lứt với cá",
        "Bữa xế: Trái cây tươi",
        "Bữa tối: Gà xào rau củ.",
      ],
      "Thứ Tư": [
        "Bữa sáng: Bột yến mạch không đường",
        "Bữa xế: Hạt chia",
        "Bữa trưa: Salad quinoa",
        "Bữa xế: Trà thảo mộc",
        "Bữa tối: Súp rau củ.",
      ],
      "Thứ Năm": [
        "Bữa sáng: Trái cây tươi",
        "Bữa xế: Hạt hướng dương",
        "Bữa trưa: Cơm gạo lứt với đậu phụ",
        "Bữa xế: Sữa đậu nành",
        "Bữa tối: Cá nướng với rau.",
      ],
      "Thứ Sáu": [
        "Bữa sáng: Bánh pancake yến mạch",
        "Bữa xế: Sữa chua không đường",
        "Bữa trưa: Salad gà nướng",
        "Bữa xế: Trái cây khô",
        "Bữa tối: Thịt bò nướng với rau.",
      ],
      "Thứ Bảy": [
        "Bữa sáng: Bánh mì kẹp rau",
        "Bữa xế: Trà xanh",
        "Bữa trưa: Cơm cuộn rau củ",
        "Bữa xế: Hạt hạnh nhân",
        "Bữa tối: Gà hấp với bông cải.",
      ],
      "Chủ Nhật": [
        "Bữa sáng: Sữa chua với trái cây",
        "Bữa xế: Hạt chia",
        "Bữa trưa: Cơm gạo lứt với cá hồi",
        "Bữa xế: Trà thảo mộc",
        "Bữa tối: Súp bắp cải.",
      ],
    },
    "Giảm Mỡ": {
      "Thứ Hai": [
        "Bữa sáng: Bánh pancake yến mạch",
        "Bữa xế: Trái cây",
        "Bữa trưa: Gạo lứt với đậu phụ",
        "Bữa xế: Sữa hạt",
        "Bữa tối: Súp rau củ.",
      ],
      "Thứ Ba": [
        "Bữa sáng: Trái cây với yogurt",
        "Bữa xế: Hạt quả khô",
        "Bữa trưa: Salad rau củ",
        "Bữa xế: Trà xanh",
        "Bữa tối: Cá chiên không dầu.",
      ],
      "Thứ Tư": [
        "Bữa sáng: Sinh tố xanh",
        "Bữa xế: Hạt chia",
        "Bữa trưa: Cơm gạo lứt với cá",
        "Bữa xế: Trà thảo mộc",
        "Bữa tối: Thịt gà hấp.",
      ],
      "Thứ Năm": [
        "Bữa sáng: Bánh mì kẹp rau",
        "Bữa xế: Trái cây tươi",
        "Bữa trưa: Salad gà",
        "Bữa xế: Hạt hướng dương",
        "Bữa tối: Tôm xào rau củ.",
      ],
      "Thứ Sáu": [
        "Bữa sáng: Bột yến mạch không đường",
        "Bữa xế: Sữa chua không đường",
        "Bữa trưa: Cơm cuộn rau củ",
        "Bữa xế: Trà xanh",
        "Bữa tối: Thịt bò nướng với rau.",
      ],
      "Thứ Bảy": [
        "Bữa sáng: Trái cây tươi",
        "Bữa xế: Hạt điều",
        "Bữa trưa: Salad quinoa",
        "Bữa xế: Trà thảo mộc",
        "Bữa tối: Gà hấp.",
      ],
      "Chủ Nhật": [
        "Bữa sáng: Bánh mì nguyên cám",
        "Bữa xế: Trái cây",
        "Bữa trưa: Súp rau củ",
        "Bữa xế: Hạt hạnh nhân",
        "Bữa tối: Cá nướng.",
      ],
    },
    "Độ Mông": {
      "Thứ Hai": [
        "Bữa sáng: Bánh mì kẹp trứng và rau",
        "Bữa xế: Sữa chua với hạt chia",
        "Bữa trưa: Gà xào với bông cải",
        "Bữa xế: Hạt hạnh nhân",
        "Bữa tối: Thịt lợn nướng.",
      ],
      "Thứ Ba": [
        "Bữa sáng: Bột yến mạch với chuối",
        "Bữa xế: Sinh tố protein",
        "Bữa trưa: Cơm gạo lứt với cá hồi",
        "Bữa xế: Trái cây tươi",
        "Bữa tối: Tôm hấp với rau.",
      ],
      "Thứ Tư": [
        "Bữa sáng: Mì Ý với thịt bò",
        "Bữa xế: Hạt điều",
        "Bữa trưa: Salad quinoa",
        "Bữa xế: Trà xanh",
        "Bữa tối: Gà nướng với khoai lang.",
      ],
      "Thứ Năm": [
        "Bữa sáng: Bánh pancake protein",
        "Bữa xế: Hạt hướng dương",
        "Bữa trưa: Cơm chiên với tôm",
        "Bữa xế: Sữa đậu nành",
        "Bữa tối: Cá chiên với salad.",
      ],
      "Thứ Sáu": [
        "Bữa sáng: Bánh mì với bơ đậu phộng",
        "Bữa xế: Yogurt với mật ong",
        "Bữa trưa: Gà xào với nấm",
        "Bữa xế: Trái cây khô",
        "Bữa tối: Bò bít tết.",
      ],
      "Thứ Bảy": [
        "Bữa sáng: Bánh mì kẹp thịt",
        "Bữa xế: Sữa hạt",
        "Bữa trưa: Salad gà nướng",
        "Bữa xế: Bánh quy protein",
        "Bữa tối: Gà rang muối.",
      ],
      "Chủ Nhật": [
        "Bữa sáng: Bánh mì nướng với bơ và chuối",
        "Bữa xế: Hạt óc chó",
        "Bữa trưa: Cơm gà với rau xanh",
        "Bữa xế: Trà xanh",
        "Bữa tối: Tôm hấp với rau củ.",
      ],
    },
    "Slim Body": {
      "Thứ Hai": [
        "Bữa sáng: Trái cây tươi và ngũ cốc",
        "Bữa xế: Hạt hạnh nhân",
        "Bữa trưa: Salad rau củ",
        "Bữa xế: Trà xanh",
        "Bữa tối: Thịt gà nướng.",
      ],
      "Thứ Ba": [
        "Bữa sáng: Bánh mì nguyên cám với trứng",
        "Bữa xế: Sinh tố rau xanh",
        "Bữa trưa: Cơm gạo lứt với cá",
        "Bữa xế: Trái cây tươi",
        "Bữa tối: Gà xào rau củ.",
      ],
      "Thứ Tư": [
        "Bữa sáng: Bột yến mạch không đường",
        "Bữa xế: Hạt chia",
        "Bữa trưa: Salad quinoa",
        "Bữa xế: Trà thảo mộc",
        "Bữa tối: Súp rau củ.",
      ],
      "Thứ Năm": [
        "Bữa sáng: Trái cây tươi",
        "Bữa xế: Hạt hướng dương",
        "Bữa trưa: Cơm gạo lứt với đậu phụ",
        "Bữa xế: Sữa đậu nành",
        "Bữa tối: Cá nướng với rau.",
      ],
      "Thứ Sáu": [
        "Bữa sáng: Bánh pancake yến mạch",
        "Bữa xế: Sữa chua không đường",
        "Bữa trưa: Salad gà nướng",
        "Bữa xế: Trái cây khô",
        "Bữa tối: Thịt bò nướng với rau.",
      ],
      "Thứ Bảy": [
        "Bữa sáng: Bánh mì kẹp rau",
        "Bữa xế: Trà xanh",
        "Bữa trưa: Cơm cuộn rau củ",
        "Bữa xế: Hạt hạnh nhân",
        "Bữa tối: Gà hấp với bông cải.",
      ],
      "Chủ Nhật": [
        "Bữa sáng: Sữa chua với trái cây",
        "Bữa xế: Hạt chia",
        "Bữa trưa: Cơm gạo lứt với cá hồi",
        "Bữa xế: Trà thảo mộc",
        "Bữa tối: Súp bắp cải.",
      ],
    },
    "Duy Trì Cơ Thể": {
      "Thứ Hai": [
        "Bữa sáng: Bánh mì nguyên cám với trứng",
        "Bữa xế: Sữa chua không đường",
        "Bữa trưa: Cơm gà xé với rau củ",
        "Bữa xế: Hạt hạnh nhân",
        "Bữa tối: Cá nướng.",
      ],
      "Thứ Ba": [
        "Bữa sáng: Bột yến mạch với chuối",
        "Bữa xế: Sinh tố protein",
        "Bữa trưa: Salad gà nướng",
        "Bữa xế: Sữa đậu nành",
        "Bữa tối: Thịt bò xào với rau.",
      ],
      "Thứ Tư": [
        "Bữa sáng: Mì Ý với thịt bò",
        "Bữa xế: Hạt điều",
        "Bữa trưa: Cơm gạo lứt với cá hồi",
        "Bữa xế: Trà xanh",
        "Bữa tối: Gà hấp.",
      ],
      "Thứ Năm": [
        "Bữa sáng: Bánh pancake protein",
        "Bữa xế: Hạt hướng dương",
        "Bữa trưa: Salad quinoa",
        "Bữa xế: Trái cây tươi",
        "Bữa tối: Tôm xào.",
      ],
      "Thứ Sáu": [
        "Bữa sáng: Bánh mì với bơ đậu phộng",
        "Bữa xế: Yogurt với mật ong",
        "Bữa trưa: Gà xào với nấm",
        "Bữa xế: Trái cây khô",
        "Bữa tối: Bò bít tết.",
      ],
      "Thứ Bảy": [
        "Bữa sáng: Bánh mì kẹp thịt",
        "Bữa xế: Sữa hạt",
        "Bữa trưa: Salad rau củ",
        "Bữa xế: Bánh quy protein",
        "Bữa tối: Gà rang muối.",
      ],
      "Chủ Nhật": [
        "Bữa sáng: Bánh mì nướng với bơ và chuối",
        "Bữa xế: Hạt óc chó",
        "Bữa trưa: Cơm gà với rau xanh",
        "Bữa xế: Trà xanh",
        "Bữa tối: Tôm hấp với rau củ.",
      ],
    },
  };

  

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-8">
      <h1 className="text-2xl mb-6">Thực Đơn Dinh Dưỡng Cả Tuần</h1>
      {Object.entries(menu).map(([goal, days]) => (
        <div key={goal} className="bg-gray-800 rounded-lg p-6 mb-6 w-full max-w-4xl">
          <h2 className="text-xl font-bold mb-4">{goal}</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-700">
                <th className="border p-3 text-left">Hàng Ngày</th>
                <th colSpan="5" className="border p-3 text-left">Thực Đơn</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(days).map(([day, meals], index) => (
                <React.Fragment key={day}>
                  <tr className={`hover:bg-gray-600 ${index !== 0 ? "border-t-4 border-gray-800" : ""}`}>
                    <td
                      rowSpan={meals.length} // Số dòng ứng với số bữa ăn
                      className="border p-4 align-top text-center font-semibold"
                    >
                      {day}
                    </td>
                    <td colSpan="5" className="border p-2">{meals[0]}</td>
                  </tr>
                  {/* Các bữa ăn tiếp theo */}
                  {meals.slice(1).map((meal, i) => (
                    <tr key={`${day}-${i}`} className="hover:bg-gray-600">
                      <td colSpan="5" className="border p-2">{meal}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>

  );
};

export default WeeklyNutritionPlan;

