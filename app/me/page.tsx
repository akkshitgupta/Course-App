import ShowCourses from "@components/ShowCourse";

export default function Me() {
  return (
    <section className="text-gray-600">
      <div className="container mx-auto px-5 py-10">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
            My Purchases here
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Here are the courses you have purchased.
          </p>
        </div>
        <ShowCourses />
      </div>
    </section>
  );
}
