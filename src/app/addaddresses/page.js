"use client"

export default function AddData() {

    const handleSubmitAddresses = async (e) => {
        e.preventDefault();

        const addressName = e.target[0].value;
        const latitude = e.target[1].value;
        const longitude = e.target[2].value;

        try {
            const res = await fetch("/api/addresses", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                AddressName: addressName,
                Latitude: latitude,
                Longitude: longitude,
              }),
            });
          } catch (error) {
            console.log(error);
          }
    }
  return (
    <div>
        <h1 className="titlee">
        Add Addresses
       </h1>
        <form onSubmit={handleSubmitAddresses}>
            <input
            className="text-blue-900 formitem"
            type="text"
            step="any"
            id="price1"
            name="price1"
            placeholder="Address Name"
        />
        <input
            className="text-blue-900 formitem"
            type="text"
            step="any"
            id="price2"
            name="price2"
            placeholder="Latitude"
        />
        <input
            className="text-blue-900 formitem"
            type="text"
            step="any"
            id="price3"
            name="price3"
            placeholder="Longitude"
        />
        <button type='submit' className="text-white btn-blue">UPLOAD</button>
        </form>
    </div>
  )
}
