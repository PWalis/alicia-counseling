import react from 'react';
import Image from 'next/image';
import { FileTabCard } from './FileTabCard';

export function AboutMe() {
    return (
        <section className='flex flex-col sm:flex-row px-3'>
            <div>
                <Image className='rounded-[20px]' alt="about-me-image" src="https://placehold.co/400x550/png" width={400} height={550}/>
            </div>
            <FileTabCard />
        </section>
    )
}