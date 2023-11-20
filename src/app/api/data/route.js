import { NextResponse } from "next/server";
import data from "../../../../data";

export const GET = async (req) => {
    
      return new NextResponse(JSON.stringify(data), { status: 201 });
}


export const POST = async (req) => {
  const { price1, price2, price3, price4 } = await req.json();

  if (price1 !== undefined && price2 !== undefined && price3 !== undefined && price4 !== undefined) {
    data.data[0].price = price1;
    data.data[1].price = price2;
    data.data[2].price = price3;
    data.data[3].price = price4;
  }
  

  return new NextResponse("works", { status: 201 });
}