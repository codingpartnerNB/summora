import { isDev } from "./helpers";
import type { Variants } from "motion/react";

export const pricingPlans = [
    {
        id: 'basic',
        name: 'Basic',
        price: 99,
        description: 'Perfect for occasional use',
        features: [
            '5 PDF summaries per month',
            'Standard processing speed',
            'Email support',
        ],
        paymentLink: isDev ? 'https://buy.stripe.com/test_28EeVcgQM8Fp62M84P5sA00':'',
        priceId: isDev ?'price_1S6qw7C9f0XYGPZMpbRYn5Cj':''
    },
    {
        id: 'pro',
        name: 'Pro',
        price: 199,
        description: 'For professionals who need more power.',
        features: [
            'Unlimited PDF summaries',
            'Priority processing',
            '24/7 priority support',
            'Markdown Export',
        ],
        paymentLink: isDev ? 'https://buy.stripe.com/test_14A6oG584dZJgHqfxh5sA01':'',
        priceId: isDev ?'price_1S6qzfC9f0XYGPZM3S9mQTyw':''
    }
]

export const containerVariants: Variants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
}

export const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            damping: 15,
            stiffness: 50,
            duration: 0.8,
        },
    },
}
