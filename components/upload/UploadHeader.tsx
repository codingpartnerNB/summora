import React from "react";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "@/components/common/MotionWrapper";
import { itemVariants } from "@/utils/constants";

const UploadHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center">
      {/* Badge */}
      <MotionDiv variants={itemVariants}>
        <Badge variant={'secondary'} className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-rose-50 rounded-full border border-gray-200 shadow-sm">
          <div className="p-1.5 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-medium text-gray-700">
            AI-Powered Content Creation
          </span>
        </Badge>
      </MotionDiv>

      {/* Main Content */}
      <MotionDiv variants={itemVariants} className="capitalize text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Start Uploading{" "}
        <span className="relative infinite-block">
          <span className="relative z-10 px-2">Your PDF's</span>
          <span
            className="absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1"
            aria-hidden="true"
          ></span>
        </span>{" "}
      </MotionDiv>
      <MotionDiv variants={itemVariants} className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl text-center">
        <p>Upload your PDF and let our AI do the magic! ✨</p>
      </MotionDiv>
    </div>
  );
};

export default UploadHeader;
