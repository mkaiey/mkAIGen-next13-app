"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("88f048f0-5a8b-4791-8144-f3217cdd3a1a");
  }, []);

  return null;
};
