import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetail from "./ServiceDetail";

const ServiceDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  //   console.log(typeof id);
  const detailId = parseInt(id);
  const loadDetails = useLoaderData();
  //   console.log(loadDetails);

  useEffect(() => {
    if (loadDetails && loadDetails.length > 0) {
      const findDetails = loadDetails.find(
        (serviceDetail) => serviceDetail.id === detailId
      );
      setDetails(findDetails);
    } else {
      setDetails(null);
    }
  }, [detailId, loadDetails]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ServiceDetail details={details}></ServiceDetail>
    </div>
  );
};

export default ServiceDetails;
