import Card from "@components/Card";

export default function page({ params }) {
  return (
    <div className="flex items-center justify-center font-semibold text-white">
      <Card title={"hello world"} />
    </div>
  );
}
