"use client";

import BaseContainer from "@/components/base-container";
import FriendCard from "@/components/friend-card";
import Review from "@/components/review";
import { useState } from "react";

export default function Social() {
  const [activeTab, setActiveTab] = useState<"friends" | "reviews">("friends");

  const tabs = [
    { label: "Friends", value: "friends" },
    { label: "Reviews", value: "reviews" },
  ];

  return (
    <div className="p-8">
      <BaseContainer>
        {/* Sub-navbar */}
        <div className="mb-6 border-b border-gray-700 flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value as "friends" | "reviews")}
              className={`py-2 px-1 text-sm font-medium transition-colors border-b-2 ${
                activeTab === tab.value
                  ? "text-white border-white"
                  : "text-gray-400 border-transparent hover:text-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === "friends" ? (
          <div className="space-y-4">
            <FriendCard name="kevuhh" />
            <FriendCard name="kevuhh" mutuals={[]} />
            <FriendCard name="kevuhh" mutuals={["sigma", "rancho"]} />
          </div>
        ) : (
          <>
            <Review
              username="kevuhh"
              date="1 month ago"
              bookTitle="Abundance"
              thumbnail="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?semt=ais_hybrid&w=740"
              score={69}
              desc="Very good book."
              likes={420}
              commentCount={69}
            />
            <Review
              username="derek"
              date="2 month ago"
              bookTitle="Sigma"
              thumbnail="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?semt=ais_hybrid&w=740"
              score={10}
              desc="Also very good book."
              likes={420}
              commentCount={69}
            />
          </>
          // <p className="text-white">No reviews yet.</p>
        )}
      </BaseContainer>
    </div>
  );
}
