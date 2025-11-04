const Close = ({
  width,
  height,
  className,
}: {
  width: number | string;
  height: number | string;
  className: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <mask
        id="mask0_336_1050"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#fff" />
      </mask>
      <g mask="url(#mask0_336_1050)">
        <path d="M16.2929 6.29302C16.6834 5.90249 17.3164 5.90249 17.707 6.29302C18.0975 6.68354 18.0975 7.31655 17.707 7.70708L13.414 12L17.707 16.293C18.0975 16.6835 18.0975 17.3166 17.707 17.7071C17.3164 18.0976 16.6834 18.0976 16.2929 17.7071L11.9999 13.4141L7.70696 17.7071C7.31643 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6835 6.29289 16.293L10.5859 12L6.29289 7.70708C5.90237 7.31655 5.90237 6.68354 6.29289 6.29302C6.68342 5.90249 7.31643 5.90249 7.70696 6.29302L11.9999 10.586L16.2929 6.29302Z" />
      </g>
    </svg>
  );
};

export default Close;
