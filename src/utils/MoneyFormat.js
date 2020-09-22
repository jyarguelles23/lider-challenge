export const formatAmount = (amount) =>
	amount.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1.');
