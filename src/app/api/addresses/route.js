import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Address from "@/models/Address";

export const GET = async (request) => {
  try {
    await connect();


    const addresses = await Address.find();

    return new NextResponse(JSON.stringify(addresses), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
}


export const POST = async (request) => {
  const body = await request.json();

  const newAddress = Address(body);

  console.log(body);


  try {
      await connect();
    
      await newAddress.save()
      
      return new NextResponse("Data has been created", { status: 201 });
  } catch (error) {
      return new NextResponse("Database Error", { status: 500 });
  }
}