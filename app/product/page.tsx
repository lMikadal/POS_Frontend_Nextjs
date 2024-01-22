"use client";

export default function Product() {
  const inputs = [
    {
      type: "text",
      name: "product_name",
      label: "ชื่อสินค้า",
    },
    {
      type: "text",
      name: "product_price",
      label: "ราคาสินค้า",
    },
  ];
  return (
    <>
      <div className="flex justify-end">
        <button
          className="btn"
          onClick={() => {
            if (document) {
              (
                document.getElementById("my_modal_1") as HTMLFormElement
              ).showModal();
            }
          }}
        >
          เพิ่มสินค้า
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <label className="form-control w-full max-w-xs">
              <h3 className="font-bold text-lg">เพิ่มสินค้า</h3>
              {inputs.map((input, idx) => (
                <div key={idx}>
                  <div className="label">
                    <span className="label-text">{input.label}</span>
                  </div>
                  <input
                    type={input.type}
                    placeholder="Type here"
                    name={input.name}
                    className="input input-bordered input-sm w-full max-w-xs"
                  />
                </div>
              ))}
            </label>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <h1>product</h1>
    </>
  );
}
