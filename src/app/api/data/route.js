import { NextResponse } from "next/server";

export const GET = async (req) => {
    const data = {
        message: "ok",
        data: [
          {
            id: 1,
            nameGe: "რეგულარი",
            nameEn: "Regular",
            price: 2.89,
          },
          {
            id: 2,
            nameGe: "პრემიუმი",
            nameEn: "Premium",
            price:3.04,
          },
          {
            id: 3,
            nameGe: "დიზელი",
            nameEn: "Diesel",
            price: 3.04,
          },
          {
            id: 4,
            nameGe: "ევრო დიზელი",
            nameEn: "Euro Diesel",
            price: 3.19,
          },
          
        ],
      };
      return new NextResponse(JSON.stringify(data), { status: 201 });
}