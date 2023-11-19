"use client"

import useSWR from "swr";

export default function Idk() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, mutate, error, isLoading } = useSWR(`https://connect-database.vercel.app/api/data`, fetcher);

    !isLoading && console.log(data);

  return (
    <div>Idk</div>
  )
}
