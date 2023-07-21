import Card from "@components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      {/* card container */}
      <section className="mx-auto h-96 w-2/3 rounded-md border-2 border-green-600 p-4 ">
        <Card title={"hello"} />
      </section>
    </main>
  );
}
