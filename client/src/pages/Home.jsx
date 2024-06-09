import React from "react";
import { Link, Navigate } from "react-router-dom";
import countryLogo from "../assets/ToanTTmain.png";
import Auth from "../utils/auth";
import courses from "../data/courses";  // Import dữ liệu khóa học

const Home = () => {
  const loggedIn = Auth.loggedIn();
  if (loggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <section
      id="hero"
      className="w-full min-h-[calc(100vh-72px)] py-14 hero-bg relative"
    >
      {/* Slogan */}
      <div className="absolute top-4 right-4 p-4 bg-white bg-opacity-0 dark:bg-slate-600 dark:bg-opacity-100 rounded-xl shadow-xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font- italic text-pink-600 dark:text-pink-400 leading-tight font-roboto">
          "Đừng chỉ trách bản thân kém cỏi. <br />
          Vì đến cá còn biết mở mang"
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Call to Action */}
        <div className="flex flex-col items-center lg:items-start font-bold text-center lg:text-left gap-8 order-last lg:order-first">
          <h1 className="flex flex-col items-center text-xl md:text-2xl lg:text-3xl uppercase">
            <span>Cách đơn giản để học</span>
            <span className="mt-4 text-primary text-5xl md:text-6xl lg:text-7xl">
              Toán
            </span>
          </h1>
          <p className="max-w-md md:text-xl text-gray-500 dark:text-gray-400">
            Tự học mỗi ngày qua các bài trắc nghiệm thú vị cùng Toán Tương Tác
          </p>
          <div className="w-72 flex flex-col text-center gap-4">
            {/* Sign Up Button */}
            <Link
              to="/signup"
              className="py-3 px-3 text-white bg-primary hover:bg-primary-shade rounded-xl shadow-xl"
            >
              Đăng ký học miễn phí
            </Link>
            {/* Login Button */}
            <Link
              to="/login"
              className="py-3 px-3 text-primary dark:text-gray-300 border-2 border-primary dark:border-gray-300 bg-white dark:bg-slate-900 dark:hover:bg-gray-100/10 hover:bg-gray-300 rounded-xl shadow-xl"
            >
              Quay lại hành trình học
            </Link>
          </div>
          {/* Course Categories */}
          <div className="w-72 mt-8 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-xl">
            <h2 className="text-2xl font-bold text-center mb-4">Danh mục khóa học</h2>
            <ul className="space-y-2">
              {courses.map(course => (
                <li key={course.id} className="p-2 border-b border-gray-300 dark:border-gray-700">
                  <h3 className="text-xl font-semibold">{course.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{course.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Country Logo */}
        <img
          src={countryLogo}
          alt="ToanTT Logo"
          className="w-48 h-48 md:w-80 md:h-80 lg:w-[480px] lg:h-[480px] transition-all duration-300 ease-in-out"
        />
      </div>
      {/* Search Courses Button */}
      <div className="w-full flex justify-center mt-12">
        <Link
          to="/search-courses"
          className="py-4 px-8 text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xl text-2xl"
        >
          Tìm kiếm khóa học
        </Link>
      </div>
    </section>
  );
};

export default Home;
