import Wrapper from "@/components/Wrapper"
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import WishlistCard from "@/components/WishlistCard";

const Wishlist = () => {
    const { wishItems } = useSelector((state) => state.cart);
    return (

        <Wrapper>
            {wishItems.length > 0 && (
                <>
                    {/* Heading start */}
                    <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-12">
                        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                            Wishlist
                        </div>
                    </div>
                    {/* Heading end */}

                    {/* Wishlist start     */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                        {wishItems.map((item) => (
                            <WishlistCard key={item?.id} data={item} />
                        ))}
                    </div>
                    {/* wishlist end */}
                </>
            )}

            {/* This is empty screen */}
            {wishItems.length < 1 && (
                <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-26">
                    <Image
                        src="/empty-cart.jpg"
                        width={300}
                        height={300}
                        className="w-[300px] md:w-[400px]"
                    />
                    <span className="text-xl font-bold">
                        Your Wishlist is empty
                    </span>

                    <Link
                        href="/"
                        className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                    >
                        Continue Shopping
                    </Link>
                </div>
            )}
        </Wrapper>
    );
};

export default Wishlist;
