const Descriptions = ({ title, content }) => (
  <div className="flex ">
    <div className="font-medium">{title}</div>
    <div className="text-gray-500">: {content}</div>
  </div>
);

export default Descriptions;
