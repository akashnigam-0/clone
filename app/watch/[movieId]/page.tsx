'use client';

import { useParams, useRouter } from 'next/navigation';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { Movie } from '@/types';
import useMousePosition from '@/hooks/useMousePosition';
import useMovie from '@/hooks/useMovie';

const Watch = () => {
  const { movieId } = useParams();
  const router = useRouter();
  const mouseMoving = useMousePosition();

  const { movie }: { movie: Movie } = useMovie(movieId);

  if (!movie) {
    return null;
  }

  return (
    <div className='h-screen w-screen bg-black group'>
      <nav
        className={`fixed w-full p-4 z-10 flex flex-row items-center gap-8 
        bg-black bg-opacity-70 transition duration-300 ease-in 
        ${mouseMoving ? 'opacity-100' : 'opacity-0'}`}
      >
        <AiOutlineArrowLeft
          className='text-white cursor-pointer'
          size={40}
          onClick={() => router.push('/')}
        />
        <p className='text-white text-xl md:text-3xl font-bold'>
          <span className='font-light'>Watching: </span>
          {movie.title}
        </p>
      </nav>
      <video src={movie.videoUrl} className='h-full w-full' autoPlay controls />
    </div>
  );
};

export default Watch;
