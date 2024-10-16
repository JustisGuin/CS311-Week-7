import Link from 'next/link';
import FoodItem from '../food';
import PageTitle from '../pageTitle';

export default function Appetizers(){
  return (
    <div>
      <PageTitle text="Appetizers" />
      <ul>
        <FoodItem name="Bruschetta"></FoodItem>
        <FoodItem name="Stuffed Mushrooms"></FoodItem>
        <FoodItem name="Caprese Salad"></FoodItem>
        <FoodItem name="Spinch Arichoke dip"></FoodItem>
      </ul>
      <Link href="/">Back to Home</Link>
    </div>
  );
};



