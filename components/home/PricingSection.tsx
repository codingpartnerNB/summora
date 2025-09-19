import { cn } from '@/lib/utils';
import { containerVariants, itemVariants, pricingPlans } from '@/utils/constants';
import { ArrowRight, CheckIcon, Star, Zap, Crown } from 'lucide-react';
import Link from 'next/link'
import React from 'react'
import { MotionDiv, MotionSection } from '@/components/common/MotionWrapper';

type PriceType = {
    id: string;
    name: string;
    price: number;
    features: string[];
    description: string;
    paymentLink: string;
}

const listVariants = {
  hidden: {opacity: 0, x: -20},
  visible: {
    opacity: 1, x: 0,
    transition: {type: 'spring' as const, 
      damping: 20, stiffness: 100}
  }
}


const PricingSection = () => {
  return (
    <MotionSection variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once: true, margin: '-100px'}} className='relative overflow-visible py-16 lg:py-24 bg-transparent' id="pricing">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-r from-rose-50/30 to-pink-50/30"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl"></div>
      
      <div className='py-12 lg:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12 relative z-10'>
          <MotionDiv variants={itemVariants} className='flex flex-col items-center justify-center w-full pb-12 text-center'>
              <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-sm font-medium mb-4">
                  <Zap className="w-4 h-4 mr-2" />
                  Simple Pricing
              </div>
              <h2 className='font-bold text-3xl lg:text-4xl text-gray-900 mb-4'>Choose Your Plan</h2>
              <p className='text-gray-600 max-w-xl'>Select the perfect plan for your needs. No hidden fees, cancel anytime.</p>
          </MotionDiv>
          <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-6">
              {pricingPlans.map((plan)=>(
                  <PricingCard key={plan.id} {...plan} />
              ))}
          </div>
      </div>
    </MotionSection>
  )
}

const PricingCard = ({ name, price, description, features, id, paymentLink }: PriceType) => {
  const isPro = id === 'pro';

  return (
    <MotionDiv variants={listVariants} whileHover={{scale: 1.02}}
      className={cn(
        'relative w-full max-w-md transition-transform duration-300 ease-in-out',
        'group'
      )}
    >
      {/* Pro badge */}
      {isPro && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div
            className={cn(
              'flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-white font-bold text-sm shadow-lg',
              'transition-transform duration-300 ease-in-out group-hover:scale-105'
            )}
          >
            <Crown className="w-4 h-4 mr-1" />
            Most Popular
          </div>
        </div>
      )}

      <div
        className={cn(
          'relative flex flex-col h-full gap-6 z-10 p-8 rounded-3xl bg-white shadow-lg border border-gray-100',
          'transition-all duration-300 ease-in-out',
          isPro
            ? 'border-rose-200/50 ring-2 ring-rose-100 group-hover:ring-rose-200 group-hover:border-rose-300/50'
            : 'border-gray-200/70 group-hover:border-rose-100/70 group-hover:ring-1 group-hover:ring-rose-50',
          'group-hover:shadow-2xl group-hover:-translate-y-1 group-hover:scale-102'
        )}
      >
        {/* Shine effect on hover */}
        <div
          className={cn(
            'absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent',
            'opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out'
          )}
        ></div>

        {/* Header */}
        <MotionDiv variants={listVariants} className="flex flex-col gap-2 relative z-10">
          <div className="flex items-center gap-2">
            <div
              className={cn(
                'p-2 rounded-lg transition-transform duration-300 ease-in-out',
                isPro ? 'bg-amber-100 group-hover:bg-amber-200' : 'bg-rose-100 group-hover:bg-rose-200'
              )}
            >
              {isPro ? (
                <Crown
                  className={cn(
                    'w-6 h-6 transition-transform duration-300 ease-in-out',
                    isPro ? 'text-amber-600' : 'text-rose-600'
                  )}
                />
              ) : (
                <Star
                  className={cn(
                    'w-6 h-6 transition-transform duration-300 ease-in-out',
                    isPro ? 'text-amber-600' : 'text-rose-600'
                  )}
                />
              )}
            </div>
            <p className="text-2xl font-bold text-gray-900">{name}</p>
          </div>
          <p className="text-gray-600">{description}</p>
        </MotionDiv>

        {/* Price */}
        <MotionDiv variants={listVariants} className="flex items-end gap-2 relative z-10">
          <p className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            ₹{price}
          </p>
          <div className="flex flex-col justify-end mb-2">
            <p className="text-sm text-gray-500">per month</p>
          </div>
        </MotionDiv>

        {/* Features */}
        <MotionDiv variants={listVariants} className="space-y-3 flex-1 relative z-10">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 group/feature">
              <div
                className={cn(
                  'flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 transition-transform duration-300 ease-in-out',
                  isPro
                    ? 'bg-amber-100 group-hover/feature:bg-amber-200'
                    : 'bg-rose-100 group-hover/feature:bg-rose-200'
                )}
              >
                <CheckIcon
                  size={16}
                  className={cn(
                    'transition-transform duration-300 ease-in-out',
                    isPro ? 'text-amber-600' : 'text-rose-600'
                  )}
                />
              </div>
              <span
                className={cn(
                  'text-gray-700 transition-all duration-300 ease-in-out',
                  'group-hover/feature:text-gray-900 group-hover/feature:translate-x-1'
                )}
              >
                {feature}
              </span>
            </div>
          ))}
        </MotionDiv>

        <MotionDiv variants={listVariants} className="pt-4 relative z-10">
          <Link
            href={paymentLink}
            className={cn(
              'relative w-full rounded-xl flex items-center justify-center gap-2 py-4 font-semibold',
              'transition-all duration-500 ease-out overflow-hidden group/btn',
              isPro
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg hover:from-amber-600 hover:to-amber-700'
                : 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg hover:from-rose-600 hover:to-rose-700',
              'hover:shadow-xl hover:gap-3'
            )}
          >
            {/* Shine effect */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover/btn:translate-x-full transition-transform duration-900 ease-in-out"></span>
            
            {/* Subtle inner glow */}
            <span className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/10 to-transparent opacity-60"></span>
            
            {/* Button */}
            <span className="relative flex items-center">
              Get Started
              <ArrowRight size={18} className="ml-2 transition-transform duration-300 ease-out group-hover/btn:translate-x-1" />
            </span>
          </Link>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
};

export default PricingSection