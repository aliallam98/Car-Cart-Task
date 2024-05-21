// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Helmet = (props: any) => {
  document.title = "Rent Car Service - " + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
