import africaFood from "../assets/IMG44.png";

const OpenOrder = ({ data, loading }) => {
  console.log(data);

  return (
    <div>
      {data.map((data) => (
        <div key={data._id} >
            <div className="space-y-4 p-4 md:flex md:space-x-8 md:space-y-0 md:justify-between">
              <img src={data.items[0].item.image_url} alt="africaFood" width={100} className="h-20 rounded-md" />
            <div>
              <p className="text-[14px]">
                {data.items[0].item.name}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="bg-orange-400 p-2 px-3 rounded-lg text-white text-[10px]">
                  {data.status}
                </span>
                <span className="text-[12px]">12-1-2023</span>
              </div>
            </div>
          </div>
          <hr className="shadow" />
        </div>
      ))}

      {/* <div className="space-y-4 p-4 md:flex md:space-x-8 md:justify-between">
        <img src={africaFood} alt="africaFood" width={100} />
        <div>
           <p className="text-[14px]">Plain White Rice, Efo Riro Soup, Grilled Chicken</p>
           <div className="flex justify-between items-center mt-4">
            <span className="bg-green-500 p-2 px-3 rounded-lg text-white text-[10px]">Shipped</span>
            <span className="text-[12px]">12-1-2023</span>
           </div>
        </div>
    </div>
        <hr className="shadow"/>
    <div className="space-y-4 p-4 md:flex md:space-x-8 md:justify-between ">
        <img src={africaFood} alt="africaFood" width={100} />
        <div>
           <p className="text-[14px]">Plain White Rice, Efo Riro Soup, Grilled Chicken</p>
           <div className="flex justify-between items-center mt-4">
            <span className="bg-blue-500 p-2 px-3 rounded-lg text-white text-[10px]">Order placed</span>
            <span className="text-[12px]">12-1-2023</span>
           </div>
        </div>
    </div>
        <hr className="shadow" /> */}
    </div>
  );
};

export default OpenOrder;
