import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from "@/components/ui/slider";

// ref: https://motion-primitives.com/docs/carousel#component-api

interface CarouselSpacingProps {
  slides: string[];
  video?: boolean;
  slidesPerScreen?: number;
}

export function Slider({
  slides,
  video = false,
  slidesPerScreen,
}: CarouselSpacingProps) {
  // for some reason putting slidesPerScreen directly in className dosent work, due to tailwind ignores runtime variables
  function getBasisClass(slidesPerScreen?: number): string {
    const map: Record<number, string> = {
      1: "basis-1/1 pl-4",
      2: "basis-1/2 pl-4",
      3: "basis-1/3 pl-4",
      4: "basis-1/4 pl-4",
      5: "basis-1/5 pl-4",
      6: "basis-1/6 pl-4",
    };
    return map[slidesPerScreen ?? 1] ?? "basis-1/1 pl-4";
  }
  const className = getBasisClass(slidesPerScreen);

  return (
    <div className="relative w-full px-4 pb-16">
      <Carousel>
        <CarouselContent className="-ml-4">
          {slides.map((src, index) => (
            <CarouselItem key={index} className={className}>
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
