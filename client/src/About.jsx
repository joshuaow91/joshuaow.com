import React from "react"

  
  const About = () => {

    const links = [
        { name: 'links', href: '#' },
        { name: 'links', href: '#' },
        { name: 'links', href: '#' },
        { name: 'links', href: '#' },
      ]
      const stats = [
        { name: 'skill', value: 'icon' },
        { name: 'skill', value: 'icon' },
        { name: 'skill', value: 'icon' },
        { name: 'skill', value: 'icon' },
      ]

    return (
        <div className="relative pt-10">
        <div className="absolute top-0 right-10 flex gap-10 z-10">
        <div className=" bg-white h-52 w-52 p-20 rounded-md drop-shadow-md shadow-black">img</div>
        <div className=" bg-white h-20 w-20 p-20 rounded-md drop-shadow-md shadow-black">img</div>
        <div className=" bg-white h-20 w-20 p-20 rounded-md drop-shadow-md shadow-black">img</div>
        </div>
      <div className="relative isolate overflow-hidden bg-cyan-600 py-24 sm:py-32 skew-container font-montserrat ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 unskew-child">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              About description here
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-black sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link, index) => (
                <a key={`${link.name}-${index}`} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                <div key={`${stat.name}-${index}`} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
                ))}
            </dl>
          </div>
        </div>
      </div>
      </div>
    )
  }
  
  export default About;