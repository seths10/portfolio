import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";

interface PopupWindowProps {
  url: string;
  onClose: () => void;
}

const PopupWindow: React.FC<PopupWindowProps> = ({ url, onClose }) => {
  const [iframeContent, setIframeContent] = useState<string | null>(null);
  const [embedError, setEmbedError] = useState<boolean>(false);

  const safeUrl =
    url.startsWith("http://") || url.startsWith("https://")
      ? url
      : `https://${url}`;

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(safeUrl);
        const text = await response.text();
        setIframeContent(text);
      } catch (error) {
        console.error("Error fetching content:", error);
        setEmbedError(true);
        setIframeContent(
          `<p>Unable to load content from ${safeUrl}. The website may not allow embedding.</p>`
        );
      }
    };

    fetchContent();
  }, [safeUrl]);

  const openInNewTab = () => {
    window.open(safeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative w-full h-full max-w-4xl max-h-[100vh]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full bg-white dark:bg-zinc-800 rounded-lg shadow-xl overflow-hidden"
          >
            {iframeContent ? (
              embedError ? (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                  <p className="mb-4">
                    Cannot open this page in preview mode.
                  </p>
                  <p className="mb-4">
                    You can try opening the link in a new tab instead:
                  </p>
                  <button
                    onClick={openInNewTab}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    Open in New Tab
                  </button>
                </div>
              ) : (
                <iframe
                  srcDoc={iframeContent}
                  className="w-full h-full border-0"
                  title="Popup Window Content"
                  sandbox="allow-scripts"
                />
              )
            ) : (
              <div className="w-full h-full flex items-center justify-center"></div>
            )}
          </motion.div>
          <div className="absolute top-2 -right-16 flex flex-col items-end space-y-2">
            <button
              onClick={onClose}
              title="Close"
              className="text-gray-400 hover:text-gray-200 dark:text-gray-400 dark:hover:text-gray-700 dark:bg-gray-200 bg-zinc-600 rounded-full p-2"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={openInNewTab}
              className="text-gray-400 hover:text-gray-200 dark:text-gray-400 dark:hover:text-gray-700 dark:bg-gray-200 bg-zinc-600 rounded-full p-2"
              title="Open in new tab"
            >
              <Maximize2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default PopupWindow;
