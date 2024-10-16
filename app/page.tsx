import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to our CAFE, where we serve the worst food</h1>
      <p>
        <Link href="/appetizers" className='link'>Appetizers</Link>
      </p>
      <p>
        <Link href="/entrees">Entrees</Link>
      </p>
    </div>
  );
}

