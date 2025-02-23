import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = ComponentPropsWithRef<"button">;

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="bg-light-background dark:bg-dark-background border dark:border-light-textSecondary border-dark-textSecondary text-dark-textSecondary dark:text-light-textSecondary hover:text-light-textPrimary hover:border-light-textPrimary transition-all hover:dark:text-dark-textPrimary hover:dark:border-dark-textPrimary p-2 rounded-lg"
      type="button"
      {...restProps}
    >
      <ArrowLeft />
      {children}
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="bg-light-background dark:bg-dark-background border dark:border-light-textSecondary border-dark-textSecondary text-dark-textSecondary dark:text-light-textSecondary hover:text-light-textPrimary hover:border-light-textPrimary transition-all hover:dark:text-dark-textPrimary hover:dark:border-dark-textPrimary p-2 rounded-lg"
      type="button"
      {...restProps}
    >
      <ArrowRight />
      {children}
    </button>
  );
};
