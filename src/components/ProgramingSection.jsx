import React from "react";
import { motion } from "framer-motion";
import StatCard from "./StatCard";
import StatCard2 from "./StatCard2";
import { FaCode } from "react-icons/fa";

const ProgrammingSection = () => {

  // Hardcoded LeetCode stats
  const stats = {
    totalSolved: 665,
    easySolved: 229,
    mediumSolved: 338,
    hardSolved: 98,
    ranking: 99000,
  };

  return (
    <div className="min-h-screen text-white">
      <div className="md:grid md:grid-cols-2 gap-6 items-center py-6 px-1 xl:gap-5 sm:py-5 xl:px-16">

        {/* Left Side */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  className="flex justify-center items-center"
>
  <img
    src="/leetcode-profile.png"
    alt="Neeraj Nagar LeetCode"
    className="w-[450px] h-[500px] object-cover rounded-2xl shadow-2xl"
  />
</motion.div>

        {/* Right Side */}
        <motion.div
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
            Problem Solving
          </h2>

          <p className="text-base sm:p-0">
            I actively practice competitive programming on LeetCode
            with a strong focus on data structures, algorithms, and
            problem-solving consistency.
          </p>

          <div className="mt-4 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-pink-500">
              Problem Stats From LeetCode
            </h2>
            <a className="ml-3 mt-1" href="https://leetcode.com/u/Neeraj_nagar/" target="_blank" rel="noopener noreferrer">
                <FaCode size={30}/>
            </a>
          </div>

          {/* Stats */}
          <section className="mt-5">

            <StatCard2
              title="Total Problems Solved"
              value={stats.totalSolved}
            />

            <div className="sm:flex sm:justify-between">
              <StatCard
                title="Easy"
                value={stats.easySolved}
                className="text-blue-500"
              />

              <StatCard
                title="Medium"
                value={stats.mediumSolved}
                className="text-yellow-400"
              />

              <StatCard
                title="Hard"
                value={stats.hardSolved}
                className="text-red-600"
              />
            </div>

            <StatCard2
              title="Global Ranking"
              value={stats.ranking}
            />

          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default ProgrammingSection;