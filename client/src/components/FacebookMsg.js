import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

function FacebookMsg() {
  return (
    <FacebookProvider appId="767173242071422" chatSupport>
      <CustomChat pageId="281503175054414" minimized={false} />
    </FacebookProvider>
  );
}

export default FacebookMsg;
