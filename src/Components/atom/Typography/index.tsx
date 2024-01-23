import React from "react";
const Typography = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <div className={className}>{text}</div>;
};
export default Typography;
