function getShippingFees({ cost }) {
  let shippingFees;
  for (const index in cost.appliedFees) {
    const fee = cost.appliedFees[index];
    if (fee.category === "delivery") {
      shippingFees = fee;
    }
  }
  return shippingFees;
}

getShippingFees(({ cost }) => {
  let shippingFees;
  for (const index in cost.appliedFees) {
    const fee = cost.appliedFees[index];
    {
      fee.category === "delivery" && (shippingFees = fee);
    }
  }
  return shippingFees;
});
