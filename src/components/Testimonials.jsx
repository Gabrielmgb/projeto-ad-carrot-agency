import { TESTIMONIALS } from "../constants";

const Testimonials = () => {
  return (
    <section className="bg-stone-100 px-8 py-20" id="reviews">
      <h2 className="my-8 text-center text-4xl font-semibold tracking tracking-tighter">
        What Client say
      </h2>
      <div className="container mx-auto flex flex-wrap gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={index}
            className={`rounded-3xl p-4 ${testimonial.bgColor} ${testimonial.textColor} flex min-w-[250px] flex-1 flex-col items-start`}
          >
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="mb-4 rounded-3xl object-cover"
            />
            <p className="mb-4 text-lg md:text-xl lg:text-2xl">
              {testimonial.text}
            </p>
            <div className="mt-6">
              <p className="font-bold">{testimonial.author}</p>
              <p className="text-sm">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
