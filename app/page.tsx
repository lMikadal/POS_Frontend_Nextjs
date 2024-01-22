export default function Home() {
  const items = [
    {
      id: 1,
      name: "Shoes",
      price: 8.88,
      tags: ["Fashion", "Products"],
    },
    {
      id: 2,
      name: "Shoes",
      price: 8.88,
      tags: ["Fashion", "Products"],
    },
    {
      id: 3,
      name: "Shoes",
      price: 8.88,
      tags: ["Fashion", "Products"],
    },
    {
      id: 4,
      name: "Shoes",
      price: 8.88,
      tags: ["Fashion", "Products"],
    },
    {
      id: 5,
      name: "Shoes",
      price: 8.88,
      tags: ["Fashion", "Products"],
    },
    {
      id: 6,
      name: "Shoes",
      price: 8.88,
      tags: ["Fashion", "asdf", "asdfa"],
    },
  ];
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {items.map((item) => (
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.price} บาท</p>
              {/* tag */}
              <div className="card-actions justify-end">
                {item.tags.map((tag) => (
                  <div className="badge badge-outline">{tag}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
