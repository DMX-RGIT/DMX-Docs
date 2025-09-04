import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from "@/components/ui/slider";
import { cn } from "@/lib/utils";

// ref: https://motion-primitives.com/docs/carousel#component-api

interface CarouselSpacingProps {
  slides: string[];
  video?: boolean;
  slidesPerScreen?: string;
}

export function Slider({
  slides,
  video = false,
  slidesPerScreen,
}: CarouselSpacingProps) {
  return (
    <div className="relative w-full px-4 pb-16">
      <Carousel>
        <CarouselContent className="-ml-4">
          {slides.map((src, index) => (
            <CarouselItem
              key={index}
              className={cn(`basis-1/${slidesPerScreen ?? "1"} pl-4`)}
            >
              <div className="relative flex aspect-auto items-center justify-center overflow-hidden border border-zinc-200 dark:border-zinc-800 rounded-xl">
                {video ? (
                  <video
                    className="object-cover mt-0 mb-0 rounded-xl"
                    src={src}
                    autoPlay
                    loop
                    muted
                  />
                ) : (
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="object-cover mt-0 mb-0"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation
          className="absolute -bottom-20 left-auto top-auto w-full justify-end gap-2"
          classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
          alwaysShow
        />
      </Carousel>
    </div>
  );
}
