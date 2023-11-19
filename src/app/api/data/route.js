import { NextResponse } from "next/server";

export const GET = async (req) => {
    const data = {
        message: "ok",
        data: [
          {
            id: 1,
            nameGe: "რეგულარი",
            nameEn: "Regular",
            price: 2.94,
          },
          {
            id: 2,
            nameGe: "პრემიუმი",
            nameEn: "Premium",
            price:3.09,
          },
          {
            id: 3,
            nameGe: "დიზელი",
            nameEn: "Diesel",
            price: 3.09,
          },
          {
            id: 4,
            nameGe: "ევრო დიზელი",
            nameEn: "Euro Diesel",
            price: 3.24,
          },
          
        ],
      };
      return new NextResponse(JSON.stringify(data), { status: 201 });
}