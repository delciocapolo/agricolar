import { ArrowRight } from "lucide-react";
import { FC } from "react";
import { z } from "zod";

interface IReadMore {
  url: string;
}

const ReadMore: FC<IReadMore> = ({ url }) => {
  const { success } = z.string().url().safeParse(url);
  const size = 20;

  if (!success) {
    return null;
  }

  return (
    <a
      href={url}
      target="_parent"
      rel="noopener noreferrer"
      className="readmore-link d-flex"
    >
      Ler mais
      <ArrowRight style={{ color: "var(--Success)" }} size={size} />
    </a>
  );
};

export default ReadMore;
