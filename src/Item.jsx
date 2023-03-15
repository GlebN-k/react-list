import React, { useState } from "react";
import { BiDollar, BiMessageDetail } from "react-icons/bi";
import { BsCartCheck } from "react-icons/bs";
import { MdPersonAdd } from "react-icons/md";

const Item = ({ icon, data, color, title }) => {
  const defaultQuantity = 3;

  const [display, setDisplay] = useState(false);
  const [quantityItems, setQuantityItems] = useState(defaultQuantity);
  const shouldDisplayButton = data.length > quantityItems;

  const className = `w-[50px] h-[50px] ${color}  rounded-sm flex items-center justify-center text-white`;

  const handleClick = () => {
    setDisplay(!display);
    setQuantityItems(defaultQuantity)
  };

  return (
    <div className="relative">
      <div
        className="flex gap-10 border-y-2 p-4 relative cursor-pointer"
        onClick={handleClick}
      >
        <div className={className}>
          {icon === "dollar" ? (
            <BiDollar />
          ) : icon === "cart" ? (
            <BsCartCheck />
          ) : icon === "message" ? (
            <BiMessageDetail />
          ) : icon === "addPerson" ? (
            <MdPersonAdd />
          ) : (
            <BsCartCheck />
          )}
        </div>
        <div>
          <p>{title}</p>
          <p>{data.length}</p>
        </div>
      </div>
      {display && (
        <div className="absolute flex flex-col  ">
          {data.slice(0, quantityItems).map((item, index) => (
            <div className="flex gap-4 items-center" key={index}>
              {item.image && (
                <img
                  className="w-[40px] h-[40px] rounded-full my-2"
                  src={item.image}
                  alt="avatar"
                />
              )}
              {item.name && <p>{item.name}</p>}
              {item.text && <p>{item.text}</p>}
              {item.quantity && <p>{item.quantity}</p>}
              {item.salary && <p>{item.salary}</p>}
            </div>
          ))}
          {<button
            className=" bg-red-600 rounded text-white"
            onClick={() => setQuantityItems(quantityItems+3)}
            style={{ display: shouldDisplayButton ? "block" : "none" }}
          >
            show more
          </button>}
        </div>
      )}
    </div>
  );
};

export default Item;
