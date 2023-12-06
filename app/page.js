import Owner from "./component/home/Owner";
import Product from "./component/home/Product";
import Testimoni from "./component/home/Testimoni";
import HeroHome from "./component/home/HeroHome";

export default function Home() {
  return (
    <div className="pt-[-20]">
      <HeroHome />
      <Owner />
      <Product />
      <Testimoni />
    </div>
  );
}
