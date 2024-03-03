/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        {/* main  */}
        <div className="container px-5 py-10 mx-auto">
          {/* Heading  */}
          <h1 className=" text-center text-3xl font-bold text-black">
            Testimonial
          </h1>
          {/* para  */}
          <h2 className=" text-center text-2xl font-semibold mb-10">
            What our <span className=" text-pink-500">customers</span> are
            saying
          </h2>

          <div className="flex flex-wrap -m-4">
            {/* Testimonial 1 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="data:image/jpeg;base64,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"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Vishal Kumar
                </h2>
                <p className="text-gray-500">React.JS Developer</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://www.devknus.com/img/gawri.png"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  M Mishra
                </h2>
                <p className="text-gray-500">UI Develeoper</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?rs=1&pid=ImgDetMain"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Oracle{" "}
                </h2>
                <p className="text-gray-500">Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
