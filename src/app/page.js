"use client"

import { useEffect } from "react";
import useSWR from "swr";

export default function Home() {

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(`/api/data`, fetcher);

  return (
    <div>
      {!isLoading && (
        JSON.stringify(data)
      )}
    </div>
  )
}
