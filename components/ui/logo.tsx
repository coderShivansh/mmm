import Link from "next/link";


export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="MakeMyMvp">
      <div>
        <h1 className="text-black-900 font-extrabold tracking-wide text-xl">
          <span className="text-blue-600 font-extrabold ">M</span>ake
          <span className="text-blue-600 font-extrabold">M</span>y
          <span className="text-blue-600 font-extrabold">M</span>vp
        </h1>
      </div>
    </Link>
  );
}
