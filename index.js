function calculateWeightedRating(criteria) {
  if (!Array.isArray(criteria) || criteria.length === 0) {
    throw new TypeError(
      "criteria must be a non-empty array."
    );
  }

  for (const item of criteria) {
    if (!item || typeof item !== "object") {
      throw new TypeError(
        "Each criterion must be an object."
      );
    }

    if (
      typeof item.rating !== "number" ||
      !Number.isFinite(item.rating)
    ) {
      throw new TypeError(
        "Each rating must be a valid number."
      );
    }

    if (
      typeof item.weight !== "number" ||
      !Number.isFinite(item.weight)
    ) {
      throw new TypeError(
        "Each weight must be a valid number."
      );
    }

    if (item.weight < 0) {
      throw new RangeError(
        "Weight cannot be negative."
      );
    }
  }

  const totalWeight = criteria.reduce(
    (sum, item) => sum + item.weight,
    0
  );

  if (totalWeight <= 0) {
    throw new RangeError(
      "Total weight must be greater than zero."
    );
  }

  const weightedTotal = criteria.reduce(
    (sum, item) =>
      sum + item.rating * item.weight,
    0
  );

  return weightedTotal / totalWeight;
}

module.exports = {
  calculateWeightedRating
};