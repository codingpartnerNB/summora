import { getPriceIdForActiveUser } from '@/lib/user';
import { pricingPlans } from '@/utils/constants';
import { currentUser } from '@clerk/nextjs/server'
import { Crown } from 'lucide-react'
import React from 'react'
import { Badge } from '@/components/ui/badge';

const PlanBadge = async() => {
    const user = await currentUser();
    if(!user?.id) return null;
    const email = user?.emailAddresses?.[0]?.emailAddress;
    let priceId: string | null = null;
    if(email){
        priceId = await getPriceIdForActiveUser(email);
    }

    let planName = 'Buy a plan';
    const plan = pricingPlans.find((plan)=>plan.priceId === priceId);
    if(plan){
        planName = plan.name;
    }
  return (
    <Badge variant="outline" className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs sm:text-sm font-medium border border-amber-200">
        <Crown className="w-3 h-3 sm:w-4 sm:h-4" />
        <span>{planName}</span>
    </Badge>
  )
}

export default PlanBadge
