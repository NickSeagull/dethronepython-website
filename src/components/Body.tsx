import React from 'react';
import { Link } from 'react-router-dom';

const Body: React.FC = () => {
  return (
    <div className='mt-40 mb-40 md:max-w-xl max-w-xs mx-auto'>
      <span>Python uruk-hai’s have conquered the AI world. They got all the ML libraries, and we’re just one more hit away from entering a new age of darkness where Python rules. We are calling all the Last Alliance of Elves an Coders to join this battle to dethrone Python once and for all!</span>
      <img src='uruk_hai_meme.png' alt='python-uruk-hai' className='mt-10 mb-20 w-full'/>
      <span>AI is the next big thing in technology! Are we just going to let it fall on the hands of the slowest programming language on earth?</span>
      <img src='slow_meme.png' alt='slow-python' className='mt-10 mb-20 w-full'/>
      <span>If we let fear dominate us, legions of junior developers will be raised in a world dominated by AI in which Python is the go-to language for everything. We’ll find ourselves rewriting every piece of software as Django microservices, the arcane arts of compiler crafting will be forgotten, and we’ll enter the dark ages of a world without compilers, in which every change triggers thousands of unexpected errors all over the code.</span>
      <img src='mordor_meme.png' alt='python-mordor' className='mt-10 mb-20 w-full'/>
      <p className='mb-10'>Help us build solid open-source libraries and tools for the world that help developers build useful AI-driven features in a solid, reliable and scalable way.</p>
      <p className='mb-10'>There’s space for all developers who want to participate in the next wave of technology, making the most of their knowledge.</p>
      <p className='mb-10'>Join our cause now! <Link to='https://discord.gg/KWjVbVd6' target='blank' className='hover:underline hover:font-bold underline'>Join our Discord</Link> and start participating in the discussion.</p>
      <p className='mb-10'>Become a “dethroner”, and songs will be sung in your name for generations to come! </p>
      <p className='mb-10'>As <Link to='https://twitter.com/pacoworks' target='blank' className='hover:underline hover:font-bold underline'>@pacoworks</Link> shared in TwitterX the other day, let’s “Yeet python into the sun”!</p>

    </div>
  );
};

export default Body;
