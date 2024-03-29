export const truncateText = (string, n) => {
  return string?.length > n ? `${string.substr(0, n)}` : string;
};

export const formatPrice = (price) => {
  let formattedprice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format((price / 10).toFixed(2));
  return formattedprice;
};
