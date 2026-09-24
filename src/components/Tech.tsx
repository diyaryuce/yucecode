export default function Tech({ image, name }: Props) {
  return (
    <div
      className={`
        flex shrink-0
        items-center justify-center
        gap-2 sm:gap-3
        rounded-lg border
        px-2.5 py-1.5
        text-sm
        sm:px-3 sm:py-2 sm:text-base
        border-[#403f3e] bg-[#202020]

        transition duration-200 hover:scale-[1.05]
        hover:border-[#E8BD70] hover:bg-[#E8BD70]/10
      `}
    >
      <img src={image} className="h-auto w-5" />

      <span>{name}</span>
    </div>
  );
}

type Props = {
  image: string;
  name: string;
};
