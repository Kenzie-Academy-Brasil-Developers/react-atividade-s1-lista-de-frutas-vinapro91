const FruitList = ({ fruits }) => {
  const fruitsName = fruits.map((item) => {
    return <li>{item.name}</li>;
  });
  return <ul className="fruitlist">{fruitsName}</ul>;
};
export default FruitList;
