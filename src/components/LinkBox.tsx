import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface LinkBoxProps {
  backgroundColor: 'black' | 'white';
  textColor: 'black' | 'white';
  icon: string;
  to: string;
  children: ReactNode;
}

const LinkBox: React.FC<LinkBoxProps> = ({ backgroundColor, textColor, icon, to, children }) => {
  const backgroundColorClass = backgroundColor === 'black' ? 'bg-black' : 'bg-white';
  const textColorClass = textColor === 'black' ? 'text-black' : 'text-white';
  const borderColorClass = textColor === 'black' ? 'border-black' : 'border-white';

  return (
    <Link to={to} target='blank'>
      <div className={`hover:font-bold w-3/4 text-left ${backgroundColorClass} ${textColorClass} ${borderColorClass} m-3 p-5 inline-flex items-center border-2 rounded-lg`}>
        {icon && <img src={icon} alt="icon" className="mr-3" />}
        <span>{children}</span>
      </div>
    </Link>
  );
};

export default LinkBox;