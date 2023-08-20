import { CurrentPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  currentPage: CurrentPage;
  setCurrentPage: (value: CurrentPage) => void;
};

const Link = ({ page, currentPage, setCurrentPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as CurrentPage;

  return (
    <AnchorLink
      className={`${currentPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setCurrentPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;