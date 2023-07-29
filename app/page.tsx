'use client';

import Header from '@/components/Header/Header'
import Presentation from '@/components/Presentation/Presentation'
import Skills from '@/components/Skills/Skills'

import { useInView } from 'react-intersection-observer';

export default function Home() {

  const { ref, inView: parentInView} = useInView({
    triggerOnce: true
  });

  return (
    <main className='h-full' ref={ref}>
      <Header />
      <Presentation />
      <Skills parentInView={parentInView} />
    </main>
  )
}
