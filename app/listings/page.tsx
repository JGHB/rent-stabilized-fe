import Image from 'next/image'
import StickyHeader from '../components/StickyHeader'
import key from  '../../public/key.svg'
import Link from 'next/link';

const apartmentsTestData = {
  "listings": [
    {"neighborhood": "Manhattan", "bedrooms": "1", "address": "417 East 78th Ave #3A", "price": 1895},
    {"neighborhood": "Manhattan", "bedrooms": "1", "address": "456 Madison Ave #12A", "price": 2450},
    {"neighborhood": "Manhattan", "bedrooms": "1", "address": "101 Park Ave #5B", "price": 1300},
    {"neighborhood": "Manhattan", "bedrooms": "1", "address": "330 Broadway #8C", "price": 3300},
    {"neighborhood": "Manhattan", "bedrooms": "2", "address": "145 5th Ave #14D", "price": 2500},
    {"neighborhood": "Manhattan", "bedrooms": "2", "address": "621 Lexington Ave #7E", "price": 1800},
    {"neighborhood": "Manhattan", "bedrooms": "2", "address": "789 7th Ave #6F", "price": 1790},
    {"neighborhood": "Manhattan", "bedrooms": "2", "address": "434 West 23rd St #3G", "price": 2950},
    {"neighborhood": "Manhattan", "bedrooms": "2", "address": "558 East 33rd St #9H", "price": 2900},
    {"neighborhood": "Manhattan", "bedrooms": "2", "address": "891 1st Ave #2I", "price": 1900},
    {"neighborhood": "Manhattan", "bedrooms": "3", "address": "365 Columbus Ave #15J", "price": 2295},
    {"neighborhood": "Manhattan", "bedrooms": "3", "address": "1482 10th Ave #10K", "price": 1750},
    {"neighborhood": "Brooklyn", "bedrooms": "1", "address": "621 Brooklyn Bridge Ln #7E", "price": 1450},
    {"neighborhood": "Brooklyn", "bedrooms": "1", "address": "101 Bedford Ave #4A", "price": 1900},
    {"neighborhood": "Brooklyn", "bedrooms": "1", "address": "225 DUMBO St #3B", "price": 1745},
    {"neighborhood": "Brooklyn", "bedrooms": "1", "address": "450 Park Slope Ave #6D", "price": 2100},
    {"neighborhood": "Brooklyn", "bedrooms": "1", "address": "782 Greenpoint Ave #8F", "price": 2400},
    {"neighborhood": "Brooklyn", "bedrooms": "1", "address": "435 Bay Ridge Pkwy #5G", "price": 1800},
    {"neighborhood": "Brooklyn", "bedrooms": "2", "address": "559 Red Hook Ln #9H", "price": 1255},
    {"neighborhood": "Brooklyn", "bedrooms": "2", "address": "894 Clinton Hill Rd #4I", "price": 2050},
    {"neighborhood": "Brooklyn", "bedrooms": "2", "address": "367 Flatbush Ave #3J", "price": 2260},
    {"neighborhood": "Brooklyn", "bedrooms": "2", "address": "486 Coney Island Ave #2K", "price": 1470},
    {"neighborhood": "Brooklyn", "bedrooms": "2", "address": "295 Prospect Park W #6L", "price": 1800},
    {"neighborhood": "Brooklyn", "bedrooms": "2", "address": "629 Gowanus Canal Rd #7M", "price": 1995},
    {"neighborhood": "Brooklyn", "bedrooms": "2", "address": "760 Brighton Beach Ave", "price": 2700},
    {"neighborhood": "Brooklyn", "bedrooms": "2", "address": "170 Bushwick Ave, Apt 50", "price": 3000},
    {"neighborhood": "Harlem", "bedrooms": "1", "address": "456 Madison Ave #12A", "price": 2450},
    {"neighborhood": "Harlem", "bedrooms": "2", "address": "101 Park Ave #5B", "price": 1300},
    {"neighborhood": "Harlem", "bedrooms": "3", "address": "330 Broadway #8C", "price": 3300},
    {"neighborhood": "Harlem", "bedrooms": "1", "address": "145 5th Ave #14D", "price": 2500},
    {"neighborhood": "Harlem", "bedrooms": "1", "address": "621 Lexington Ave #7E", "price": 1800},
    {"neighborhood": "Harlem", "bedrooms": "2", "address": "789 7th Ave #6F", "price": 1790},
    {"neighborhood": "Harlem", "bedrooms": "3", "address": "434 West 23rd St #3G", "price": 2950},
    {"neighborhood": "Harlem", "bedrooms": "1", "address": "894 Clinton Hill Rd #4I", "price": 2050},
    {"neighborhood": "Harlem", "bedrooms": "2", "address": "367 Flatbush Ave #3J", "price": 2260},
    {"neighborhood": "Harlem", "bedrooms": "3", "address": "486 Coney Island Ave #2K", "price": 1470},
    {"neighborhood": "Harlem", "bedrooms": "1", "address": "295 Prospect Park W #6L", "price": 1800},
    {"neighborhood": "Harlem", "bedrooms": "2", "address": "629 Gowanus Canal Rd #7M", "price": 1995},
    {"neighborhood": "Harlem", "bedrooms": "3", "address": "760 Brighton Beach Ave", "price": 2700},
    {"neighborhood": "Harlem", "bedrooms": "1", "address": "170 Bushwick Ave, Apt 50", "price": 3000}
  ]
}


export default function Page() {
  return (
    <div className="">
      {apartmentsTestData.listings.map((listing) => (
        <div key={listing.address} className="flex flex-row items-center">
          <div className='text-n whitespace-nowrap overflow-hidden text-overflow-ellipsis max-w-xs'>{listing.address}</div>
          <div className="border-dotted border-b-2 pt-2.5 border-black flex-grow"/>
          <div>{listing.price}</div>
        </div>
      ))}
    </div>
  )
}