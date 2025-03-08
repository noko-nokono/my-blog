import Image from 'next/image';

type Props = {
  className?: string;
  url: string;
  title: string;
  description: string;
  links: string[];
}

export const MediaCard = (props: Props) => {
  const {
    className,
    url,
    title,
    description,
  } = props;

  return (
    <div className={`flex flex-col gap-4 items-center ${className}`}>
      <p>
        <Image
          src={ url }
          alt=''
          width={200}
          height={200}
          className='rounded-2xl'
        />
      </p>
      <h2 className='text-xl'>{ title }</h2>
      <p>{ description }</p>
    </div>
  )
};