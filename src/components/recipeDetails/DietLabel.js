const DietLabel = ({ recipeDiets, dietName, fallbackLabel }) => {
  const foundDiet = recipeDiets.find((diet) => diet.name === dietName);

  return <span>{foundDiet ? foundDiet.name : fallbackLabel}</span>;
};

export default DietLabel;
