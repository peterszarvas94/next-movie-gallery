"use client";

import Radio from "./Radio";

function AgeSeletcion() {

  return (
    <div className="flex gap-4 w-full max-w-3xl mx-auto justify-center pb-10">
      <Radio label="0+" value={0} />
      <Radio label="12+" value={12} />
      <Radio label="16+" value={16} />
      <Radio label="18+" value={18} />
    </div>
  );
}

export default AgeSeletcion;
