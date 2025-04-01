import { Quantum } from 'ldrs/react'
import 'ldrs/react/Quantum.css'

export const Loader = () => (
  <section className='flex items-center justify-center w-full h-full'>
    <Quantum
      size="45"
      speed="1.75"
      color="white"
    />
  </section>
)