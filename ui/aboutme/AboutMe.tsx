import react from 'react';
import Image from 'next/image';
import { FileTabCard } from './FileTabCard';

export function AboutMe() {
    return (
        <section className='flex flex-col gap-6 sm:flex-row px-3'>
            <div>
                <Image className='rounded-[20px]' alt="about-me-image" src="https://placehold.co/480x500/png" width={480} height={500}/>
            </div>
            <FileTabCard />
        </section>
    )
}