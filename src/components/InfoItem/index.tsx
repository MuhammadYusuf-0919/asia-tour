import { useTranslations } from "next-intl"

interface InfoItemProps {
  title: string
  descData: string[]
}

export const InfoItem: React.FC<InfoItemProps> = ({ title, descData }) => {
  const t = useTranslations("home")
  return (
  <div className="rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-0 border border-solid border-grayLighter bg-white shadow-lg grid p-[14px] gap-y-[16px]">
    <h4 className="text-gray-700 font-roboto text-lg font-medium">{t(title)}</h4>
    <div className="gap-y-[8px]">
      {descData.map((text, index) => (
        <p key={index} className="text-gray-700 font-roboto text-base">
          {text}
        </p>
      ))}
    </div>
  </div>
  )
}
