"use client"

import useSWR from "swr";

export default async function Idk() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, mutate, error, isLoading } = useSWR(`https://connect-database.vercel.app/api/data`, fetcher);

    const res = await fetch("https://connect-database.vercel.app/api/data")

    const d = await res.json()

    console.log(d.data);

    !isLoading && console.log(data);
    !isLoading && console.log(error);
  return (
    <div>Idk</div>
  )
}