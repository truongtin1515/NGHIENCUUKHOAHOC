'use client';

import { calendarEvents, eventDetail } from "../lib/data";
import React, { useState, useEffect } from "react";

const EventDetails = ({ selectedId }: { selectedId: string | null }) => {
    const [activeId, setActiveId] = useState<string | null>(selectedId);

    const getExercisesByEvent = (eventId: number) => {
        return eventDetail.filter((exercise) => exercise.id === eventId);
    };

    useEffect(() => {
        if (selectedId) {
            const targetElement = document.getElementById(selectedId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
                setActiveId(selectedId);
            }
        }
    }, [selectedId]);

    return (
        <div className='container mx-auto p-4 bg-gray-100'>
            <h2 className="text-3xl font-bold mb-4 text-center">LIỆU TRÌNH TẬP (TRAINING PLANS)</h2>

            {/* Chương trình giảm cân */}
            <div className="mb-8">
                <h3 className="font-bold text-lg mb-2">Giảm cân (Weight Loss Program)</h3>
                <p>Mục tiêu: Giảm cân, cải thiện sức khỏe tim mạch, tăng cường năng lượng.</p>
                <p>Thời gian: 12 tuần.</p>
                <ul className="list-disc list-inside ml-4">
                    <li>Tuần 1-2: Cardio nhẹ kết hợp HIIT và bài tập cơ bản.</li>
                    <li>Tuần 3-4: Tăng cường độ cardio và bài tập sức mạnh.</li>
                    <li>Tuần 5-6: Tập luyện nâng cao và thay đổi chế độ ăn uống.</li>
                </ul>
            </div>

            {/* Chương trình giảm mỡ */}
            <div className="mb-8">
                <h3 className="font-bold text-lg mb-2">Giảm mỡ (Fat Loss Program)</h3>
                <p>Mục tiêu: Giảm mỡ cơ thể, duy trì cơ bắp.</p>
                <p>Thời gian: 10 tuần.</p>
                <ul className="list-disc list-inside ml-4">
                    <li>Tuần 1-3: Tập luyện cardio kết hợp với bài tập sức mạnh.</li>
                    <li>Tuần 4-7: Tăng cường độ và giảm thời gian nghỉ.</li>
                    <li>Tuần 8-10: Tập luyện cường độ cao và điều chỉnh chế độ ăn.</li>
                </ul>
            </div>

            {/* Chương trình tăng cơ */}
            <div className="mb-8">
                <h3 className="font-bold text-lg mb-2">Tăng cơ (Muscle Building Program)</h3>
                <p>Mục tiêu: Tăng cơ, cải thiện sức mạnh.</p>
                <p>Thời gian: 12 tuần.</p>
                <ul className="list-disc list-inside ml-4">
                    <li>Tuần 1-4: Tập luyện với trọng lượng nặng và bài tập compound.</li>
                    <li>Tuần 5-8: Tăng cường độ bài tập và thời gian nghỉ.</li>
                    <li>Tuần 9-12: Tinh chỉnh chế độ ăn và theo dõi sự phát triển.</li>
                </ul>
            </div>

            {/* Chương trình tăng cân */}
            <div className="mb-8">
                <h3 className="font-bold text-lg mb-2">Tăng cân (Weight Gain Program)</h3>
                <p>Mục tiêu: Tăng cân và phát triển cơ bắp.</p>
                <p>Thời gian: 12 tuần.</p>
                <ul className="list-disc list-inside ml-4">
                    <li>Tuần 1-4: Tập luyện với trọng lượng nặng và tăng lượng calo.</li>
                    <li>Tuần 5-8: Tăng cường độ bài tập và bổ sung dinh dưỡng.</li>
                    <li>Tuần 9-12: Theo dõi sự phát triển và điều chỉnh chế độ ăn uống.</li>
                </ul>
            </div>

            {/* Chương trình độ mông */}
            <div className="mb-8">
                <h3 className="font-bold text-lg mb-2">Độ mông (Glute Program)</h3>
                <p>Mục tiêu: Tăng cường và định hình vùng mông.</p>
                <p>Thời gian: 8 tuần.</p>
                <ul className="list-disc list-inside ml-4">
                    <li>Tuần 1-4: Bài tập cơ bản và tăng cường sức mạnh.</li>
                    <li>Tuần 5-8: Tập trung vào các bài tập chuyên biệt cho mông.</li>
                </ul>
                <h4 className="font-bold mt-4">Liệu trình tập:</h4>
                <ul className="list-disc list-inside ml-4">
                    <li>Hip Thrust x 10 lần.</li>
                    <li>Glute Bridge x 15 lần.</li>
                    <li>Squats x 20 lần.</li>
                </ul>
            </div>

            {/* Chương trình Slim Body */}
            <div className="mb-8">
                <h3 className="font-bold text-lg mb-2">Slim Body</h3>
                <p>Mục tiêu: Giảm mỡ, duy trì cơ bắp và tạo hình.</p>
                <p>Thời gian: 10 tuần.</p>
                <ul className="list-disc list-inside ml-4">
                    <li>Tuần 1-5: Tập luyện cardio và bài tập trọng lượng nhẹ.</li>
                    <li>Tuần 6-10: Tăng cường độ và tập luyện cường độ cao.</li>
                </ul>
                <h4 className="font-bold mt-4">Liệu trình tập:</h4>
                <ul className="list-disc list-inside ml-4">
                    <li>Cycling x 30 phút.</li>
                    <li>Burpees x 15 lần.</li>
                    <li>Deadlifts x 10 lần.</li>
                </ul>
            </div>

            {/* Chương trình Duy trì thể hình */}
            <div className="mb-8">
                <h3 className="font-bold text-lg mb-2">Duy trì thể hình (Fitness Maintenance Program)</h3>
                <p>Mục tiêu: Duy trì thể lực và sức khỏe tổng quát.</p>
                <p>Thời gian: Liên tục.</p>
                <ul className="list-disc list-inside ml-4">
                    <li>Tuần 1-4: Bài tập toàn thân với tần suất ổn định.</li>
                    <li>Tuần 5-8: Tăng cường độ và thay đổi bài tập.</li>
                </ul>
                <h4 className="font-bold mt-4">Liệu trình tập:</h4>
                <ul className="list-disc list-inside ml-4">
                    <li>Chạy bộ 30 phút.</li>
                    <li>Yoga x 1 giờ.</li>
                    <li>Bodyweight Exercises x 20 phút.</li>
                </ul>
            </div>
        </div>
    );
};

export default EventDetails;