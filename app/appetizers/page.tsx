import Link from 'next/link';



export default function Appetizers(){
  return (
    <div>
      <h1>Appetizers</h1>
      <ul>
        <li>Beans with moldy toast</li>
        <li>Just beans.</li>
        <li>Day old turkey</li>
      </ul>
      <Link href="/">Back to Home</Link>
    </div>
  );
};



