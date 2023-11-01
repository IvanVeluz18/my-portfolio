type Props = {
    name: string;
    description?: string;
    image: string;
    link?: string;
    icon?: string;
  };
  
  const Class = ({ name, description, image, link, icon }: Props) => {
    const overlayStyles = `p-5 absolute z-30 flex
    h-[380px] w-[450px] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90`;
  
    return (
      <li className="relative mx-5 inline-block h-[380px] w-[450px]">
        <div className={overlayStyles}>
          <p className="text-2xl">{name}</p>
          <p className="mt-5">{description}</p>
          
          <a href={link} target="blank">
            <input type="button" value="Project Link" className="mt-5 border-gray-100 rounded-full bg-secondary-500 px-8 py-3 transition duration-300 hover:text-white" />
            
          </a>
        </div>
        <img alt={`${image}`} src={image} />
      </li>
    );
  };
  
  export default Class;