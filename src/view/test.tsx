import React, { type ReactElement } from 'react';

export const Test = (): ReactElement => {
  return (
    <div className="w-screen h-screen bg-main flex flex-col items-center justify-center">
      <div className="w-3/5 h-2/5 bg-gray flex flex-col items-center justify-center">
        <p className="w-4/5 text-subtitle">너가 류에 대해 몰 알아!</p>
        <p className="w-full mt-6 text-center text-title">
          2023 아카이로 류 모의고사
        </p>
      </div>
    </div>
  );
};
