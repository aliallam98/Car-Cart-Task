
const CommonSection = ({ title }:{title:string}) => {
  return (
    <section className="common__section mb-5">
      <div className="container">
        <h1 className="text-white text-center text-4xl">{title}</h1>
      </div>
    </section>
  );
};

export default CommonSection;
