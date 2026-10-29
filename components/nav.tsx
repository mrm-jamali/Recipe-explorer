import Link from "next/link";

import { PiChefHatFill } from "react-icons/pi";

function Nav() {
  return (
    <div className="w-full border border-bottom-2 flex justiy-center bg-red-300 ">
      <div className=" flex ">
        <PiChefHatFill size={52} />
        <h2 className=""> Recipe Expolrer</h2>
      </div>
      <div  className="mr-2 gap-5 ">
        <Link href="/">Home</Link>
        <Link href="/Recipe">Recepies</Link>
        <Link href="/About">About</Link>
      </div>
      <div>
     search
      </div>
    </div>
  );
}

export default Nav;
