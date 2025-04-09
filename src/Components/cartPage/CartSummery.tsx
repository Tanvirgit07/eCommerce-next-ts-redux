import React, { useEffect, useState } from "react";
import PriceFormate from "../PriceFormate";
import { ProductType } from "../../../type";
import toast from "react-hot-toast";
interface Props {
  cart: ProductType[];
}

const CartSummery = ({ cart }: Props) => {
  const [totalAmt, setTotalAmt] = useState(0);
  const [discountAmt, setDiscount] = useState(0);

  useEffect(() => {
    let amt = 0;
    let discount = 0;

    cart?.map((item) => {
      amt += item?.price * item.quantity!;
      discount += ((item?.price * item.quantity!) / 100) * item.quantity!;
    });
    setTotalAmt(amt);
    setDiscount(discount);
  }, [cart]);

  const handleCheckout = (): void => {
    toast.success("click checkout");
  };
  return (
    <div className="bg-gray-100 rounded-lg px-4 py-6 sm:p-10 lg:col-span-5 mt-10 lg:mt-0">
      <p className="text-2xl">Cart Summery</p>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="text-xl">Sub Total</p>
          <PriceFormate amount={totalAmt} />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="text-xl">Discount</p>
          <PriceFormate amount={discountAmt} />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="text-xl">Payable</p>
          <PriceFormate amount={totalAmt - discountAmt} />
        </div>
      </div>
      
      <div className="">
        <button onClick={handleCheckout} className="w-full bg-blue-500 px-4 py-1 text-center mt-5 text-white cursor-pointer">CheckOut</button>
      </div>
    </div>
  );
};

export default CartSummery;
