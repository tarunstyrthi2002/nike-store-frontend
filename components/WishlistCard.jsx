import { removeFromWishlist } from "@/store/cartSlice";
import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";


const WishlistCard = ({ data: { attributes: p, id } }) => {

    const dispatch = useDispatch();

    return (
        <Link
            href={`/product/${p.slug}`}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        >
            <Image
                width={400}
                height={400}
                src={p.thumbnail.data.attributes.url}
                alt={p.name}
            />
            <div className="p-4 text-black/[0.9]">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">{p.name}</h2>
                <RiDeleteBin6Line
                        onClick={() =>
                            dispatch(removeFromWishlist({ id: id }))
                        }
                        className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
                />
                </div>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        &#8377;{p.price}
                    </p>

                    {p.original_price && (
                        <>
                            <p className="text-base  font-medium line-through">
                                &#8377;{p.original_price}
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                                {getDiscountedPricePercentage(
                                    p.original_price,
                                    p.price
                                )}
                                % off
                            </p>
                        </>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default WishlistCard;
