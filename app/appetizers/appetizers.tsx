import Link from 'next/link';

export default function Appetizers(){
  return (
    <div>
      <h1>Appetizers</h1>
      <ul>
        <li>Bruschetta</li>
        <li>Stuffed Mushrooms</li>
        <li>Caprese Salad</li>
        <li>Spinach Artichoke Dip</li>
      </ul>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

