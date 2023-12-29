// Import React
import React from 'react';

// Define BlockHeader component
function BlockHeader({ title }: { title: string }): JSX.Element {
  return (
    <div className="bg-green py-[16px] px-[25px] rounded-t-[14px]">
      <h4 className="text-[white] font-roboto font-medium text-[32px] md:text-2xl sm:text-base">
        {title}
      </h4>
    </div>
  );
}

// Export BlockHeader component
export default BlockHeader;
