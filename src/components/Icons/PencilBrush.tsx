function PencilBrush({ size }: { size: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height={size} width={size}>
      <g>
        <path
          d="M6.13,12.06C4.6,13.6,2,14.11.5,12.57,2.5,10.5.5,9.5,2,8a2.9,2.9,0,1,1,4.09,4.1Z"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.92,1.08A2,2,0,0,0,11.44.5,2,2,0,0,0,10,1.17l-5.38,6A2.85,2.85,0,0,1,6.13,8,3,3,0,0,1,6.9,9.31L12.83,4a2,2,0,0,0,.67-1.43A2,2,0,0,0,12.92,1.08Z"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export default PencilBrush
