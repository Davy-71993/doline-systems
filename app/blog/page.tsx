import Container from "@/components/layout/Container";
import Button from "@/components/parts/Button";
import { Search } from "lucide-react";
import Image from "next/image";

export default function BlogsPage() {
  return (
    <Container className="">
      <div className="w-full max-w-lg mx-auto flex group">
        <input
          className="border-2 peer rounded-l-sm rounded-none border-muted-foreground/80 focus:border-muted-foreground px-5 py-2 w-full"
          placeholder="Searh the blog"
        />
        <Button className="border-2 border-muted-foreground/80 peer-focus:border-muted-foreground border-l-0 rounded-l-none">
          <Search />
        </Button>
      </div>
      <div className="flex flex-col gap-5 py-10 w-full">
        <div className="w-fill flex flex-col-reverse">
          <div className="w-full max-w-[700px] mx-auto px-10">
            <h1 className="text-2xl font-bold">
              Why Your Business Needs an Online Presence in {"Today's"} Digital
              Age.
            </h1>
            <p className="text-lg py-5">
              In {"today's"} fast-paced digital world, having an online presence
              is no longer a luxury but a necessity for businesses of all
              sizes.Whether {"you're"} a small local 1 shop or a multinational
              corporation, an online presence can significantly impact your{" "}
              {"business's"} growth and success. {"Here's"} why:
            </p>
            <ol className="list-decimal text-lg">
              <li className="font-semibold">Increased Visibility and Reach</li>
              <ol className="list-disc flex flex-col gap-5 mb-5">
                <li>
                  <b>Global Audience:</b> The internet transcends geographical
                  boundaries. An online presence allows you to reach a global
                  audience, expanding your potential customer base.
                </li>
                <li>
                  <b>Higher Search Engine Rankings:</b> A well-optimized website
                  can improve your search engine rankings, making it easier for
                  potential customers to find you.
                </li>
                <li>
                  <b>Social Media Power:</b> Leveraging social media platforms
                  can help you connect with your target audience, share valuable
                  content, and drive traffic to your website.
                </li>
              </ol>

              <li className="font-semibold">
                Enhanced Brand Awareness and Reputation
              </li>
              <ol className="list-disc flex flex-col gap-5 mb-5">
                <li>
                  <b>Brand Building:</b> A professional website and active
                  social media profiles can help you establish a strong brand
                  identity and build trust with your audience.
                </li>
                <li>
                  <b>Customer Engagement:</b> By interacting with your customers
                  online, you can foster a sense of community and build loyal
                  relationships.
                </li>
                <li>
                  <b>Reputation Management:</b> Monitor online reviews and
                  respond promptly to customer feedback to maintain a positive
                  brand reputation.
                </li>
              </ol>

              <li className="font-semibold">Cost-Effective Marketing</li>
              <ol className="list-disc flex flex-col gap-5 mb-5">
                <li>
                  <b>Digital Marketing:</b> Compared to traditional marketing
                  methods, digital marketing is often more cost-effective.
                </li>
                <li>
                  <b>Targeted Advertising:</b> Online advertising allows you to
                  target specific demographics and interests, maximizing your
                  marketing budget.
                </li>
                <li>
                  <b>Email Marketing:</b> Build an email list and send targeted
                  marketing campaigns to nurture leads and drive sales.
                </li>
              </ol>

              <li className="font-semibold">Improved Customer Experience</li>
              <ol className="list-disc flex flex-col gap-5 mb-5">
                <li>
                  <b>24/7 Accessibility:</b> An online presence allows customers
                  to access information about your products or services anytime,
                  anywhere.
                </li>
                <li>
                  <b>Easy Information Access:</b> Provide easy-to-find
                  information on your website, such as contact details, FAQs,
                  and product descriptions.
                </li>
                <li>
                  <b>Online Sales:</b> Sell your products or services directly
                  through your website, expanding your reach and increasing
                  revenue.
                </li>
              </ol>

              <li className="font-semibold">Competitive Advantage</li>
              <ol className="list-disc flex flex-col gap-5 mb-5">
                <li>
                  <b>Stay Ahead of the Curve:</b> In {"today's"} competitive
                  market, businesses with a strong online presence have a
                  significant advantage.
                </li>
                <li>
                  <b>Adapt to Changing Trends:</b> By having an online presence,
                  you can quickly adapt to changing consumer trends and market
                  conditions.
                </li>
              </ol>
            </ol>
            <p className="text-lg py-5">
              <b>In conclusion,</b> an online presence is essential for
              businesses in {"today's"} digital age. By investing in a
              well-designed website, active social media profiles, and effective
              digital marketing strategies, you can unlock the full potential of
              your business and achieve long-term success.
            </p>
          </div>
          <Image
            src={"/images/onlie-prensence.jpg"}
            alt="Online Presence"
            height={1000}
            width={1000}
            className="w-full sm:w-1/3 mx-auto max-w-80 h-auto max-h-96 rounded-sm mb-10"
          />
        </div>
      </div>
    </Container>
  );
}
