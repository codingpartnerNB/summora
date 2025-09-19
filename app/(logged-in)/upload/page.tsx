import BackgroundGradient from '@/components/common/BackgroundGradient'
import { MotionDiv } from '@/components/common/MotionWrapper'
import UploadForm from '@/components/upload/UploadForm'
import UploadHeader from '@/components/upload/UploadHeader'
import { hasReachedUploadLimit } from '@/lib/user'
import { containerVariants } from '@/utils/constants'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

export const maxDuration = 60;

const page = async() => {
  const user = await currentUser();
  const userId = user?.id;
  if(!userId){
    redirect('/sign-in');
  }
  const { hasReachedLimit } = await hasReachedUploadLimit(userId);
  if(hasReachedLimit){
    redirect('/dashboard');
  }
  return (
    <section className="min-h-screen">
        <BackgroundGradient />
        <MotionDiv variants={containerVariants} initial="hidden" animate="visible" className='mx-auto max-w-7xl px-6 py-16 lg:py-24 lg:px-8'>
            <div className='flex flex-col items-center justify-center gap-6 text-center'>
                <UploadHeader />
                <UploadForm />
            </div>
        </MotionDiv>
    </section>
  )
}

export default page
