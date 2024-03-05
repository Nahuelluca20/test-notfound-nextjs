import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>App Router</h1>
      <Link href={"/jobs?page=2"} style={{padding: "8px", marginTop: "5px"}}>
        Go to Page 2
      </Link>
      <Link href={"/jobs?page=5"} style={{padding: "8px", marginTop: "5px"}}>
        Go to Page 5
      </Link>

      <p>{Date.now()}</p>
    </div>
  );
}
