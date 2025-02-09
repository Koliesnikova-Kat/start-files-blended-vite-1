import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const icons = [FaRegThumbsUp, MdPeople, MdOutlineProductionQuantityLimits, GiTreeDoor];

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h3 className={style.title}>{title}</h3>}
      <ul className={style.list}>
        {stats.map((statItem, index) => (
          <li className={style.item} key={statItem.id}>
            <StatisticsItem
              icon={icons[index]}
              title={statItem.title}
              total={statItem.total}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
