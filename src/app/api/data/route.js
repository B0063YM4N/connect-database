import { NextResponse } from "next/server";

export const GET = async (req) => {
    const data = {
        message: "ok",
        data: [
          {
            id: 19,
            nameGe: "ნანო სუპერი",
            nameEn: "Nano Super",
            price: 3.78,
          },
          {
            id: 18,
            nameGe: "ნანო პრემიუმი",
            nameEn: "Nano Premium",
            price: 3.34,
          },
          {
            id: 22,
            nameGe: "ნანო ევრო რეგულარი",
            nameEn: "Nano Euro Regular",
            price: 3.17,
          },
          {
            id: 20,
            nameGe: "ევრო 5 დიზელი",
            nameEn: "Euro 5 Diesel",
            price: 3.43,
          },
          {
            id: 21,
            nameGe: "ნანო ევრო 5 დიზელი",
            nameEn: "Nano Euro 5 Diesel",
            price: 3.49,
          },
          {
            id: 13,
            nameGe: "თხევადი აირი",
            nameEn: "Liquid Gas",
            price: 2.1,
          },
          {
            id: 12,
            nameGe: "ბუნებრივი აირი",
            nameEn: "Natural Gas",
            price: 1.6,
          },
        ],
      };
      return new NextResponse(JSON.stringify(data), { status: 201 });
}