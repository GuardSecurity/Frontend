import moment from "moment";

// 1000000 --> 1.000.000
export const amountFormatting = (amount) =>
  new Intl.NumberFormat().format(amount);

export const dateFormatting = (dateTime) =>
  moment(dateTime).format("DD-MM-YYYY");

export const dateTimeFormatting = (dateTime) =>
  moment(dateTime).format("DD-MM-YYYY HH:mm");

export const dateFullTimeFormatting = (dateTime) =>
  moment(dateTime).format("DD-MM-YYYY HH:mm:ss");
