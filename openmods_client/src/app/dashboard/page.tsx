import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="text-white bg-[hsl(240,5.9%,10%)] h-screen w-full flex justify-center items-center">
      <div className='flex flex-col items-center space-y-1'>

      <p>You have no active agents</p>
      <Button asChild size='lg' className="bg-white text-black">
        <Link href='/dashboard/createagents'>Create</Link>
      </Button>
      </div>
    </div>
  )
}

export default page