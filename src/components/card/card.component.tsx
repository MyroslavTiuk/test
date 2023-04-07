import { ICard } from '../../types/types';

interface CardProps {
  item: ICard;
}

export const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <li className="flex flex-col rounded-lg bg-white px-[30px] py-5 shadow-box duration-100 ease-in-out hover:scale-105 hover:shadow-box-active">
      <p className="overflow-hidden text-ellipsis whitespace-nowrap font-medium">{item.title}</p>
      <hr className="my-[15px] text-light-grey" />
      <h2 className="font- text-3xl font-semibold leading-[22px]">LOGO</h2>

      <p className="text-overflow-4-lines mb-[30px] mt-[20px]">{item.body}</p>

      <button className="mt-auto h-8 rounded-sm bg-grey px-6 text-center text-white duration-100 ease-in-out hover:bg-[#7A7A7A] hover:bg-grey/80">
        Read more
      </button>
    </li>
  );
};
