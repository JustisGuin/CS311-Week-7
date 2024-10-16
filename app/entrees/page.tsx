import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Entrees(){
  const [entreesText, setEntreesText] = useState('');

  //https://www.shecodes.io/athena?tag=HTTP#:~:text=If%20the%20error%20is%20an%20AxiosError%2C%20we,if%20it%20has%20a%20request%20property%20to 
  useEffect(() => {
    const fetchEntrees = async () => {
      const response = await fetch('app/public/entrees.txt');
      const text = await response.text();
      setEntreesText(text);
    };
    
    fetchEntrees();
  }, []);

  return (
    <div>
      <h1>Entrees</h1>
      
      <p>{entreesText}</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

