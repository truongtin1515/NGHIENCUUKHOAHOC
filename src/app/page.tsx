import Image from "next/image";

export default function Home()  {
  return (
    <div className="">
      HomePage
      <div className="w-full h-6 bg-primary">
        Màu chính
      </div>
      <div className="w-full h-6 bg-secondary">
        Màu phụ.
      </div>
      <div className="w-full h-6 bg-accent">
        Màu nhấn.
      </div>
      <div className="w-full h-6 bg-neutral">
        Màu trung tính.
      </div>
      <div className="w-full h-6 bg-base-100">
        Nền chính (sáng).
      </div>
      <div className="w-full h-6 bg-base-200">
        Nền phụ 1.  
      </div>
      <div className="w-full h-6 bg-base-300">
        Nền phụ 2
      </div>
      <div className="w-full h-6 bg-info">
        Màu thông tin.
      </div>
      <div className="w-full h-6 bg-success">
        Màu thành công.
      </div>
      <div className="w-full h-6 bg-warning">
        Màu cảnh báo.
      </div>
      <div className="w-full h-6 bg-error">
        Màu lỗi.
      </div>
    </div>
  );
}
