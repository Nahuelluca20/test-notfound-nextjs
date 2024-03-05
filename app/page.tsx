import {cookies} from "next/headers";

export default function Page() {
  cookies(); // headers() noStore()

  return (
    <div>
      <h1>App Router</h1>
      <p>{Date.now()}</p>
    </div>
  );
}
