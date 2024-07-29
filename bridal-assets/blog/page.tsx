import { BlogCard } from "@/components/blog-card";
import { Container } from "@/components/container";

const posts = [
  {
    slug: "essential-wedding-planning-tips",
    title: "Essential Tips for a Smooth Wedding Planning Journey",
    description:
      "Embark on your wedding planning journey with confidence. Discover our top tips for organizing a stress-free and memorable celebration that reflects your unique love story.",
    date: "2024-03-01",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "Emma Johnson",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  },
  {
    slug: "2024-bridal-fashion-trends",
    title: "Top Wedding Dress Styles for 2024",
    description:
      "Discover the latest bridal fashion trends for 2024. From classic elegance to modern chic, find the perfect wedding dress style to make your special day unforgettable.",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1459204195697-4de88edf3ab1?ixid=M3w2MTc4NDF8MHwxfHNlYXJjaHw1fHx3ZWRkaW5nJTIwZHJlc3N8ZW58MHwwfHx8MTcyMjA1ODQ2MXww&ixlib=rb-4.0.3",
    author: {
      name: "Sophia Lee",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  },
  {
    slug: "budget-friendly-wedding-guide",
    title: "How to Plan a Beautiful Wedding on a Budget",
    description:
      "Discover smart tips and creative ideas for planning a stunning wedding without breaking the bank. Learn how to prioritize, save, and make the most of your budget for an unforgettable celebration.",
    date: "2024-04-01",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "Michael Brown",
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  },
  {
    slug: "destination-wedding-planning",
    title: "Guide to Planning Your Dream Destination Wedding",
    description:
      "Turn your wedding into an unforgettable adventure with our comprehensive guide to planning a destination wedding. From choosing the perfect location to navigating legal requirements, we've got you covered.",
    date: "2024-04-15",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "Olivia Davis",
      src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  },
  {
    slug: "choosing-perfect-wedding-venue",
    title: "Choosing the Perfect Wedding Venue: Factors to Consider",
    description:
      "Your wedding venue sets the tone for your entire celebration. Discover the key factors to consider when selecting the perfect location for your special day, ensuring it aligns with your vision, budget, and needs.",
    date: "2024-05-01",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "Daniel Wilson",
      src: "https://i.pravatar.cc/150?img=11"
    }
  },
];

export const metadata = {
  title: "Blog | BridalBliss",
  description: "Explore our collection of expert wedding planning advice, tips, and inspiration to help you create the wedding of your dreams.",
};

export default function BlogPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
          Wedding Planning Insights
        </h1>
        <p className="mt-6 text-base text-neutral-600 dark:text-neutral-400">
          Discover expert advice, tips, and inspiration to help you plan your perfect wedding. Our blog covers everything from budgeting to decor ideas, ensuring your special day is nothing short of magical.
        </p>
      </div>
      <div className="mt-16 sm:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} blog={post} />
          ))}
        </div>
      </div>
    </Container>
  );
}