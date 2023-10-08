import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/banner";
import Introduction from "../../components/Introduction/Introduction";
import Services from "../../components/Services/Services";
import MakeAnApponintment from "../../components/MakeAnApponintment/MakeAnApponintment";

const Home = () => {
  const services = useLoaderData();
  // console.log(services);

  return (
    <div>
      <div>
        <Banner></Banner>
        <Introduction></Introduction>
        <Services services={services}></Services>
        <MakeAnApponintment></MakeAnApponintment>
      </div>
    </div>
  );
};

export default Home;
