export default function Home() {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 min-h-screen">
        <div className="lg:col-span-2 px-4">
          <div className="grid content-center grid-cols-2">
            <div className="self-center">
              <div className="dropdown dropdown-bottom">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-outline btn-sm m-1"
                >
                  ทั้งหมด
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[2] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>ทั้งหมด</a>
                  </li>
                  <li>
                    <a>รายการโปรด 1</a>
                  </li>
                  <li>
                    <a>รายการโปรด 2</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="self-center">
              <input
                type="text"
                placeholder="ค้นหา..."
                className="input input-sm input-bordered w-full max-w-xs"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-100 hidden sm:block overscroll-contain">
          <div className="px-4">
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>หน้าแรก</h1>
            <h1>dadsfadf</h1>
            <h1>sssssssss</h1>
          </div>
        </div>
      </div>
    </>
  );
}
