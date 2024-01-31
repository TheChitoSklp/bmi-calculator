export function calcularBMI_Metrico(weight, height) {
  if (height <= 0) {
    return "0";
  }
  let bmi = weight / Math.pow(height, 2);
  return (bmi * 10000).toFixed(1);
}
console.log(calcularBMI_Metrico(100, 190));
export function calcularBMI_Imperial(weightSt, weightLbs, heightFt, heightIn) {
  let weightEnLibras = weightSt * 14 + weightLbs;
  let heightEnPulgadas = heightFt * 12 + heightIn;

  let bmi = (weightEnLibras / Math.pow(heightEnPulgadas, 2)) * 703;
  return bmi;
}
