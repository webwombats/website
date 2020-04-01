const _links = [
  { href: "https://github.com/zeit/next.js", label: "GitHub" },
  { href: "https://nextjs.org/docs", label: "Docs" }
];

const Nav = () => (
  // <nav>
  //   <ul classNameName="flex justify-between items-center p-8">
  //     <li>
  //       <Link href="/">
  //         <a classNameName="text-blue-500 no-underline">Home</a>
  //       </Link>
  //     </li>

  //     <ul classNameName="flex justify-between items-center">
  //       {links.map(({ href, label }) => (
  //         <li key={`${href}${label}`} classNameName="ml-4">
  //           <a href={href} classNameName="btn-blue no-underline">
  //             {label}
  //           </a>
  //         </li>
  //       ))}
  //     </ul>
  //   </ul>
  // </nav>

  <nav id="header" className="w-full text-white gradient">
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
      <div className="pl-4 flex items-center">
        <a
          className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          href="#"
        >
          WEB WOMBATS
        </a>
      </div>
    </div>

    <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
);

export default Nav;
