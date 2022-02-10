module.exports = (body) => {
  const params = {
    make: body.make,
    model: body.model,
    year: body.year,
    trim: body.trim,
    fuel: body.fuel,
    engineSize: body.engineSize,
    cylinders: body.cylinders,
    valves: body.valves,
    transmission: body.transmission,
    gearBox: body.gearBox,
    drivetrain: body.drivetrain,
  };
  return params;
};
