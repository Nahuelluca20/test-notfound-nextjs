import {notFound} from "next/navigation";

export default function page({searchParams}: {searchParams: {page: string}}) {
  if (Number(searchParams.page) < 3) {
    notFound();
  }

  return <div>params: {searchParams.page}</div>;
}
