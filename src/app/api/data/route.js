import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Data from "@/models/Data";

export const GET = async (request) => {
  try {
    await connect();


    const data = await Data.find();

    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
}


export const POST = async (request) => {
  const body = await request.json();

  const newData = Data(body);

  console.log(body);


  try {
      await connect();

      if (body.price1 !== null && body.price1 !== "" && body.price1 !== undefined) {
        await Data.findOneAndUpdate(
          { _id: "6568613c003fcd940a77a1ad"},
          { price: body.price1 } 
        );
      }
        if (body.price2 !== null && body.price2 !== "" && body.price2 !== undefined) {
          await Data.findOneAndUpdate(
            { _id: "6568613e003fcd940a77a1af"},
             { price: body.price2 } 
          );
        }
        if (body.price3 !== null && body.price3 !== "" && body.price3 !== undefined) {
          await Data.findOneAndUpdate(
          { _id: "6568613e003fcd940a77a1b1"},
           { price: body.price3 } 
        );
        }
        if (body.price4 !== null && body.price4 !== "" && body.price4 !== undefined) {
          await Data.findOneAndUpdate(
          { _id: "65686159003fcd940a77a1b3"},
           { price: body.price4 } 
        );
        }

      // await newData.save()

      return new NextResponse("Data has been created", { status: 201 });
  } catch (error) {
      return new NextResponse("Database Error", { status: 500 });
  }
}