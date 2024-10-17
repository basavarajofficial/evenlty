import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function Home() {

  return (
    <>

    <section className="bg-gray-100 dark:bg-black bg-contain md:px-10 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
            <div className="flex flex-col  flex-wrap justify-center gap-8">
                <h1 className="font-bold text-[40px] leading-[48px] lg:text-[48px] lg:leading-[60px] xl:text-[58px] xl:leading-[74px]">Host, Connect, Celebrate: Your Events, Our Platform!</h1>
                <p className="font-normal text-[24px] leading-[36px] md:p-regular-24">Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.</p>
                <Button size="lg" asChild className="button rounded-full w-full sm:w-fit">
                <Link href="#events">
                    Explore Now
                </Link>
                </Button>
            </div>
                <Image src='/assets/images/hero.png' alt="hero" width={1000} height={1000}  className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]" />
        </div>
    </section>
    <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="font-bold text-[24px] lg:text-[32px] xl:text-[40px]">Find Your <br /> Favorite Event </h2>

        <div className="w-full flex flex-col gap-5 md:flex-row">
            <div>Search</div>
            <div>Category</div>
        </div>


    </section>
    </>
  );
}


export default Home;
