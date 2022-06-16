import { Breadcrumb, PageHeader } from "antd";
import React, { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
interface BreadCrumb {
  title: string;
  link: string;
}
interface PropsPageHeader {
  title: string;
  breadcrumb: BreadCrumb[];
  onBack: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  extra: React.ReactNode;
}
const CustomePageHeader = ({
  title,
  breadcrumb,
  onBack,
  extra,
}: PropsPageHeader) => {
  const navigator = useNavigate();
  const bc = useMemo(() => {
    return breadcrumb?.map((e, i) => {
      return (
        <Breadcrumb.Item>
          {e?.link ? <Link to={e?.link}>{e?.title}</Link> : e?.title}
        </Breadcrumb.Item>
      );
    });
  }, [breadcrumb]);
  return (
    <PageHeader
      title={title}
      extra={extra}
      onBack={
        onBack
          ? onBack
          : () => {
              navigator(-1);
            }
      }
      breadcrumb={<Breadcrumb>{bc}</Breadcrumb>}
    />
  );
};

export default CustomePageHeader;
