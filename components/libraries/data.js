import { FaStar } from "react-icons/fa6";
import { FaRegStar , FaStarHalfAlt } from "react-icons/fa";
import { VscEye } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import { BsBasket3 } from "react-icons/bs";
import Img1 from '@/public/assets/30.jpg'
import Img2 from '@/public/assets/31.jpg'
import Img3 from '@/public/assets/32.jpg'
import Img4 from '@/public/assets/33.jpg'
import Img5 from '@/public/assets/34.jpg'
import Img6 from '@/public/assets/35.jpg'

const  Data = [
  {
    id: 1,
    name: 'Rich Dad Poor Dad',
    fillIcons: <p className="flex">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaRegStar className="text-[#00000033]"/>
     </p>,
    eye: <VscEye />,
    box: <BsBasket3 />,
    heart: <FaRegHeart />,
    owner: 'Misty Figureroa',
    price: "$170.03",
    
    pic: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/35.jpg",
  },
  {
    id: 2,
    name: 'The Story of Success',
    fillIcons: <p className="flex">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStarHalfAlt />
      <FaRegStar className="text-[#00000033]"/>
     </p>,
    eye: <VscEye />,
    box: <BsBasket3 />,
    heart: <FaRegHeart />,
    owner: 'Author Gozales',
    price: "$50.15",
    
    pic: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/34.jpg",
  },
  {
    id: 3,
    name: 'Annie Leibovitz:...',
    fillIcons: <p className="flex">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaRegStar className="text-[#00000033]"/>
     </p>,
    eye: <VscEye />,
    box: <BsBasket3 />,
    heart: <FaRegHeart />,
    owner: 'Dana Chambers',
    price: "$316.15",
    
    pic: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/33.jpg",
  },
  {
    id: 4,
    name: 'My Dearest Darkest',
    fillIcons: <p className="flex">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStarHalfAlt />
      <FaRegStar className="text-[#00000033]"/>
     </p>,
    eye: <VscEye />,
    box: <BsBasket3 />,
    heart: <FaRegHeart />,
    owner: 'Enrique Wallance',
    price: "$914.53",
    
    pic: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/32.jpg",
  },
  {
    id: 5,
    name: 'House of Sky and Breath',
    fillIcons: <p className="flex">
      <FaStar /> 
      <FaStar />
      <FaStar />
      <FaStarHalfAlt />
      <FaRegStar className="text-[#00000033]"/>
     </p>,
    percent: <span className='bg-[#FA8C17] w-[50px] h-[50px] rounded-full flex items-center justify-center absolute top-[10px] left-[20px]'>-16%</span>,
    eye: <VscEye />,
    box: <BsBasket3 />,
    heart: <FaRegHeart />,
    owner: 'Ernesto Wade',
    price: "$72.99",
    discount: '$86.99',
    pic: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/31.jpg",
  },
  {
    id: 6,
    name: 'Surrounded by Idiots',
    fillIcons: <p className="flex">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaRegStar className="text-[#00000033]"/>
     </p>,
    eye: <VscEye />,
    box: <BsBasket3 />,
    heart: <FaRegHeart />,
    owner: 'Georgia Ramirez',
    price: "$825.85",
    
    pic: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/30.jpg",
  },
 ]

export default Data;