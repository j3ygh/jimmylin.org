import Link from "next/link";

const Main = () => {
  return (
    <main className="font-pretty py-20 min-h-screen text-ink bg-paper dark:text-light dark:bg-night">
      <div className="max-w-screen-md p-4 mx-auto border-b border-moonlight dark:border-pencil">
        <p className="mx-4 my-8 text-4xl font-medium">
          What should we care about CI/CD?
        </p>
        <p className="mx-4 my-8">Effort on achieve CI/CD can be expensive.</p>
        <p className="mx-4 my-8 text-right">
          <Link href="/posts/2">
            <a className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light">
              more
            </a>
          </Link>
        </p>
      </div>
      <div className="max-w-screen-md p-4 mx-auto border-b border-moonlight dark:border-pencil">
        <p className="mx-4 my-8 text-4xl font-medium">How to create a docker image?</p>
        <p className="mx-4 my-8 text-right">
          <Link href="/posts/1">
            <a className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light">
              more
            </a>
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Main;
