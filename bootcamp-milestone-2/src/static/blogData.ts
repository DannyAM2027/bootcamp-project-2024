export type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "STREAM AESPA WHIPLASH",
    date: "10/23/2024",
    description: "GO STREAM AESPA WHIPLASH ",
    image: "/img/aespa_whiplash.jpg",
    imageAlt: "WHIPLASH <3",
    slug: "stream-whiplash",
  },
  {
    title: "STREAM APT BY ROSE and BRUNO MARS",
    date: "10/23/2024",
    description: "GO STREAM APT BY ROSE and BRUNO MARS",
    image: "/img/APT.jpeg",
    imageAlt: "APT <3",
    slug: "stream-APT",
  }
];

export default blogs;