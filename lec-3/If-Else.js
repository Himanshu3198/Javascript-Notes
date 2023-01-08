  let vol = length * width * height;
  let bulky = false,
    heavy = false;

  if (vol >= 1000000000 || length >= 10000 || width >= 10000 || height >= 10000)
    bulky = true;
  if (mass >= 100) heavy = true;
  if (bulky && heavy) return "Both";
  if (!bulky && !heavy) return "Neither";
  if (bulky && !heavy) return "Bulky";
  if (!bulky && heavy) return "Heavy";
  return "lol";
