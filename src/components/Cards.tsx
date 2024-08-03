"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Meteors } from "@/components/ui/meteors";

export function MeteorsDemo() {
  return (
    <div className="">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Meteors because they&apos;re cool
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            I don&apos;t know what to write so I&apos;ll just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Won&apos;t ChatGPT the shit out of this.
          </p>

          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
    {
        quote:
            "I am grateful to Ashwani Sir for his guidance and mentorship. Thanks to his teachings, I was able to secure a Java Full Stack job. His expertise and support were invaluable.",
        name: "Rahul Sharma",
        title: "Java Full Stack Developer, Google",
    },
    {
        quote:
            "Ashwani Sir's training played a crucial role in my success as a Java Full Stack developer. His in-depth knowledge and practical approach helped me excel in my job interviews.",
        name: "Priya Patel",
        title: "Java Full Stack Engineer, Amazon",
    },
    {
        quote:
            "I owe my Java Full Stack job to Ashwani Sir. His comprehensive training program equipped me with the skills and confidence to ace the interview and land my dream job.",
        name: "Amit Kumar",
        title: "Java Full Stack Professional, Microsoft",
    },
    {
        quote:
            "Thanks to Ashwani Sir's guidance, I am now working as a Java Full Stack developer. His mentorship and industry insights were instrumental in shaping my career.",
        name: "Neha Gupta",
        title: "Java Full Stack Specialist, EPAM",
    },
    {
        quote:
            "I attribute my success in securing a Java Full Stack job to Ashwani Sir's teachings. His practical approach and real-world examples prepared me well for the challenges of the industry.",
        name: "Sandeep Singh",
        title: "Java Full Stack Programmer, Airbnb",
    },
];
  