import GetQuotation from "../_components/get-quotation";
import { CategoryFilterTabs } from "./_components/category-filter-tabs";
import CategoryWiseServices from "./_components/category-wise-services";

const Page = () => {
  return (
    <>
      <CategoryWiseServices />
      <GetQuotation className="my-0" />
    </>
  );
};

export default Page;
