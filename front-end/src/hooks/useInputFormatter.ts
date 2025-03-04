import { useState } from "react";

type FormatType = "phone" | "cnpj" | "cep";

const formatValue = (value: string, type: FormatType) => {
  if (!value) return "";

  const cleaned = value.replace(/\D/g, "");

  switch (type) {
    case "phone":
      return cleaned
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{4})\d+?$/, "$1");

    case "cnpj":
      return cleaned
        .replace(/(\d{2})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");

    case "cep":
      return cleaned
        .replace(/^(\d{5})(\d{3})+?$/, "$1-$2")
        .replace(/(-\d{3})\d+?$/, "$1");

    default:
      return value;
  }
};

export const useInputFormatter = (type: FormatType) => {
  const [value, setValue] = useState("");

  const handleChange = (input: string) => {
    setValue(formatValue(input, type));
  };

  return { value, setValue: handleChange };
};
