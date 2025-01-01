import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";
import Image from "@/components/image";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1>Vishakha's Everything Blog</h1>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1">
            <p>
              Hello and welcome to my Everything Blog. As someone deeply passionate about tech and art—and always picking up new hobbies—I couldn't think of a more fitting name. This space is a reflection of my ever-changing interests, where I share insights, ideas, and creative experiments. I'm striving for consistency here, so thanks for sticking around.
            </p>
            <p>
              Explore posts about my journey in coding, creative detours into art, and everything that sparks my curiosity. I hope you find something here that inspires you to follow your passions, no matter how varied they might be!
            </p>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="B33E177A-6FAF-4CC1-9F25-4794D48E6197_1_201_a.png"
              alt="Avatar"
              caption="This is me!"
            />
          </div>
        </div>
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="blogs" />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}

