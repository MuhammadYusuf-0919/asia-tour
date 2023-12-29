import { Card } from "@nextui-org/react";
import { useTranslations } from "next-intl";

interface InfoItemProps {
  title: string;
  descData: string[];
}

export const InfoItem: React.FC<InfoItemProps> = ({ title, descData }) => {
  const t = useTranslations("home");

  const createLink = (data: string) => {
    if (data.includes("tel:")) {
      const phoneNumber = data.replace("tel:", "");
      return <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>;
    } else if (data.includes("mailto:")) {
      const email = data.replace("mailto:", "");
      return <a href={`mailto:${email}`}>{email}</a>;
    } else if (data.startsWith("http")) {
      return <a href={data} target="_blank" rel="noopener noreferrer">{data}</a>;
    } else {
      return data;
    }
  };

  return (
    <Card className="rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-0 bg-white grid p-[14px] gap-y-[16px]">
      <h4 className="text-gray-700 font-roboto text-lg font-medium">{t(title)}</h4>
      <div className="gap-y-[8px]">
        {descData.map((data, index) => (
          <p key={index} className="text-gray-700 font-roboto text-base hover:underline hover:text-green-500">
            {createLink(data)}
          </p>
        ))}
      </div>
    </Card>
  );
};
