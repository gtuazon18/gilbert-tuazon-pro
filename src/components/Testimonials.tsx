import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    name: "David Clarke",
    title: "CEO of Footballer Life",
    message: "Gilbert is the developer you want on your team. He delivered a cloud-based solution that transformed the way we manage our data. Not only was the project completed on time, but Gilbert also went the extra mile to ensure everything was running smoothly. We couldn't have asked for a better partner for our software development needs.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Michael Hawkins",
    title: "CEO of Mymoovz",
    message: "Working with Gilbert was a fantastic experience. He developed a custom web application for our company, and his attention to detail and dedication to delivering high-quality work were evident from day one. The project was completed on time, and the end product exceeded our expectations. I highly recommend his services to anyone looking for a reliable software developer.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    name: "Matteo Siniscalchi",
    title: "CEO of Intelhouse",
    message: "Gilbert handled the entire development process of our e-commerce platform from start to finish. His professionalism and ability to communicate complex technical issues in a way that was easy for us to understand really stood out. The platform is robust, secure, and works flawlessly. We're incredibly happy with the result.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Horacio",
    title: "CEO of Rxn3D",
    message: "Working with Gilbert was an exceptional experience. He delivered a high-quality solution that exceeded our expectations. His technical expertise and attention to detail made all the difference in our project.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=51",
  },
  {
    name: "Reyansh",
    title: "CEO of waal.ai",
    message: "Gilbert's development skills are outstanding. He created a robust and scalable application that perfectly met our requirements. His professionalism and communication throughout the project were exemplary.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=18",
  },
  {
    name: "Darwin",
    title: "CEO of Earn Finance",
    message: "Gilbert transformed our vision into reality with his exceptional development work. The platform he built is both powerful and user-friendly, and his dedication to quality is evident in every aspect of the project.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=52",
  },
  {
    name: "Rob",
    title: "Software Engineer Manager Fintelligence",
    message: "We couldn't be happier with Gilbert's work. He developed a sophisticated financial platform that has significantly improved our operations. His technical knowledge and problem-solving abilities are truly impressive.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=59",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary mb-3 text-sm">{"// Testimonials"}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback from clients I've worked with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-xl p-6 lg:p-8 flex flex-col h-full"
            >
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="w-12 h-12 md:w-14 md:h-14 ring-2 ring-primary/20">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-primary/20 text-primary font-bold">
                    {testimonial.name.split(' ').map(n => n.charAt(0)).join('').toUpperCase().slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base flex-grow">
                {testimonial.message}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

