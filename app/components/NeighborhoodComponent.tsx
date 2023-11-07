import React from 'react';

interface Apartment {
  neighborhood: string;
  bedrooms: string;
  address: string;
  price: number;
}

interface NeighborhoodComponentProps {
  name: string;
  apartments: Apartment[];
}

const Neighborhood: React.FC<NeighborhoodComponentProps> = ({ name, apartments }) => {
  return (
    <div className='italic'>
      <h2>{name}</h2>
      {apartments.map((apartment, index) => (
        <div key={index} className="flex flex-row items-center hover:bg-black hover:text-white">
            <div className='italic text-n whitespace-nowrap overflow-hidden text-overflow-ellipsis max-w-xs'>{apartment.address} + {name}</div>
            <div className="border-dotted border-b-2 pt-2.5 border-black flex-grow"/>
            <div>{apartment.price}</div>
        </div>
      ))}
    </div>
  );
};

export default Neighborhood;
