export const truncateText = ( text, n ) => text?.length > n ? `${text.substr( 0, n )}` : text;

export const formatPrice = (price) => {
  let formattedprice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format((price / 100).toFixed(2));
  return formattedprice;
};
