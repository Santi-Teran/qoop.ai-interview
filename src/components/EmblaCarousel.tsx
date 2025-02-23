import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  email: string;
  body: string;
}

type PropType = {
  slides: Testimonial[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="embla__slide flex items-stretch"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: testimonial.id * 0.05 }}
            >
              <div className="flex flex-col h-full min-h-[250px] p-6 bg-light-background dark:bg-dark-background border dark:border-light-textSecondary border-dark-textSecondary rounded-2xl shadow-md">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-light-primary dark:bg-dark-primary rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.email.charAt(0).toUpperCase()}
                    </div>
                    <h3 className="text-lg font-semibold text-light-textPrimary dark:text-dark-textPrimary">
                      {testimonial.name.split(" ")[0]}
                    </h3>
                  </div>
                  <Quote className="w-20 h-20 text-light-primary dark:text-dark-primary" />
                </div>
                <p className="text-light-textSecondary dark:text-dark-textSecondary flex-grow">
                  {testimonial.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-center my-5">
        <div className="flex gap-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
