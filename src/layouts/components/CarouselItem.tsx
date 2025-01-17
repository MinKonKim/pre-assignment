interface CarouselItemProps {
  title: string;
  description: string;
  imageSrc?: string;
}

const CarouselItem = ({ title, description, imageSrc }: CarouselItemProps) => {
  return (
    <div className="flex flex-col items-center p-5 mb-3 w-full h-full">
      {imageSrc && (
        <img
          src={imageSrc}
          className="w-1/2 h-auto object-contain mb-5 filter invert"
        />
      )}
      <h2 className="text-4xl font-bold mb-4 text-white">{title}</h2>
      <p className="text-lg text-center text-white">{description}</p>
    </div>
  );
};

export default CarouselItem;
