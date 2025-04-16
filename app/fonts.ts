import { Urbanist, Train_One } from 'next/font/google'

export const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const trainOne = Train_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-train-one',
}) 