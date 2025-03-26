"use client"

export default function Home() {

  const habdleAddData = async (e) => {
    e.preventDefault();

    const price1 = e.target[0].value;
    const price2 = e.target[1].value;
    const price3 = e.target[2].value;
    const price4 = e.target[3].value;
    const price5 = e.target[4].value;
    const price6 = e.target[5].value;

    try {
      const res = await fetch("/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price1,
          price2,
          price3,
          price4,
          price5,
          price6,
        }),
      });
    } catch (error) {
      console.log(error);
    }

  }
  /**
             price1,
          price2,
          price3,
          price4,
          message: "ok",
          data: {
            id: 2,
            price: 1,
            nameGe: "aaaaa",
            nameEn: "aabbbba",
          }
   */
  return (
    <div className="container">

       <h1 className="titlee">
        Change Price
       </h1>
      <form className="forminp" onSubmit={habdleAddData}>
      <input
        className="text-blue-900 formitem"
        type="number"
        step="any"
        id="price1"
        name="price1"
        placeholder="Super"
      />
      <input
        className="text-blue-900 formitem"
        type="number"
        step="any"
        id="price2"
        name="price2"
        placeholder="Premium"
      />
      <input
        className="text-blue-900 formitem"
        type="number"
        step="any"
        id="price3"
        name="price3"
        placeholder="Regular"
      />
      <input
        className="text-blue-900 formitem"
        type="number"
        step="any"
        id="price4"
        name="price4"
        placeholder="Euro Diesel"
      />
      <input
        className="text-blue-900 formitem"
        type="number"
        step="any"
        id="price5"
        name="price5"
        placeholder="Diesel"
      />
      <input
        className="text-blue-900 formitem"
        type="number"
        step="any"
        id="price6"
        name="price6"
        placeholder="LPG"
      />
      <button type='submit' className="text-white btn-blue">UPLOAD</button>
    </form>
    </div>

  )
}