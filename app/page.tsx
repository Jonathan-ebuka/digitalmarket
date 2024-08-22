import { buttonVariants, Button } from "@/components/ui/button"
import MaxWidthWrapper from "./components/MaxWidtthWrapper"
import Link from "next/link"
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react"

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    Description:
      "Access your assests quickly and conveniently in your email for download.",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    Description:
      "Experience peace of mind with our 30-day refund guarantee, ensuring your satisfaction with verified assets.",
  },
  {
    name: "For the planet",
    Icon: Leaf,
    Description:
      "Our promise to the Earth: 1% of sales fuels environmental action.",
  },
]
export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Browse our extensive library and find the perfect
            <span className='text-blue-600 '> asset for your vision.</span>
          </h1>

          <p className='mt-6 text-lg max-w-pose text-muted-foreground'>
            BuyFirst: Verified assets, trusted platform, guaranteed quality.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link href='/products' className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant='ghost'>Our quality promise &rarr;</Button>
          </div>
        </div>

        {/* TODO: List products */}
      </MaxWidthWrapper>

      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-col gap-y-12 sm:grid-cols-2 sm:grid-gap-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 '>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'
              >
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-15 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                    {<perk.Icon className='h-12 w-12' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.Description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
