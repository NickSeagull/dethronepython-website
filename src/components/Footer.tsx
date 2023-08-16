import React from 'react';
import LinkBox from './LinkBox';
import ArrowRightIcon from '../icons/arrow_right_icon.svg';
import PlusIcon from '../icons/plus_icon_reverse.svg';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <div>
      <div className='mt-40 md:max-w-4xl max-w-md mx-auto text-center'>
        <h1 className='p-12 pb-5 text-3xl font-silkscreen'>Featured projects</h1>
        <span className='p-1'>These projects have officially joined the cause:</span>
        <div className='mt-10'>
          <LinkBox to='https://github.com/theam/eLLMental' backgroundColor='black' textColor='white' icon={ArrowRightIcon}>
            <p className='text-start font-bold'>eLLMental</p>
            <p>An open-source library for Java</p>
          </LinkBox>

          <div className="relative -mt-2">
            <LinkBox to='https://github.com/dethronepython/website' backgroundColor='white' textColor='black' icon={PlusIcon}>
              <p className='text-start'>
                <span className='font-bold'>Want to add your JVM AI project?</span> Find us on GitHub, send a PR with your project description, and we'll vote for it!
              </p>
            </LinkBox>
          </div>
        </div>
      </div>
      <div className="relative text-center">
        <img className='w-full' src='hell_background.png' alt='python-hell-2'/>
        <span className='absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1 hover:font-bold'>
          Signed: <Link target='_blank' className='underline' to='https://theagilemonkeys.com'>The Agile Monkeys.</Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;