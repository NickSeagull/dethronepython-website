import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRightIcon from '../icons/arrow_right_icon.svg';
import PlusIcon from '../icons/plus_icon.svg';

const Intro: React.FC = () => {
  return (
    <div className='mt-6'>
      <nav className="flex justify-evenly">
        <Link to="https://discord.gg/KWjVbVd6" target='blank' className="flex hover:font-bold">
          <img src={ArrowRightIcon} alt="Discord" className="mr-2" />
          <span>Join Discord</span>
        </Link>
        <Link to="https://github.com/dethronepython/website" target='blank' className="flex hover:font-bold">
          <img src={PlusIcon} alt="Project" className="mr-2" />
          <span>Add My Project</span>
        </Link>
      </nav>
      <div className="relative md:flex md:items-end justify-center mt-10">
        <img src="hell_monsters_background.png" alt="Background" className="w-25" />
        <div className="flex justify-center items-center md:absolute md:inset-auto md:bottom-10 ml-4 mr-4">
          <span className="font-silkscreen text-center md:text-4xl text-2xl text-white md:max-w-2xl">   
              We are not saying Python is s***... did we
          </span>
        </div>
      </div>
    </div>
  );
};

export default Intro;