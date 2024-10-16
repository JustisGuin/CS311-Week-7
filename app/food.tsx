type FoodItemProps = {
    name: string;
  };

export default function FoodItem({ name }: FoodItemProps) {  
    return <li>{name}</li>;
  }