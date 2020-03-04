import { FC } from "react";

import PageContainer from "./page-container";

interface Props {
  title: string;
  description?: string;
}

const Page: FC<Props> = ({ title, description, children }) => {
  return (
    <PageContainer title={title} description={description}>
      {children}
    </PageContainer>
  );
};

export default Page;
