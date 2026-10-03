"use client";

import React, { useState } from "react";
import EntrySequence from "./entry-sequence";

export default function EntryWrapper({ children }: { children: React.ReactNode }) {
  const [entryComplete, setEntryComplete] = useState(false);

  return (
    <>
      {!entryComplete && <EntrySequence onComplete={() => setEntryComplete(true)} />}
      <div className={!entryComplete ? "h-screen overflow-hidden" : ""}>
        {children}
      </div>
    </>
  );
}
