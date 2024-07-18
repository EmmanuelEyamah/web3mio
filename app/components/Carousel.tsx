import { commonProps } from "@/types/common";
import { Carousel } from "@material-tailwind/react";
import React from "react";

interface AutoPlayProps {
  imagesUrl: string[];
}

const AutoPlay: React.FC<AutoPlayProps> = ({ imagesUrl }) => {
  return (
    <div className="w-[70%] h-[40%]">
      <Carousel
        transition={{ duration: 2, delay: 2 }}
        autoplay={true}
        loop
        {...commonProps}
      >
        {imagesUrl.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AutoPlay;
