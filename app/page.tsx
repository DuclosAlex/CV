

import Header from '@/components/Header/Header'
import Presentation from '@/components/Presentation/Presentation'
import Projects from '@/components/Projects/Projects';
import Skills from '@/components/Skills/Skills'

export default function Home() {

  return (
    <main className='h-full'>
      <Header />
      <Presentation />
      <Projects />
      <Skills />
    </main>
  )
}
