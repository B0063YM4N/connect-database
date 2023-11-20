import { NextResponse } from "next/server";
import data from "../../../../data";

export const GET = async (req) => {
  const dataA = {
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
  return new NextResponse(JSON.stringify(dataA), { status: 201 });
}


export const POST = async (req) => {
  const { price1, price2, price3, price4 } = await req.json();

  if (price1 !== undefined && price2 !== undefined && price3 !== undefined && price4 !== undefined) {
    data.data[0].price = price1;
    data.data[1].price = price2;
    data.data[2].price = price3;
    data.data[3].price = price4;
  }
  

  return new NextResponse(JSON.stringify(data), { status: 201 });
}