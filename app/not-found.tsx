import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <Link href="/"></Link>
    </div>
  );
};

export default Custom404;
