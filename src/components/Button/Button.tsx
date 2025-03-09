const Button = ({ data }: any) => {
  return (
    <div>
      <div className=" bg-red-600 hover:cursor-pointer w-fit text-[16px] rounded-[4px] px-4 py-2 text-white flex gap-2 items-center">
        <div>{data?.name}</div>
        <div>{data?.icon}</div>
      </div>
    </div>
  );
};

export default Button;
