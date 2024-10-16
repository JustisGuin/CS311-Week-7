'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';


//https://www.shecodes.io/athena?tag=HTTP#:~:text=If%20the%20error%20is%20an%20AxiosError%2C%20we,if%20it%20has%20a%20request%20property%20to 
export default function Entrees() {
  const [entrees, setEntrees] =  useState<string[]>([]); //This tells TypeScript that entrees is an array of strings

  useEffect(() => {
    const fetchData = async () => {
     
        const response = await fetch('entrees.txt'); 
        const text = await response.text();
        const entreesArray = text.split('\n').filter(String).map(String); // Split into lines, remove empty
        setEntrees(entreesArray);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Entrees</h2>
      <ul>
        {entrees.map((entree) => (
        <li key={entree}>{entree}</li>))}

</ul>
      <Link href="/">Back to Home</Link>
    </div>
  );
}

