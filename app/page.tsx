"use client";

import Card from "@components/Card";

export default function Home() {
  return (
    <section className="text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="-m-4 flex flex-wrap">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}
