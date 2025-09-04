type Props = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

const SectionTitle = ({ title, description, children }: Props) => {
  return (
    <div className='sm:flex sm:items-center'>
      <div className='sm:flex-auto'>
        <h1 className='text-lg font-semibold text-gray-900'>{title}</h1>
        {description && (
          <p className='mt-2 text-sm text-gray-700 font-quicksand'>
            {description}
          </p>
        )}
      </div>
      <div className='mt-2 sm:mt-0 sm:ml-16 sm:flex-none'>{children}</div>
    </div>
  );
};
export default SectionTitle;
