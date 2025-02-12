
import React from 'react';
import NutritionPyramid from '../../components/NutritionPyramid';
import WeeklyNutritionPlan from '../../components/WeeklyNutritionPlan';


const HomePage = () => {
    return (
        <div className="container mx-auto p-4 ">
            <div className=''>
                <h1 className="text-3xl font-bold mb-4 text-center">Chế Độ Dinh Dưỡng (Nutrition Plan)</h1>
                <NutritionPyramid />
            </div>
            <div className="">
                <h2 className="text-3xl font-bold mb-4 text-center">Thực Đơn Dinh Dưỡng</h2>
                <WeeklyNutritionPlan />
            </div>
        </div>


    );
};

export default HomePage;