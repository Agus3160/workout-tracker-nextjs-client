import { X } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  display: boolean;
  children: ReactNode;
  onClose?: () => void;
};

export default function Modal({ children, display, onClose }: Props) {
  if (!display) return null;

  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 z-20">
      <div className="flex items-center justify-center h-screen">
        <div className="relative flex flex-col gap-3 sm:gap-6 w-11/12 sm:w-1/2 bg-zinc-800 p-8 rounded">
          {onClose && (
            <button title="close modal" className="absolute top-4 right-4" onClick={onClose}>
              <X className="w-6 h-6 text-red-500" />
            </button>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
