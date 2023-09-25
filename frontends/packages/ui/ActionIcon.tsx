type Props = {
  iconName: string;
  onClickHandler: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

export function ActionIcon({ iconName, onClickHandler }: Props) {
  return (
    <button
      onClick={onClickHandler}
      className="flex items-center justify-center"
    >
      <img src={`/icons/${iconName}.svg`} />
    </button>
  );
}
