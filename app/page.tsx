import Image from "next/image";
import fiftyoff from "../public/images/banner-55off.png";
import fones from "../public/images/banner-fones.png";
import mouses from "../public/images/banner-mouses.png";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <Image src={fiftyoff} alt="Fifty Off Banner" className="mx-auto w-11/12 h-[150px]"/>
      </div>
      <div className="container mx-auto">
        <Image src={fones} alt="Fones Banner" className="mx-auto w-11/12 h-[150px]"/>
      </div>
      <div className="container mx-auto">
        <Image src={mouses} alt="Mouses Banner" className="mx-auto w-11/12 h-[150px]"/>
      </div>

    </>
  );
}


