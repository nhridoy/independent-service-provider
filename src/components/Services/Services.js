import React from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = React.useState([]);
  React.useEffect(() => {
    fetch("packageList.json")
      .then((response) => response.json())
      .then((json) => setServices(json));
  }, []);
  return (
    <div className="p-4">
      <h1 className="text-5xl font-semibold text-center m-4 mb-8">
        Our Services
      </h1>
      <div className="grid md:grid-cols-3 gap-4">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
