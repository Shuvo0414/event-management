import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/banner";
import Introduction from "../../components/Introduction/Introduction";
import Services from "../../components/Services/Services";

const Home = () => {
  const services = useLoaderData();
  return (
    <div>
      <div>
        <Banner></Banner>
        <Introduction></Introduction>
        <Services services={services}></Services>
      </div>
    </div>
  );
};

export default Home;
