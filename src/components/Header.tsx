import Link from "next/link"
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";

export default function Header() {
  return (

    <header className=" w-full h-{60px} flex justify-between items-center m-5">
        <div>
            <h1 className="text-xl sm:text-3xl font-bold">SHOP.CO</h1>
        </div>
        <ul>
            <li className="space-x-5">
                <Link href={""}>Shop</Link>
                <Link href={""}>On Sale</Link>
                <Link href={""}>New Arrivals</Link>
                <Link href={""}>Brands</Link>
            </li>
        </ul>
        <div className="flex justify-start items-center w-[330px] h-[40px] rounded-[62px] bg-[#F0F0F0] ">
        <CiSearch className="text-xl ml-10"/>
        <input placeholder="search items..." className="w-full ml-2 outline-none h-full rounded-[62px] bg-[#F0F0F0] "></input>
        </div>
        <div className="flex items-center">
        <CiShoppingCart />
        <IoMdContact />
        </div>
    </header>
  );
}