"use client";

import { Button } from "@/components/ui/button";
import { StoryCard } from "@/components/community/story-card";
import { Navigation } from "@/components/shared/navigation";
import { GroupLabel } from "@/components/shared/group-label";
import Link from "next/link";



export default function CommunityStoriesPage() {
  const stories = [
    {
      id: 1,
      location: "Melaka",
      place: "Malacca Sultanate Palace Museum",
      author: "Imran Rosli",
      authorBadge: "Verified Local",
      tags: ["#LocalTourist", "#Melaka"],
      bgGradient: "bg-gradient-to-br from-blue-400 to-purple-500",
      image: "story-01.webp"
    },
    {
      id: 2,
      location: "Melaka",
      place: "Museum Samudera",
      author: "Farah Shazwanie",
      authorBadge: "Frequent Traveller",
      tags: ["#Melaka"],
      bgGradient: "bg-gradient-to-br from-cyan-400 to-blue-500",
      image: "story-02.webp"
    },
    {
      id: 3,
      location: "Melaka",
      place: "Kampung Morten",
      author: "Hafiz Suhaimi",
      authorBadge: "Verified Local",
      tags: ["#Melaka", "#Local", "#Tourist"],
      bgGradient: "bg-gradient-to-br from-orange-400 to-red-500",
      image: "story-03.webp"
    },
    {
      id: 4,
      location: "Melaka",
      place: "Jonker Street Night Market",
      author: "Imran Rosli",
      authorBadge: "Verified Local",
      tags: ["#Melaka", "#Local", "#Tourist"],
      bgGradient: "bg-gradient-to-br from-blue-400 to-purple-500",
      image: "story-02.webp"
    },
    {
      id: 5,
      location: "Melaka",
      place: "St. Paul's Church",
      author: "Farah Shazwanie",
      authorBadge: "Frequent Traveller",
      tags: ["#Melaka"],
      bgGradient: "bg-gradient-to-br from-cyan-400 to-blue-500",
      image: "story-03.webp"
    },
    {
      id: 6,
      location: "Melaka",
      place: "A Famosa",
      author: "Saranya Mohabatten",
      authorBadge: "Verified Local",
      tags: ["#Melaka", "#Local", "#Tourist"],
      bgGradient: "bg-gradient-to-br from-orange-400 to-red-500",
      image: "story-01.webp"
    },
    {
      id: 7,
      location: "Melaka",
      place: "Dataran Pahlawan",
      author: "Imran Rosli",
      authorBadge: "Verified Local",
      tags: ["#Melaka", "#Local", "#Tourist"],
      bgGradient: "bg-gradient-to-br from-blue-400 to-purple-500",
      image: "story-02.webp"
    },
    {
      id: 8,
      location: "Melaka",
      place: "Melaka River Cruise",
      author: "Farah Shazwanie",
      authorBadge: "Frequent Traveller",
      tags: ["#Melaka"],
      bgGradient: "bg-gradient-to-br from-cyan-400 to-blue-500",
      image: "story-03.webp"
    },
    {
      id: 9,
      location: "Melaka",
      place: "St. John's Fort",
      author: "Saranya Mohabatten",
      authorBadge: "Verified Local",
      tags: ["#Melaka", "#Local", "#Tourist"],
      bgGradient: "bg-gradient-to-br from-orange-400 to-red-500",
      image: "story-03.webp"
    },
    {
      id: 10,
      location: "Melaka",
      place: "Jonker Street Night Market",
      author: "Imran Rosli",
      authorBadge: "Verified Local",
      tags: ["#Melaka", "#Local", "#Tourist"],
      bgGradient: "bg-gradient-to-br from-blue-400 to-purple-500",
      image: "story-01.webp"
    },
    {
      id: 11,
      location: "Melaka",
      place: "St. John's Fort",
      author: "Farah Shazwanie",
      authorBadge: "Frequent Traveller",
      tags: ["#Melaka"],
      bgGradient: "bg-gradient-to-br from-cyan-400 to-blue-500",
      image: "story-02.webp"
    },
    {
      id: 12,
      location: "Melaka",
      place: "St. John's Fort",
      author: "Saranya Mohabatten",
      authorBadge: "Verified Local",
      tags: ["#Melaka", "#Local", "#Tourist"],
      bgGradient: "bg-gradient-to-br from-orange-400 to-red-500",
      image: "story-03.webp"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <GroupLabel group={4} />

      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 py-8">
        {/* Title Section */}
        <section className="relative py-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-700" style={{ letterSpacing: "-0.03em" }}>
              Community Story
            </h1>
            <Link href="/community/stories/create">
              <Button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-lg w-full sm:w-auto">
                Create Community Story
              </Button>
            </Link>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="relative pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {stories.map((story) => (
              <StoryCard key={story.id} {...story} />
            ))}
          </div>
        </section>
      </main>

    </div>
  );
}

