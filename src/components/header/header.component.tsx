interface HeaderProps {
  onSearch: React.HTMLAttributes<HTMLInputElement>['onChange']
}

export const Header: React.FC<HeaderProps> = ({onSearch}) => {
  return (
    <header className="flex h-[90px] items-center justify-between bg-light-grey px-24 py-6">
      <h1 className="font- text-3xl font-semibold leading-[22px]">
        <a href="/">LOGO</a>
      </h1>
      <div className="relative">
        <input
          className="lg:w-[400px] rounded border border-grey px-[20px] py-[10px] pr-[50px] placeholder-grey outline-none sm:w-[300px]"
          type="text"
          placeholder="search..."
          onChange={onSearch}
        />

        <svg
          className="absolute right-[10px] top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_427)">
            <path
              d="M18.3334 18.3334L16.6667 16.6667M9.58341 17.5C10.623 17.5 11.6525 17.2952 12.613 16.8974C13.5735 16.4995 14.4462 15.9164 15.1813 15.1813C15.9165 14.4462 16.4996 13.5734 16.8975 12.6129C17.2953 11.6524 17.5001 10.623 17.5001 9.58335C17.5001 8.54372 17.2953 7.51427 16.8975 6.55378C16.4996 5.59328 15.9165 4.72056 15.1813 3.98542C14.4462 3.25029 13.5735 2.66716 12.613 2.26931C11.6525 1.87146 10.623 1.66669 9.58341 1.66669C7.48378 1.66669 5.47015 2.50076 3.98549 3.98542C2.50082 5.47009 1.66675 7.48372 1.66675 9.58335C1.66675 11.683 2.50082 13.6966 3.98549 15.1813C5.47015 16.6659 7.48378 17.5 9.58341 17.5Z"
              stroke="#595959"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <rect width="20" height="20" fill="white" />
          </defs>
        </svg>
      </div>
    </header>
  );
};
