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
          { _id: "67d9fb746b56b88c965965f9"},
          { price: body.price1 } 
        );
      }
        if (body.price2 !== null && body.price2 !== "" && body.price2 !== undefined) {
          await Data.findOneAndUpdate(
            { _id: "65686b2f505b0981400de64c"},
             { price: body.price2 } 
          );
        }
        if (body.price3 !== null && body.price3 !== "" && body.price3 !== undefined) {
          await Data.findOneAndUpdate(
          { _id: "65686b2f505b0981400de648"},
           { price: body.price3 } 
        );
        }
        if (body.price4 !== null && body.price4 !== "" && body.price4 !== undefined) {
          await Data.findOneAndUpdate(
          { _id: "65686b2e505b0981400de646"},
           { price: body.price4 } 
        );
        }
        if (body.price5 !== null && body.price5 !== "" && body.price5 !== undefined) {
          await Data.findOneAndUpdate(
          { _id: "65686b2f505b0981400de647"},
           { price: body.price5 } 
        );
        }
        if (body.price6 !== null && body.price6 !== "" && body.price6 !== undefined) {
          await Data.findOneAndUpdate(
          { _id: "67e471a4cb411e54522179bb"},
           { price: body.price6 } 
        );
        }

      // await Data.findOneAndUpdate(
      //       { _id: "656865c28f74a90a4e59677a"},
      //        { data: body.data },
      //     );

          // await Data.updateOne(
          //   { _id: "656865c28f74a90a4e59677a"},
          //    { $push: {data: body.data} },
          // );
          // if (body.price1 !== null && body.price1 !== "" && body.price1 !== undefined) {
          //   await Data.updateOne(
          //     { _id: "656865c28f74a90a4e59677a",
          //       'data._id': "6568675f1db1fa383615b029",
          //   },
          //      {$set: {
          //       'data.$.price': body.price1
          //      } },
          //   );
          // }
          // if (body.price2 !== null && body.price2 !== "" && body.price2 !== undefined) {
          //   await Data.updateOne(
          //     { _id: "656865c28f74a90a4e59677a",
          //       'data._id': "6568679e1db1fa383615b02d",
          //   },
          //      {$set: {
          //       'data.$.price': body.price2
          //      } },
          //   );
          // }
          // if (body.price3 !== null && body.price3 !== "" && body.price3 !== undefined) {
          //   await Data.updateOne(
          //     { _id: "656865c28f74a90a4e59677a",
          //       'data._id': "6568679e1db1fa383615b031",
          //   },
          //      {$set: {
          //       'data.$.price': body.price3
          //      } },
          //   );
          // }
          // if (body.price4 !== null && body.price4 !== "" && body.price4 !== undefined) {
          //   await Data.updateOne(
          //     { _id: "656865c28f74a90a4e59677a",
          //       'data._id': "6568679e1db1fa383615b035",
          //   },
          //      {$set: {
          //       'data.$.price': body.price4
          //      } },
          //   );  
          // }
          
      // await newData.save()

      return new NextResponse("Data has been created", { status: 201 });
  } catch (error) {
      return new NextResponse("Database Error", { status: 500 });
  }
}